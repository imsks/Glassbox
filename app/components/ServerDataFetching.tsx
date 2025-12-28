// Server Component - can fetch data directly!

async function fetchData() {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 100))
    return { message: 'Data from server', timestamp: new Date().toISOString() }
}

export default async function ServerDataFetching() {
    // ✅ Can use async/await directly in Server Components!
    const data = await fetchData()

    return (
        <div style={{ border: '2px solid teal', padding: '20px' }}>
            <h3>Server Component Data Fetching</h3>
            <p>✅ No useEffect needed!</p>
            <p>✅ Can use async/await directly</p>
            <p>Message: {data.message}</p>
            <p>Timestamp: {data.timestamp}</p>
        </div>
    )
}