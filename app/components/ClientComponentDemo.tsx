'use client' // This makes it a Client Component

import { useState, useEffect } from 'react'

export default function ClientComponentDemo() {
    const [count, setCount] = useState(0)
    const [clientTime, setClientTime] = useState<string>('')

    useEffect(() => {
        // This runs on the CLIENT
        setClientTime(new Date().toISOString())
    }, [])

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div style={{ border: '2px solid green', padding: '20px', margin: '10px' }}>
            <h3>✅ Client Component</h3>
            <p>Rendered on: <strong>CLIENT</strong></p>
            <p>Client Time: {clientTime}</p>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
            <p>✅ Can use: useState, useEffect, event handlers, browser APIs</p>
            <p>❌ Cannot access: Server-only APIs, File System, Database directly</p>
        </div>
    )
}