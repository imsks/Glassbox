import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Glassbox - Learning React & Next.js',
  description: 'Experimental Next.js app for deep learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

