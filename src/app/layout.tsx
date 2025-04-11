import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Oficina Mecânica",
  description: "Workshop Mechanical",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html
lang="pt-br"
      className="dark"
      suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
