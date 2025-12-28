// Server Component that uses Client Component
import ClientCounter from './ClientCounter'

export default function ClientPage() {
    return (
        <div>
            <h1>Page with Client Component</h1>
            <p>This page has a Server Component wrapper with Client Component inside</p>
            <ClientCounter />
        </div>
    )
}