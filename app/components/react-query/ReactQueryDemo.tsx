'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getPost, getPosts, createPost, updatePost, deletePost } from '../../lib/api'
import { useState } from 'react'

export default function ReactQueryDemo() {
    const queryClient = useQueryClient()
    const [selectedPostId, setSelectedPostId] = useState(1)

    // Query - Fetch single post
    const {
        data: post,
        isLoading: postLoading,
        isError: postError,
        isStale,
        dataUpdatedAt,
    } = useQuery({
        queryKey: ['post', selectedPostId], // Cache key
        queryFn: () => getPost(selectedPostId),
        staleTime: 30 * 1000, // 30 seconds
    })

    // Query - Fetch all posts
    const {
        data: posts,
        isLoading: postsLoading,
    } = useQuery({
        queryKey: ['posts'], // Different key = different cache
        queryFn: getPosts,
    })

    // Mutation - Create post
    const createMutation = useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            // Invalidate posts cache - triggers refetch
            queryClient.invalidateQueries({ queryKey: ['posts'] })
            console.log('✅ Post created, cache invalidated')
        },
        onError: (error) => {
            console.error('❌ Create failed:', error)
        },
    })

    // Mutation - Update post
    const updateMutation = useMutation({
        mutationFn: ({ id, data }: { id: number; data: { title: string; body: string } }) =>
            updatePost(id, data),
        onSuccess: (data, variables) => {
            // Invalidate specific post cache
            queryClient.invalidateQueries({ queryKey: ['post', variables.id] })
            // Also invalidate all posts
            queryClient.invalidateQueries({ queryKey: ['posts'] })
            console.log('✅ Post updated, cache invalidated')
        },
    })

    // Mutation - Delete post
    const deleteMutation = useMutation({
        mutationFn: deletePost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] })
            console.log('✅ Post deleted, cache invalidated')
        },
    })

    // Manual cache operations
    const refetchPost = () => {
        queryClient.invalidateQueries({ queryKey: ['post', selectedPostId] })
    }

    const clearCache = () => {
        queryClient.clear()
        console.log('🗑️ Cache cleared')
    }

    const getCacheData = () => {
        const cachedPost = queryClient.getQueryData(['post', selectedPostId])
        console.log('📦 Cached post data:', cachedPost)
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>React Query Caching Demo</h2>

            {/* Query Example */}
            <div style={{ border: '2px solid blue', padding: '15px', marginBottom: '20px' }}>
                <h3>Query Example (GET)</h3>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Post ID:{' '}
                        <input
                            type="number"
                            value={selectedPostId}
                            onChange={(e) => setSelectedPostId(Number(e.target.value))}
                            min="1"
                            max="100"
                        />
                    </label>
                    <button onClick={refetchPost} style={{ marginLeft: '10px' }}>
                        Refetch
                    </button>
                </div>

                {postLoading && <p>Loading post...</p>}
                {postError && <p style={{ color: 'red' }}>Error loading post</p>}
                {post && (
                    <div>
                        <p>
                            <strong>Title:</strong> {post.title}
                        </p>
                        <p>
                            <strong>Body:</strong> {post.body}
                        </p>
                        <p style={{ fontSize: '12px', color: '#666' }}>
                            Stale: {isStale ? 'Yes' : 'No'} | Updated: {new Date(dataUpdatedAt).toLocaleTimeString()}
                        </p>
                    </div>
                )}
            </div>

            {/* Mutation Examples */}
            <div style={{ border: '2px solid green', padding: '15px', marginBottom: '20px' }}>
                <h3>Mutation Examples (POST/PUT/DELETE)</h3>

                <div style={{ marginBottom: '10px' }}>
                    <button
                        onClick={() =>
                            createMutation.mutate({
                                title: 'New Post',
                                body: 'This is a new post',
                                userId: 1,
                            })
                        }
                        disabled={createMutation.isPending}
                    >
                        {createMutation.isPending ? 'Creating...' : 'Create Post'}
                    </button>
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <button
                        onClick={() =>
                            updateMutation.mutate({
                                id: 1,
                                data: { title: 'Updated Title', body: 'Updated body' },
                            })
                        }
                        disabled={updateMutation.isPending}
                    >
                        {updateMutation.isPending ? 'Updating...' : 'Update Post #1'}
                    </button>
                </div>

                <div>
                    <button
                        onClick={() => deleteMutation.mutate(1)}
                        disabled={deleteMutation.isPending}
                    >
                        {deleteMutation.isPending ? 'Deleting...' : 'Delete Post #1'}
                    </button>
                </div>
            </div>

            {/* Cache Operations */}
            <div style={{ border: '2px solid orange', padding: '15px', marginBottom: '20px' }}>
                <h3>Cache Operations</h3>
                <button onClick={getCacheData} style={{ marginRight: '10px' }}>
                    Get Cached Data
                </button>
                <button onClick={clearCache}>Clear All Cache</button>
            </div>

            {/* Observations */}
            <div style={{ border: '2px solid purple', padding: '15px' }}>
                <h3>What to Observe:</h3>
                <ul>
                    <li>First fetch: Loads from API (check Network tab)</li>
                    <li>Second fetch (same ID): Loads from cache instantly (no network request)</li>
                    <li>Different ID: New fetch (different cache key)</li>
                    <li>After mutation: Related queries refetch automatically</li>
                    <li>Check console for cache invalidation logs</li>
                    <li>Stale indicator shows when data is considered stale</li>
                </ul>
            </div>
        </div>
    )
}
