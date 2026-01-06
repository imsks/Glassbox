// Dynamic page demo - rendered on-demand
export const dynamic = 'force-dynamic' // Force dynamic rendering

export default function DynamicPageDemo() {
    const renderTime = new Date().toISOString()

    return (
        <div style={{ border: '2px solid orange', padding: '20px', margin: '10px' }}>
            <h3>Dynamic Page Demo</h3>
            <p>This component simulates a dynamic page that would be rendered on-demand</p>
            <p>Render time: {renderTime}</p>
            <p>✅ Rendered on-demand</p>
            <p>✅ Can use dynamic data</p>
        </div>
    )
}
