'use client'

import { useEffect, useState } from "react"

export default function StrictMode() {
    const [count, setCount] = useState(0)
    // Log here - will fire twice in dev
    console.log('Component rendered')

    useEffect(() => {
        console.log('Component mounted')
    }, [])

    return (
        <div>
            <h1>Strict Mode Demo</h1>
            <p>This component is rendered in Strict Mode.</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <p>Count: {count}</p>
        </div>
    )
}