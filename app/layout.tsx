import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import "lenis/dist/lenis.css"
import SmoothScroll from "@/components/smooth-scroll"
import { ThemeProvider } from "@/components/theme-provider"
import ThemeToggle from "@/components/theme-toggle"
import ScrollChip from "@/components/scroll-chip"
import { Toaster } from "@/components/ui/sonner"

// Typography: Space Grotesk for display/body,
// JetBrains Mono for labels, code, and metadata.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ui",
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Matthew Garner | Senior Full Stack & AI Engineer",
  description: "Matthew Garner is a Houston-based Senior Full Stack & AI Engineer with 15+ years delivering web, mobile, enterprise applications, and AI workflows.",
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
  manifest: "/site.webmanifest",
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F8FA" },
    { media: "(prefers-color-scheme: dark)", color: "#14161A" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.className} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {/* Theme toggle fixed in the top-right corner. */}
            <div className="fixed top-4 right-4 z-[60] flex items-center gap-2">
              <ThemeToggle />
            </div>
            {/* Brand anchor: Matthew's monogram fixed
                top-left, linking home, with a chip naming the current
                section (home) or project (project pages). */}
            <ScrollChip />
            <SmoothScroll />
            {children}
            <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
