'use client'

import { useState } from 'react'

export default function CreateRootDemo() {
    const [count, setCount] = useState(0)
    const [flag, setFlag] = useState(false)

    // With createRoot (React 18), these are automatically batched
    const handleClick = () => {
        setCount(c => c + 1)
        setFlag(f => !f)
        // In React 18: Only ONE re-render (automatic batching)
        // In React 17: TWO re-renders (without createRoot)
    }

    console.log('Render:', { count, flag })

    return (
        <div style={{ padding: '20px' }}>
            <h2>createRoot() - Automatic Batching Demo</h2>

            <div style={{ border: '2px solid blue', padding: '15px', marginBottom: '20px' }}>
                <p>Count: {count}</p>
                <p>Flag: {flag.toString()}</p>
                <button onClick={handleClick}>Update Both States</button>
                <p style={{ fontSize: '12px', marginTop: '10px' }}>
                    Check console - should see only ONE render per click
                    (automatic batching in React 18 with createRoot)
                </p>
            </div>

            <div style={{ border: '2px solid orange', padding: '15px' }}>
                <h3>What createRoot() Enables:</h3>
                <ul>
                    <li>✅ Automatic batching (multiple setState = one render)</li>
                    <li>✅ Concurrent rendering (interruptible updates)</li>
                    <li>✅ Suspense for data fetching</li>
                    <li>✅ useTransition and useDeferredValue</li>
                    <li>✅ Better performance and UX</li>
                </ul>
            </div>
        </div>
    )
}