'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export default function QueryProvider({ children }: { children: React.ReactNode }) {
    // Create QueryClient with custom config
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        // Time before data is considered stale (in milliseconds)
                        staleTime: 60 * 1000, // 1 minute
                        // Time before unused cache is garbage collected
                        gcTime: 5 * 60 * 1000, // 5 minutes (was cacheTime in v4)
                        // Retry failed requests
                        retry: 1,
                        // Refetch on window focus
                        refetchOnWindowFocus: false,
                    },
                },
            })
    )

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}