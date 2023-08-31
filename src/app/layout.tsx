import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simple Todo App',
  description: 'Implementing a React-testing-library',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{backgroundColor:'white'}}>
      <body >{children}</body>
    </html>
  )
}
