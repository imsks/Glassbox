'use client'

import { useRef } from 'react'
import CustomInput from './CustomInput'

export default function ForwardRefDemo() {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleFocus = () => {
        // Try to focus the input
        inputRef.current?.focus()
        console.log('Focusing input via ref')
    }

    const handleGetValue = () => {
        const value = inputRef.current?.value
        console.log('Input value:', value)
        alert(`Input value: ${value}`)
    }

    return (
        <div>
            <h2>forwardRef Demo</h2>

            {/* With forwardRef - this works! */}
            <div style={{ border: '2px solid green', padding: '10px', margin: '10px' }}>
                <h3>✅ With forwardRef</h3>
                <CustomInput ref={inputRef} placeholder="Type here" />

                <button onClick={handleFocus}>Focus Input</button>
                <button onClick={handleGetValue}>Get Value</button>
            </div>
        </div>
    )
}
