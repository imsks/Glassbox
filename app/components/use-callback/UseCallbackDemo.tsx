'use client'

import { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent'

export default function UseCallbackDemo() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('John')

    // ❌ PROBLEM: New function on every render
    const handleClick = useCallback(() => {
        console.log('Button clicked!')
    }, [count])

    console.log('Parent rendered')

    return (
        <div>
            <h2>useCallback Demo</h2>
            <p>Count: {count}</p>
            <p>Name: {name}</p>

            <button onClick={() => setCount(count + 1)}>
                Increment Count
            </button>
            <button onClick={() => setName(name === 'John' ? 'Jane' : 'John')}>
                Toggle Name
            </button>

            {/* Child receives function prop */}
            <ChildComponent onClick={handleClick} />
        </div>
    )
}
