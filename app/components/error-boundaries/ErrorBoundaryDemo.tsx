'use client'

import ErrorBoundary from './ErrorBoundary'
import BuggyComponent from './BuggyComponent'

export default function ErrorBoundaryDemo() {
    return (
        <div>
            <h2>Error Boundary Demo</h2>

            <ErrorBoundary>
                <BuggyComponent />
            </ErrorBoundary>

            <div style={{ border: '2px solid green', padding: '10px', margin: '10px' }}>
                <h3>This component is outside Error Boundary</h3>
                <p>It will still work even if BuggyComponent crashes</p>
            </div>
        </div>
    )
}
