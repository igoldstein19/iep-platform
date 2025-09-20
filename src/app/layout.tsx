import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IEP Platform',
  description: 'A comprehensive platform designed to help special education teachers streamline the process of developing Individualized Education Programs (IEPs) for their students.',
  keywords: ['IEP', 'special education', 'education', 'teachers', 'students', 'FERPA'],
  authors: [{ name: 'IEP Platform Team' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          {children}
        </div>
      </body>
    </html>
  )
}