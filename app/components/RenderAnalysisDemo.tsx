'use client'

import { useState } from 'react'
import Level1 from './Level1'

export default function RenderAnalysisDemo() {
    const [parentCount, setParentCount] = useState(0)
    const [parentName, setParentName] = useState('Parent')

    console.log('🔴 RenderAnalysisDemo RENDERED')

    return (
        <div style={{ border: '2px solid red', padding: '10px', margin: '10px' }}>
            <h2>Render Analysis Demo</h2>
            <p>Parent Count: {parentCount}</p>
            <p>Parent Name: {parentName}</p>

            <button onClick={() => setParentCount(parentCount + 1)}>
                Update Parent Count
            </button>
            <button onClick={() => setParentName(parentName === 'Parent' ? 'Updated' : 'Parent')}>
                Update Parent Name
            </button>

            {/* Level 1 child */}
            <Level1 parentCount={parentCount} />
        </div>
    )
}