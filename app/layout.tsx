import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "AhmTec Hub - Professional Web & App Development",
  description:
    "Expert web development, mobile apps, e-commerce solutions, and digital marketing services. Transform your business with cutting-edge technology.",
  keywords: "web development, mobile apps, e-commerce, digital marketing, tech solutions",
  authors: [{ name: "AhmTec Hub" }],
  creator: "AhmTec Hub",
  publisher: "AhmTec Hub",
  openGraph: {
    title: "AhmTec Hub - Professional Web & App Development",
    description: "Expert web development, mobile apps, e-commerce solutions, and digital marketing services.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AhmTec Hub - Professional Web & App Development",
    description: "Expert web development, mobile apps, e-commerce solutions, and digital marketing services.",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
