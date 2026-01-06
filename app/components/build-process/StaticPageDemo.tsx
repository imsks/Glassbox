// Static page demo - will be pre-rendered at build time
export default function StaticPageDemo() {
    const buildTime = new Date().toISOString()

    return (
        <div style={{ border: '2px solid blue', padding: '20px', margin: '10px' }}>
            <h3>Static Page Demo</h3>
            <p>This component simulates a static page that would be pre-rendered at build time</p>
            <p>Build time: {buildTime}</p>
            <p>✅ Pre-rendered at build</p>
            <p>✅ Fast, cached, CDN-friendly</p>
        </div>
    )
}
