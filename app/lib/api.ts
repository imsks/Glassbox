import axiosInstance from './axios'

// GET - Fetch single post
export const getPost = async (id: number) => {
    const response = await axiosInstance.get(`/posts/${id}`)
    return response.data
}

// GET - Fetch all posts
export const getPosts = async () => {
    const response = await axiosInstance.get('/posts')
    return response.data
}

// GET - Fetch user
export const getUser = async (id: number) => {
    const response = await axiosInstance.get(`/users/${id}`)
    return response.data
}

// POST - Create post
export const createPost = async (data: { title: string; body: string; userId: number }) => {
    const response = await axiosInstance.post('/posts', data)
    return response.data
}

// PUT - Update post
export const updatePost = async (id: number, data: { title: string; body: string }) => {
    const response = await axiosInstance.put(`/posts/${id}`, data)
    return response.data
}

// DELETE - Delete post
export const deletePost = async (id: number) => {
    const response = await axiosInstance.delete(`/posts/${id}`)
    return response.data
}