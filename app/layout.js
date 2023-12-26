import { Inter } from 'next/font/google'
import './globals.css'
import StateProvider from './redux/Provider'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{<StateProvider><Suspense fallback={<p>Loading...</p>}>{children}</Suspense></StateProvider>}</body>
    </html>
  )
}
