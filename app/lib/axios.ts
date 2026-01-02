import axios from 'axios'

// Create axios instance
const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://jsonplaceholder.typicode.com',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

// Request Interceptor - runs BEFORE request is sent
axiosInstance.interceptors.request.use(
    (config) => {
        // Get token from localStorage (or wherever you store it)
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

        // Add token to headers if exists
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        // Add request ID for tracking
        config.headers['X-Request-ID'] = `req-${Date.now()}`

        // Log request
        console.log('🚀 Request Interceptor:', {
            method: config.method?.toUpperCase(),
            url: config.url,
            headers: config.headers,
        })

        return config
    },
    (error) => {
        // Handle request error
        console.error('❌ Request Error:', error)
        return Promise.reject(error)
    }
)

// Response Interceptor - runs AFTER response is received
axiosInstance.interceptors.response.use(
    (response) => {
        // Success response
        console.log('✅ Response Interceptor:', {
            status: response.status,
            url: response.config.url,
            data: response.data,
        })

        // Transform response if needed
        // return { ...response, data: response.data.data }

        return response
    },
    async (error) => {
        // Error response
        console.log('❌ Response Error:', {
            status: error.response?.status,
            url: error.config?.url,
            message: error.message,
        })

        // Handle 401 Unauthorized - token expired
        if (error.response?.status === 401) {
            console.log('🔄 Token expired, attempting refresh...')

            // Try to refresh token
            try {
                const refreshToken = localStorage.getItem('refreshToken')
                const refreshResponse = await axios.post('/api/auth/refresh', {
                    refreshToken,
                })

                // Store new token
                localStorage.setItem('token', refreshResponse.data.token)

                // Retry original request with new token
                error.config.headers.Authorization = `Bearer ${refreshResponse.data.token}`
                return axiosInstance(error.config)
            } catch (refreshError) {
                // Refresh failed - redirect to login
                console.error('❌ Token refresh failed')
                if (typeof window !== 'undefined') {
                    localStorage.removeItem('token')
                    window.location.href = '/login'
                }
                return Promise.reject(refreshError)
            }
        }

        // Handle 500 Server Error
        if (error.response?.status === 500) {
            console.error('🔥 Server Error:', error.response.data)
            // Show user-friendly error message
        }

        // Handle Network Error
        if (!error.response) {
            console.error('🌐 Network Error:', error.message)
            // Show network error message
        }

        return Promise.reject(error)
    }
)

export default axiosInstance