'use client'

import { useState } from 'react'

export default function BuggyComponent() {
    const [shouldThrow, setShouldThrow] = useState(false)
    const [shouldThrowInRender, setShouldThrowInRender] = useState(false)

    // Error in event handler - NOT caught by Error Boundary
    const handleEventError = () => {
        throw new Error('Error in event handler - not caught!')
    }

    // Error in render - CAUGHT by Error Boundary
    if (shouldThrowInRender) {
        throw new Error('Error in render - caught by Error Boundary!')
    }

    return (
        <div style={{ border: '2px solid orange', padding: '10px', margin: '10px' }}>
            <h3>Buggy Component</h3>

            <button onClick={handleEventError}>
                Throw Error in Event Handler
            </button>
            <p>❌ This won't be caught by Error Boundary</p>

            <button onClick={() => setShouldThrowInRender(true)}>
                Throw Error in Render
            </button>
            <p>✅ This WILL be caught by Error Boundary</p>
        </div>
    )
}
