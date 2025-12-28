// Server Component
import InteractiveButton from './InteractiveButton' // Client Component

export default function ServerWithClient() {
    // Server Component logic
    const serverData = 'Data from server'

    return (
        <div style={{ border: '2px solid orange', padding: '20px' }}>
            <h3>Server Component with Client Component</h3>
            <p>Server data: {serverData}</p>

            {/* Client Component for interactivity */}
            <InteractiveButton serverData={serverData} />
        </div>
    )
}