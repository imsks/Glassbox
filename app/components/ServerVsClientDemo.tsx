// This is a Server Component (no 'use client')
import ServerComponentDemo from './ServerComponentDemo'
import ClientComponentDemo from './ClientComponentDemo'

export default function ServerVsClientDemo() {
    // This runs on SERVER
    const pageRenderTime = new Date().toISOString()

    return (
        <div>
            <h2>Server Components vs Client Components</h2>
            <p>Page rendered at: {pageRenderTime} (Server)</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <ServerComponentDemo />
                <ClientComponentDemo />
            </div>

            {/* Mixing Server and Client Components */}
            <div style={{ border: '2px solid purple', padding: '20px', marginTop: '20px' }}>
                <h3>Mixing Server and Client Components</h3>
                <p>Server Components can import and render Client Components</p>
                <ClientComponentDemo />
            </div>
        </div>
    )
}