import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hans page',
  description: 'Aplicacion creada por Hans',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar />
          <div className="container mx-auto">
          {children}
          </div>
      </body>
    </html>
  )
}
