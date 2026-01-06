'use client'

import { useState, useRef, useEffect } from 'react'

export default function EventDelegationDemo() {
    const [logs, setLogs] = useState<string[]>([])
    const containerRef = useRef<HTMLDivElement>(null)

    const addLog = (message: string) => {
        setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`])
    }

    // React's event handler (uses delegation)
    const handleReactClick = (e: React.MouseEvent) => {
        addLog(`React handler - Target: ${(e.target as HTMLElement).tagName}, CurrentTarget: ${(e.currentTarget as HTMLElement).tagName}`)
    }

    // Native event listener on container (delegation pattern)
    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const handleNativeDelegation = (e: MouseEvent) => {
            const target = e.target as HTMLElement

            // Check if clicked element is a button
            if (target.tagName === 'BUTTON') {
                addLog(`Native delegation - Button "${target.textContent}" clicked`)
            }

            // Check if clicked element has a specific class
            if (target.classList.contains('delegated-item')) {
                addLog(`Native delegation - Item with class clicked`)
            }
        }

        container.addEventListener('click', handleNativeDelegation)

        return () => {
            container.removeEventListener('click', handleNativeDelegation)
        }
    }, [])

    // Individual listeners (inefficient - for comparison)
    const handleIndividualClick = (id: string) => {
        addLog(`Individual handler - Button ${id} clicked`)
    }

    return (
        <div>
            <h2>Event Delegation Demo</h2>

            <div style={{ display: 'flex', gap: '20px' }}>
                {/* Left: Examples */}
                <div style={{ flex: 1 }}>

                    {/* Example 1: React's built-in delegation */}
                    <div style={{ border: '2px solid blue', padding: '20px', marginBottom: '20px' }}>
                        <h3>Example 1: React's Event Delegation</h3>
                        <p>React attaches ONE listener at root, handles all clicks</p>
                        <div onClick={handleReactClick} style={{ border: '1px solid gray', padding: '10px' }}>
                            <p>Container (currentTarget)</p>
                            <button>Button 1 (target)</button>
                            <button>Button 2 (target)</button>
                            <span style={{ display: 'block', marginTop: '10px' }}>
                                <button>Button 3 (nested target)</button>
                            </span>
                        </div>
                        <p>Click any button - see target vs currentTarget</p>
                    </div>

                    {/* Example 2: Native delegation pattern */}
                    <div style={{ border: '2px solid green', padding: '20px', marginBottom: '20px' }}>
                        <h3>Example 2: Native Event Delegation</h3>
                        <p>One listener on container, handles all child clicks</p>
                        <div ref={containerRef} style={{ border: '1px solid gray', padding: '10px' }}>
                            <button>Dynamic Button A</button>
                            <button>Dynamic Button B</button>
                            <div className="delegated-item" style={{ padding: '10px', background: '#f0f0f0', marginTop: '10px', cursor: 'pointer' }}>
                                Clickable Div (has delegated-item class)
                            </div>
                        </div>
                        <p>All handled by ONE listener on container</p>
                    </div>

                    {/* Example 3: Individual listeners (inefficient) */}
                    <div style={{ border: '2px solid red', padding: '20px' }}>
                        <h3>Example 3: Individual Listeners (Inefficient)</h3>
                        <p>Each button has its own listener</p>
                        <div style={{ border: '1px solid gray', padding: '10px' }}>
                            <button onClick={() => handleIndividualClick('1')}>Button 1</button>
                            <button onClick={() => handleIndividualClick('2')}>Button 2</button>
                            <button onClick={() => handleIndividualClick('3')}>Button 3</button>
                        </div>
                        <p>❌ Creates 3 separate listeners</p>
                    </div>

                </div>

                {/* Right: Logs */}
                <div style={{ border: '2px solid orange', padding: '20px', flex: 1, maxHeight: '600px', overflow: 'auto' }}>
                    <h3>Event Logs</h3>
                    <button onClick={() => setLogs([])} style={{ marginBottom: '10px' }}>
                        Clear Logs
                    </button>
                    <div style={{ fontFamily: 'monospace', fontSize: '12px' }}>
                        {logs.length === 0 ? (
                            <p style={{ color: '#999' }}>Click buttons to see event flow...</p>
                        ) : (
                            logs.map((log, i) => (
                                <div key={i} style={{ marginBottom: '4px' }}>{log}</div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            {/* Information section */}
            <div style={{ border: '2px solid purple', padding: '20px', marginTop: '20px' }}>
                <h3>Key Concepts</h3>
                <ul>
                    <li><strong>Event Bubbling</strong>: Events bubble from target → parent → root</li>
                    <li><strong>Delegation</strong>: Parent handles events for all children</li>
                    <li><strong>target</strong>: The element that was actually clicked</li>
                    <li><strong>currentTarget</strong>: The element with the event listener</li>
                    <li><strong>React's Approach</strong>: One listener at root, handles all events</li>
                </ul>
            </div>
        </div>
    )
}
