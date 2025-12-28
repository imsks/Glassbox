// Dynamic page - rendered on-demand
export const dynamic = 'force-dynamic' // Force dynamic rendering

export default function DynamicPage() {
    const renderTime = new Date().toISOString()

    return (
        <div>
            <h1>Dynamic Page</h1>
            <p>This page is rendered on-demand</p>
            <p>Render time: {renderTime}</p>
        </div>
    )
}