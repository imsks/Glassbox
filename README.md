# Glassbox 🧠

> **Experimental Next.js app for deep learning of React, Next.js internals, and frontend system behavior.**

## 🎯 Philosophy

This project is **intentionally imperfect**. Some components will re-render unnecessarily, some logic will be inefficient, and some errors will be thrown on purpose—all to observe and understand system behavior.

**This is a learning sandbox, not a production app.**

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Minimal CSS (inline styles for clarity)
- **State & Data**: React Query (@tanstack/react-query)
- **Networking**: Axios with interceptors
- **Testing**: (To be added later)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📚 Learning Topics Covered

This project covers **17 core topics** organized by category:

### 🔷 React Fundamentals

1. **React StrictMode**
   - Location: `app/components/react-strict-mode/`
   - Observes double renders in development
   - Effect lifecycle and cleanup behavior
   - [Demo →](./app/components/react-strict-mode/)

2. **useRef vs useState**
   - Location: `app/components/use-ref-vs-usestate/`
   - When to use each hook
   - Direct mutation behavior
   - Re-render implications
   - [Demo →](./app/components/use-ref-vs-usestate/)

3. **useCallback**
   - Location: `app/components/use-callback/`
   - Preventing unnecessary re-renders
   - Memoization with React.memo
   - Dependency array behavior
   - [Demo →](./app/components/use-callback/)

4. **Render Analysis**
   - Location: `app/components/render-analysis/`
   - Component tree render behavior
   - Render propagation
   - React.memo optimization
   - [Demo →](./app/components/render-analysis/)

5. **Controlled vs Uncontrolled Components**
   - Location: `app/components/controlled-vs-uncontrolled/`
   - Form input patterns
   - State management approaches
   - When to use each
   - [Demo →](./app/components/controlled-vs-uncontrolled/)

6. **forwardRef**
   - Location: `app/components/forward-ref/`
   - Ref forwarding to DOM elements
   - Building reusable components
   - Imperative APIs
   - [Demo →](./app/components/forward-ref/)

### 🔷 Error Handling

7. **Error Boundaries**
   - Location: `app/components/error-boundaries/`
   - Catching render errors
   - Graceful error handling
   - Fallback UI patterns
   - [Demo →](./app/components/error-boundaries/)

### 🔷 Events & DOM

8. **Event Delegation**
   - Location: `app/components/event-delegation/`
   - How React handles events
   - Event bubbling
   - Performance optimization
   - [Demo →](./app/components/event-delegation/)

### 🔷 Next.js App Router

9. **Server Components vs Client Components**
   - Location: `app/components/server-vs-client-components/`
   - App Router boundaries
   - Server vs client rendering
   - Data fetching patterns
   - Component composition
   - [Demo →](./app/components/server-vs-client-components/)

### 🔷 Networking & Data Fetching

10. **Axios Interceptors**
    - Location: `app/components/axios-interceptors/`
    - Request/response middleware
    - Authentication headers
    - Error handling
    - Token refresh flow
    - [Demo →](./app/components/axios-interceptors/)

11. **React Query Caching**
    - Location: `app/components/react-query/`
    - Cache behavior
    - Stale-while-revalidate
    - Cache invalidation
    - Query keys
    - [Demo →](./app/components/react-query/)

### 🔷 Performance & Concurrency

12. **Web Workers**
    - Location: `app/components/web-workers/`
    - Background thread execution
    - Heavy computation offloading
    - UI responsiveness
    - [Demo →](./app/components/web-workers/)

13. **useTransition Hook**
    - Location: `app/components/use-transition/`
    - Non-urgent state updates
    - Concurrent rendering
    - Perceived performance
    - [Demo →](./app/components/use-transition/)

14. **createRoot() for Concurrent Features**
    - Location: `app/components/create-root/`
    - React 18 concurrent rendering
    - Automatic batching
    - Suspense support
    - [Demo →](./app/components/create-root/)

## 📁 Project Structure

```
Glassbox/
├── app/
│   ├── components/          # All topic demos organized by folder
│   │   ├── react-strict-mode/
│   │   ├── use-ref-vs-usestate/
│   │   ├── use-callback/
│   │   ├── render-analysis/
│   │   ├── controlled-vs-uncontrolled/
│   │   ├── forward-ref/
│   │   ├── error-boundaries/
│   │   ├── event-delegation/
│   │   ├── server-vs-client-components/
│   │   ├── axios-interceptors/
│   │   ├── react-query/
│   │   ├── web-workers/
│   │   ├── use-transition/
│   │   ├── create-root/
│   │   └── index.ts        # Main export file
│   ├── lib/                 # Utilities
│   │   ├── axios.ts        # Axios instance with interceptors
│   │   └── api.ts          # API functions
│   ├── providers/          # Context providers
│   │   └── QueryProvider.tsx
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/
│   └── worker.js           # Web Worker file
└── README.md
```

## 🎓 How to Use This Project

### For Learning

1. **Explore by Topic**: Each topic has its own folder with demos
2. **Read the Code**: Components are well-commented
3. **Run and Observe**: Use browser DevTools to see behavior
4. **Experiment**: Modify code to see what happens

### For Interview Prep

Each topic folder includes:
- ✅ Working examples
- ✅ Console logs for observation
- ✅ Comparison patterns (good vs bad)
- ✅ Interview talking points

### Importing Components

```typescript
// Import specific topic demo
import { StrictModeDemo } from '@/components/react-strict-mode'
import { UseCallbackDemo } from '@/components/use-callback'
import { ReactQueryDemo } from '@/components/react-query'

// Or import from main index
import { StrictModeDemo, UseCallbackDemo } from '@/components'
```

## 🔍 Key Observations

### React StrictMode
- Double renders in development
- Effect cleanup behavior
- State update idempotency

### useRef vs useState
- Re-render behavior differences
- Direct mutation implications
- When to use each

### useCallback
- Function reference stability
- React.memo interaction
- Dependency array impact

### Event Delegation
- One listener at root
- Event bubbling
- Performance benefits

### Server Components
- No JavaScript sent to client
- Direct data fetching
- Server-only APIs

### React Query
- Automatic caching
- Stale-while-revalidate
- Cache invalidation

### Web Workers
- UI stays responsive
- Background computation
- Message passing

### useTransition
- Non-urgent updates
- UI responsiveness
- Concurrent rendering

## 🎯 Interview Talking Points

Each topic includes:
- **Mental models**: How it works conceptually
- **When to use**: Practical applications
- **Common pitfalls**: What to avoid
- **Performance implications**: Optimization strategies

## 📝 Notes

- This project uses **Next.js 16 App Router**
- All components are in TypeScript
- Styling is minimal (inline styles for clarity)
- Focus is on **understanding**, not production code

## 🤝 Contributing

This is a personal learning project, but feel free to:
- Fork and experiment
- Add your own demos
- Share learnings

## 📄 License

MIT - Feel free to use this for learning!

## 🙏 Acknowledgments

Built for deep understanding of React and Next.js internals, especially for senior-level interviews (50+ LPA).

---

**Happy Learning! 🚀**
