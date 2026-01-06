import Link from 'next/link'

export default function Home() {
  const topics = [
    { name: 'React StrictMode', path: '/topics/react-strict-mode', category: 'React Fundamentals' },
    { name: 'useRef vs useState', path: '/topics/use-ref-vs-usestate', category: 'React Fundamentals' },
    { name: 'useCallback', path: '/topics/use-callback', category: 'React Fundamentals' },
    { name: 'Render Analysis', path: '/topics/render-analysis', category: 'React Fundamentals' },
    { name: 'Controlled vs Uncontrolled', path: '/topics/controlled-vs-uncontrolled', category: 'React Fundamentals' },
    { name: 'forwardRef', path: '/topics/forward-ref', category: 'React Fundamentals' },
    { name: 'Error Boundaries', path: '/topics/error-boundaries', category: 'Error Handling' },
    { name: 'Event Delegation', path: '/topics/event-delegation', category: 'Events & DOM' },
    { name: 'Server vs Client Components', path: '/topics/server-vs-client-components', category: 'Next.js' },
    { name: 'Axios Interceptors', path: '/topics/axios-interceptors', category: 'Networking' },
    { name: 'React Query Caching', path: '/topics/react-query', category: 'Data Fetching' },
    { name: 'Web Workers', path: '/topics/web-workers', category: 'Performance' },
    { name: 'useTransition', path: '/topics/use-transition', category: 'Concurrency' },
    { name: 'createRoot()', path: '/topics/create-root', category: 'Concurrency' },
  ]

  const categories = topics.reduce((acc, topic) => {
    if (!acc[topic.category]) {
      acc[topic.category] = []
    }
    acc[topic.category].push(topic)
    return acc
  }, {} as Record<string, typeof topics>)

  return (
    <main style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '10px' }}>🧠 Glassbox</h1>
        <p style={{ fontSize: '18px', color: '#666' }}>
          Experimental Next.js app for deep learning of React, Next.js internals, and frontend system behavior
        </p>
      </div>

      <div style={{ marginBottom: '30px', padding: '20px', background: '#f5f5f5', borderRadius: '8px' }}>
        <h2 style={{ marginBottom: '10px' }}>📚 Learning Topics</h2>
        <p style={{ color: '#666' }}>
          This project covers <strong>17 core topics</strong> organized by category.
          Each topic has working demos, code examples, and explanations.
        </p>
      </div>

      {Object.entries(categories).map(([category, categoryTopics]) => (
        <div key={category} style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', borderBottom: '2px solid #0070f3', paddingBottom: '10px' }}>
            {category}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '15px' }}>
            {categoryTopics.map((topic) => (
              <Link
                key={topic.path}
                href={topic.path}
                style={{
                  display: 'block',
                  padding: '20px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0070f3'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <h3 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>{topic.name}</h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
                  Click to explore →
                </p>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <div style={{ marginTop: '40px', padding: '20px', background: '#e8f4f8', borderRadius: '8px' }}>
        <h2 style={{ marginBottom: '10px' }}>📖 How to Use</h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Click on any topic to see the demo and code</li>
          <li>Open browser DevTools to observe behavior</li>
          <li>Check console logs for detailed insights</li>
          <li>Read code comments for explanations</li>
          <li>Experiment by modifying the code</li>
        </ul>
      </div>

      <div style={{ marginTop: '30px', padding: '20px', background: '#fff3cd', borderRadius: '8px' }}>
        <h3 style={{ marginBottom: '10px' }}>⚠️ Note</h3>
        <p style={{ margin: 0, color: '#856404' }}>
          This is a <strong>learning project</strong>, not production code. Some patterns are intentionally imperfect to observe system behavior.
        </p>
      </div>
    </main>
  )
}
