# Glassbox

🧠 Experimental Next.js app for deep learning of React, Next.js internals, and frontend system behavior.

## Philosophy

This project is **intentionally imperfect**. Some components will re-render unnecessarily, some logic will be inefficient, and some errors will be thrown on purpose—all to observe and understand system behavior.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Minimal CSS (Tailwind only if needed)
- **State & Data**: React Query (to be added)
- **Networking**: Axios with interceptors (to be added)
- **Testing**: Jest + Testing Library + Playwright (later)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Learning Topics

- useCallback, useRef vs useState
- Controlled vs Uncontrolled Components
- forwardRef, React StrictMode
- Synthetic Events, Event Delegation
- Error Boundaries
- Server Components vs Client Components
- Next.js build process, Tree Shaking
- Axios Interceptors, React Query caching
- Intentional re-renders & render analysis

