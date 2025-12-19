'use client'

import { memo } from 'react'

// Memoized component - only re-renders if props change
const ChildComponent = ({ onClick }: { onClick: () => void }) => {
    console.log('ChildComponent rendered')

    return (
        <div>
            <h3>Child Component (Memoized)</h3>
            <button onClick={onClick}>Click Me</button>
            <p>This child should only re-render when onClick prop changes</p>
        </div>
    )
}

ChildComponent.displayName = 'ChildComponent'

export default memo(ChildComponent)