// Web Worker - runs in background thread

// Listen for messages from main thread
self.onmessage = function(e) {
  const { type, data } = e.data
  
  console.log('Worker received:', type, data)
  
  if (type === 'HEAVY_COMPUTATION') {
    // Simulate heavy computation
    const result = performHeavyComputation(data)
    
    // Send result back to main thread
    self.postMessage({
      type: 'RESULT',
      result: result
    })
  }
  
  if (type === 'FIBONACCI') {
    const result = calculateFibonacci(data.number)
    self.postMessage({
      type: 'FIBONACCI_RESULT',
      result: result
    })
  }
}

// Heavy computation function
function performHeavyComputation(data) {
  let sum = 0
  for (let i = 0; i < data.iterations; i++) {
    sum += Math.sqrt(i) * Math.random()
  }
  return sum
}

// Fibonacci calculation (CPU intensive)
function calculateFibonacci(n) {
  if (n <= 1) return n
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2)
}