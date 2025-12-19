'use client'

import { useState, useRef } from 'react'

export default function RefVsStateDemo() {
    // useState - will trigger re-renders
    const [stateCount, setStateCount] = useState(0)

    // useRef - will NOT trigger re-renders
    const refCount = useRef(0)

    // Function to increment state
    const incrementState = () => {
        setStateCount(stateCount + 1)
        console.log('State updated, component will re-render')
    }

    // Function to increment ref
    const incrementRef = () => {
        refCount.current += 1
        console.log('Ref updated:', refCount.current, '- NO re-render!')
    }

    // Log on every render to observe behavior
    console.log('Component rendered - State:', stateCount, 'Ref:', refCount.current)

    return (
        <div>
            <h2>useState vs useRef Demo</h2>

            <div>
                <h3>useState Counter</h3>
                <p>Count: {stateCount}</p>
                <button onClick={incrementState}>Increment State</button>
                <p>✅ Updates UI immediately</p>
            </div>

            <div>
                <h3>useRef Counter</h3>
                <p>Count: {refCount.current}</p>
                <button onClick={incrementRef}>Increment Ref</button>
                <p>❌ UI doesn't update (but value changes!)</p>
            </div>

            {/* Add a button that forces re-render to see ref value */}
            <button onClick={() => setStateCount(stateCount)}>
                Force Re-render (to see ref value)
            </button>
        </div>
    )
}