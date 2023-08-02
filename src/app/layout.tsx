import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Card } from "@tremor/react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'All blocks',
  description: 'See all latest blocks.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark ">
      <body className={`bg-dark-tremor-background ${inter.className}`} >
          {children}
      </body>
    </html>
  )
}
