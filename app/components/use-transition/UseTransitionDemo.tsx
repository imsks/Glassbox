'use client'

import { useState, useTransition } from 'react'

export default function UseTransitionDemo() {
    const [input, setInput] = useState('')
    const [list, setList] = useState<string[]>([])
    const [isPending, startTransition] = useTransition()
    const [withoutTransition, setWithoutTransition] = useState(false)

    // Generate large list
    const generateList = (filter: string) => {
        const items: string[] = []
        for (let i = 0; i < 50000; i++) {
            if (filter === '' || i.toString().includes(filter)) {
                items.push(`Item ${i}`)
            }
        }
        return items
    }

    // Update with transition (non-urgent)
    const handleInputChangeWithTransition = (value: string) => {
        setInput(value) // Urgent - updates immediately

        startTransition(() => {
            // Non-urgent - can be interrupted
            const filtered = generateList(value)
            setList(filtered)
        })
    }

    // Update without transition (blocks UI)
    const handleInputChangeWithoutTransition = (value: string) => {
        setInput(value)
        setWithoutTransition(true)

        // This blocks the UI!
        const filtered = generateList(value)
        setList(filtered)
        setWithoutTransition(false)
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>useTransition Demo</h2>

            <div style={{ border: '2px solid green', padding: '15px', marginBottom: '20px' }}>
                <h3>✅ With useTransition</h3>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => handleInputChangeWithTransition(e.target.value)}
                    placeholder="Type to filter (with transition)"
                    style={{ padding: '8px', width: '300px' }}
                />
                {isPending && <p>Filtering... (UI stays responsive!)</p>}
                <p>Items: {list.length}</p>
                <div style={{ maxHeight: '200px', overflow: 'auto' }}>
                    {list.slice(0, 100).map((item, i) => (
                        <div key={i}>{item}</div>
                    ))}
                </div>
            </div>

            <div style={{ border: '2px solid red', padding: '15px', marginBottom: '20px' }}>
                <h3>❌ Without useTransition</h3>
                <input
                    type="text"
                    onChange={(e) => handleInputChangeWithoutTransition(e.target.value)}
                    placeholder="Type to filter (without transition)"
                    style={{ padding: '8px', width: '300px' }}
                />
                {withoutTransition && <p>Filtering... (UI is blocked!)</p>}
                <p style={{ fontSize: '12px', color: '#666' }}>
                    Notice how typing feels laggy!
                </p>
            </div>

            <div style={{ border: '2px solid orange', padding: '15px' }}>
                <h3>Key Observations:</h3>
                <ul>
                    <li>With transition: Input stays responsive, filtering happens in background</li>
                    <li>Without transition: Input lags, UI freezes during filtering</li>
                    <li>isPending: Shows when transition is in progress</li>
                    <li>Try typing fast - see the difference!</li>
                </ul>
            </div>
        </div>
    )
}
