// Static page - will be pre-rendered at build time
export default function StaticPage() {
    const buildTime = new Date().toISOString()

    return (
        <div>
            <h1>Static Page</h1>
            <p>This page is pre-rendered at build time</p>
            <p>Build time: {buildTime}</p>
        </div>
    )
}