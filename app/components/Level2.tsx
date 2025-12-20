'use client'

import { memo, useState } from 'react'

function Level2({ parentCount }: { parentCount: number }) {
    const [level2Count, setLevel2Count] = useState(0)

    console.log('🟢 Level2 RENDERED - parentCount:', parentCount)

    return (
        <div style={{ border: '2px solid green', padding: '10px', margin: '10px' }}>
            <h4>Level 2</h4>
            <p>Parent Count (prop): {parentCount}</p>
            <p>Level 2 Count (state): {level2Count}</p>

            <button onClick={() => setLevel2Count(level2Count + 1)}>
                Update Level 2 Count
            </button>
        </div>
    )
}

export default memo(Level2)