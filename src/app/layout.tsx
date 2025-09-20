import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
