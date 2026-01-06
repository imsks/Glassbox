'use client'

import { useState, useEffect, useRef } from 'react'

export default function WebWorkerDemo() {
    const [result, setResult] = useState<number | null>(null)
    const [isComputing, setIsComputing] = useState(false)
    const [mainThreadTime, setMainThreadTime] = useState<number | null>(null)
    const [workerTime, setWorkerTime] = useState<number | null>(null)
    const workerRef = useRef<Worker | null>(null)

    // Initialize worker
    useEffect(() => {
        // Create worker
        workerRef.current = new Worker(new URL('/worker.js', window.location.origin))

        // Listen for messages from worker
        workerRef.current.onmessage = (e) => {
            const { type, result: workerResult } = e.data

            if (type === 'RESULT') {
                setResult(workerResult)
                setIsComputing(false)
                const endTime = performance.now()
                setWorkerTime(endTime - (startTime || endTime))
            }

            if (type === 'FIBONACCI_RESULT') {
                setResult(workerResult)
                setIsComputing(false)
                const endTime = performance.now()
                setWorkerTime(endTime - (startTime || endTime))
            }
        }

        // Handle errors
        workerRef.current.onerror = (error) => {
            console.error('Worker error:', error)
            setIsComputing(false)
        }

        // Cleanup
        return () => {
            workerRef.current?.terminate()
        }
    }, [])

    let startTime: number | null = null

    // Heavy computation in main thread (blocks UI)
    const runInMainThread = () => {
        startTime = performance.now()
        setIsComputing(true)
        setResult(null)

        // This will block the UI!
        let sum = 0
        const iterations = 10000000
        for (let i = 0; i < iterations; i++) {
            sum += Math.sqrt(i) * Math.random()
        }

        setResult(sum)
        setIsComputing(false)
        const endTime = performance.now()
        setMainThreadTime(endTime - startTime)
    }

    // Heavy computation in worker (doesn't block UI)
    const runInWorker = () => {
        if (!workerRef.current) return

        startTime = performance.now()
        setIsComputing(true)
        setResult(null)

        // Send message to worker
        workerRef.current.postMessage({
            type: 'HEAVY_COMPUTATION',
            data: { iterations: 10000000 }
        })
    }

    // Fibonacci in worker
    const calculateFibonacci = (n: number) => {
        if (!workerRef.current) return

        startTime = performance.now()
        setIsComputing(true)
        setResult(null)

        workerRef.current.postMessage({
            type: 'FIBONACCI',
            data: { number: n }
        })
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>Web Workers Demo</h2>

            <div style={{ border: '2px solid red', padding: '15px', marginBottom: '20px' }}>
                <h3>❌ Main Thread (Blocks UI)</h3>
                <button onClick={runInMainThread} disabled={isComputing}>
                    Run Heavy Computation (Main Thread)
                </button>
                {mainThreadTime && (
                    <p>Time: {mainThreadTime.toFixed(2)}ms (UI was frozen!)</p>
                )}
                <p style={{ fontSize: '12px', color: '#666' }}>
                    Try clicking this button - notice the UI freezes!
                </p>
            </div>

            <div style={{ border: '2px solid green', padding: '15px', marginBottom: '20px' }}>
                <h3>✅ Web Worker (Doesn't Block UI)</h3>
                <button onClick={runInWorker} disabled={isComputing}>
                    Run Heavy Computation (Worker)
                </button>
                {workerTime && (
                    <p>Time: {workerTime.toFixed(2)}ms (UI stayed responsive!)</p>
                )}
                {isComputing && <p>Computing in background...</p>}
                {result !== null && <p>Result: {result.toFixed(2)}</p>}
                <p style={{ fontSize: '12px', color: '#666' }}>
                    Try clicking this button - UI stays responsive!
                </p>
            </div>

            <div style={{ border: '2px solid blue', padding: '15px', marginBottom: '20px' }}>
                <h3>Fibonacci Example</h3>
                <button onClick={() => calculateFibonacci(40)} disabled={isComputing}>
                    Calculate Fibonacci(40) in Worker
                </button>
                {result !== null && <p>Result: {result}</p>}
            </div>

            <div style={{ border: '2px solid orange', padding: '15px' }}>
                <h3>Key Observations:</h3>
                <ul>
                    <li>Main thread: UI freezes during computation</li>
                    <li>Worker: UI stays responsive, computation in background</li>
                    <li>Check console for worker logs</li>
                    <li>Try interacting with UI during worker computation</li>
                </ul>
            </div>
        </div>
    )
}
