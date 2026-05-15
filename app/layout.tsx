import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ReviewScheduler — Automate Google Review Responses',
  description: 'Schedule and automate professional Google review responses. Avoid spam detection with smart delays. Built for local businesses and agencies.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6d3bd64e-da42-4fdf-a7e3-4c699eef9598"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
