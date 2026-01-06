'use client'

import { useState, useRef } from 'react'

export default function ControlledVsUncontrolledDemo() {
    // Controlled: State controls the input
    const [controlledValue, setControlledValue] = useState('')

    // Uncontrolled: Ref to access DOM value
    const uncontrolledInputRef = useRef<HTMLInputElement>(null)

    // Log renders to observe behavior
    console.log('Component rendered - Controlled value:', controlledValue)

    const handleControlledChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setControlledValue(e.target.value)
        console.log('Controlled onChange - New value:', e.target.value)
    }

    const handleUncontrolledSubmit = () => {
        const value = uncontrolledInputRef.current?.value
        console.log('Uncontrolled value (from ref):', value)
        alert(`Uncontrolled input value: ${value}`)
    }

    return (
        <div>
            <h2>Controlled vs Uncontrolled Components</h2>

            {/* CONTROLLED COMPONENT */}
            <div style={{ border: '2px solid blue', padding: '10px', margin: '10px' }}>
                <h3>✅ Controlled Component</h3>
                <p>React state controls the value</p>

                <input
                    type="text"
                    value={controlledValue}
                    onChange={handleControlledChange}
                    placeholder="Type here (controlled)"
                />

                <p>Current value: {controlledValue}</p>
                <p>Value length: {controlledValue.length}</p>

                <button onClick={() => setControlledValue('')}>
                    Clear (React controls this)
                </button>
            </div>

            {/* UNCONTROLLED COMPONENT */}
            <div style={{ border: '2px solid red', padding: '10px', margin: '10px' }}>
                <h3>❌ Uncontrolled Component</h3>
                <p>DOM controls the value</p>

                <input
                    type="text"
                    ref={uncontrolledInputRef}
                    defaultValue="Initial value"
                    placeholder="Type here (uncontrolled)"
                />

                <p>Value is stored in DOM, not React state</p>

                <button onClick={handleUncontrolledSubmit}>
                    Get Value (read from ref)
                </button>
            </div>
        </div>
    )
}
