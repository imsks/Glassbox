'use client'

import { useState } from 'react'
import axiosInstance from '../lib/axios'

export default function AxiosDemo() {
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    // GET request
    const fetchData = async () => {
        setLoading(true)
        setError(null)
        try {
            const response = await axiosInstance.get('/posts/1')
            setData(response.data)
        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    // POST request
    const createPost = async () => {
        setLoading(true)
        setError(null)
        try {
            const response = await axiosInstance.post('/posts', {
                title: 'Test Post',
                body: 'This is a test',
                userId: 1,
            })
            setData(response.data)
        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    // Simulate 401 error (for testing interceptor)
    const test401Error = async () => {
        setLoading(true)
        setError(null)
        try {
            // This will trigger 401 if endpoint exists
            await axiosInstance.get('/unauthorized')
        } catch (err: any) {
            setError(`Error: ${err.response?.status || err.message}`)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>Axios Interceptors Demo</h2>

            <div style={{ marginBottom: '20px' }}>
                <button onClick={fetchData} disabled={loading}>
                    Fetch Data (GET)
                </button>
                <button onClick={createPost} disabled={loading} style={{ marginLeft: '10px' }}>
                    Create Post (POST)
                </button>
                <button onClick={test401Error} disabled={loading} style={{ marginLeft: '10px' }}>
                    Test 401 Error
                </button>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {data && (
                <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
                    {JSON.stringify(data, null, 2)}
                </pre>
            )}

            <div style={{ marginTop: '20px', padding: '10px', background: '#e8f4f8' }}>
                <h3>What to Observe:</h3>
                <ul>
                    <li>Check console for request interceptor logs</li>
                    <li>Check console for response interceptor logs</li>
                    <li>See Authorization header added automatically</li>
                    <li>See request ID in headers</li>
                </ul>
            </div>
        </div>
    )
}