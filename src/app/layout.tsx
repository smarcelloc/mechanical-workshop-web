import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: process.env.APP_URL,
  description: process.env.APP_DESCRIPTION,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-br"
      className="dark"
      suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
