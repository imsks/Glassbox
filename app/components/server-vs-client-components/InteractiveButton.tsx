'use client'

import { useState } from 'react'

export default function InteractiveButton({ serverData }: { serverData: string }) {
    const [clicked, setClicked] = useState(false)

    return (
        <div>
            <button onClick={() => setClicked(true)}>
                Click Me (Client Component)
            </button>
            {clicked && <p>You clicked! Server data: {serverData}</p>}
        </div>
    )
}
