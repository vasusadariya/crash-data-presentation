import type React from "react"
import type { Metadata } from "next"
import { Roboto_Mono as RobotoMono } from 'next/font/google'
import "./globals.css"

const robotoMono = RobotoMono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Crash Data Presentation Dashboard",
  description: "Road accident analysis and visualization platform",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} bg-black text-white antialiased`}>{children}</body>
    </html>
  )
}
