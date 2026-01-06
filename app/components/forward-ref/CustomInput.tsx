'use client'

import { forwardRef } from 'react'

// forwardRef allows component to receive ref
const CustomInput = forwardRef<HTMLInputElement, { placeholder?: string }>(
    (props, ref) => {
        return (
            <input
                ref={ref} // Forward the ref to the actual DOM element
                {...props}
                style={{
                    padding: '8px',
                    border: '2px solid blue',
                    borderRadius: '4px'
                }}
            />
        )
    }
)

CustomInput.displayName = 'CustomInput' // Important for DevTools

export default CustomInput
