// Server Component that uses Client Component
import ClientCounter from './ClientCounter'

export default function ClientPageDemo() {
    return (
        <div style={{ border: '2px solid purple', padding: '20px', margin: '10px' }}>
            <h3>Server Component with Client Component</h3>
            <p>This is a Server Component wrapper with Client Component inside</p>
            <ClientCounter />
        </div>
    )
}
