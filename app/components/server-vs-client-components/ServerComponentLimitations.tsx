// Server Component - showing what WON'T work

export default function ServerComponentLimitations() {
    // ❌ This would cause an error - can't use hooks in Server Components
    // const [state, setState] = useState(0)

    // ❌ Can't use useEffect
    // useEffect(() => {}, [])

    // ❌ Can't use event handlers directly
    // const handleClick = () => {}

    return (
        <div style={{ border: '2px solid red', padding: '20px' }}>
            <h3>Server Component Limitations</h3>
            <ul>
                <li>❌ Cannot use React hooks (useState, useEffect, etc.)</li>
                <li>❌ Cannot use event handlers (onClick, onChange, etc.)</li>
                <li>❌ Cannot use browser APIs (window, document, localStorage)</li>
                <li>✅ Can fetch data directly (no useEffect needed!)</li>
                <li>✅ Can access server resources (database, file system)</li>
            </ul>
        </div>
    )
}
