'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
    children: ReactNode
    fallback?: ReactNode
}

interface State {
    hasError: boolean
    error: Error | null
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            hasError: false,
            error: null
        }
    }

    // Called when error is thrown in child component
    static getDerivedStateFromError(error: Error): State {
        return {
            hasError: true,
            error
        }
    }

    // Called after error is caught (for logging)
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error caught by boundary:', error)
        console.error('Error info:', errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                this.props.fallback || (
                    <div style={{
                        border: '2px solid red',
                        padding: '20px',
                        margin: '10px',
                        backgroundColor: '#fee'
                    }}>
                        <h2>⚠️ Something went wrong</h2>
                        <p>Error: {this.state.error?.message}</p>
                        <button onClick={() => this.setState({ hasError: false, error: null })}>
                            Try Again
                        </button>
                    </div>
                )
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
