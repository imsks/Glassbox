export default function BuildAnalysis() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Next.js Build Process Analysis</h1>

            <section style={{ marginBottom: '30px' }}>
                <h2>Build Output Structure</h2>
                <pre style={{ background: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
                    {`.next/
├── server/          # Server-side code
│   ├── app/        # App Router pages
│   └── chunks/     # Code chunks
├── static/         # Static assets
│   └── chunks/     # Client-side chunks
└── cache/          # Build cache`}
                </pre>
            </section>

            <section style={{ marginBottom: '30px' }}>
                <h2>Route Types</h2>
                <div style={{ border: '2px solid blue', padding: '15px', marginBottom: '10px' }}>
                    <h3>Static Routes</h3>
                    <p>✅ Pre-rendered at build time</p>
                    <p>✅ Fast, cached, CDN-friendly</p>
                    <p>Example: /static-page</p>
                </div>

                <div style={{ border: '2px solid orange', padding: '15px', marginBottom: '10px' }}>
                    <h3>Dynamic Routes</h3>
                    <p>✅ Rendered on-demand</p>
                    <p>✅ Can use dynamic data</p>
                    <p>Example: /dynamic-page</p>
                </div>
            </section>

            <section style={{ marginBottom: '30px' }}>
                <h2>Build Process Steps</h2>
                <ol>
                    <li><strong>Analysis</strong>: Next.js analyzes your routes</li>
                    <li><strong>Compilation</strong>: TypeScript/JavaScript compilation</li>
                    <li><strong>Optimization</strong>: Code splitting, tree shaking</li>
                    <li><strong>Static Generation</strong>: Pre-render static pages</li>
                    <li><strong>Bundle Creation</strong>: Create optimized bundles</li>
                </ol>
            </section>

            <section>
                <h2>Key Observations</h2>
                <ul>
                    <li>Server Components don't add to client bundle</li>
                    <li>Client Components create separate chunks</li>
                    <li>Routes are automatically code-split</li>
                    <li>Static pages are pre-rendered HTML</li>
                </ul>
            </section>
        </div>
    )
}