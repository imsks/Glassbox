'use client'

import { memo, useRef, useState } from 'react'
import Level2 from './Level2'

function Level1({ parentCount }: { parentCount: number }) {
    const [level1Count, setLevel1Count] = useState(0)

    console.log('🟡 Level1 RENDERED - parentCount:', parentCount)
    const renderCount = useRef(0)
    renderCount.current += 1

    console.log('🟡 Level1 RENDERED - Render #', renderCount.current)

    return (
        <div style={{ border: '2px solid orange', padding: '10px', margin: '10px' }}>
            <h3>Level 1</h3>
            <p>Parent Count (prop): {parentCount}</p>
            <p>Level 1 Count (state): {level1Count}</p>

            <button onClick={() => setLevel1Count(level1Count + 1)}>
                Update Level 1 Count
            </button>

            {/* Level 2 child - receives parentCount but not level1Count */}
            <Level2 parentCount={parentCount} />
        </div>
    )
}

export default memo(Level1)