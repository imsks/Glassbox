// NO 'use client' - This is a Server Component
// It runs on the server only

export default function ServerComponentDemo() {
    // This runs on the SERVER
    const serverTime = new Date().toISOString()
    const serverEnv = process.env.NODE_ENV

    // You can access server-only APIs
    // const data = await fetch('https://api.example.com/data')

    return (
        <div style={{ border: '2px solid blue', padding: '20px', margin: '10px' }}>
            <h3>✅ Server Component</h3>
            <p>Rendered on: <strong>SERVER</strong></p>
            <p>Server Time: {serverTime}</p>
            <p>Environment: {serverEnv}</p>
            <p>✅ Can access: Database, File System, Server APIs</p>
            <p>❌ Cannot use: useState, useEffect, event handlers</p>
        </div>
    )
}