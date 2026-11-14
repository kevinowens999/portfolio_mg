"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Lenis from "lenis"

export default function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    let lenis: Lenis | undefined
    let frame = 0

    const configure = () => {
      lenis?.destroy()
      lenis = undefined
      if (!preference.matches) {
        lenis = new Lenis({
          autoRaf: true,
          smoothWheel: true,
          syncTouch: false,
          lerp: 0.1,
          anchors: { duration: 1.1 },
          allowNestedScroll: true,
          prevent: node => Boolean(node.closest('[role="menu"], [role="dialog"], textarea, select, [data-lenis-prevent]')),
        })
      }
    }

    const scrollToSection = (hash: string) => {
      if (!hash || hash === "#") return
      let id: string
      try { id = decodeURIComponent(hash.slice(1)) } catch { return }
      const target = document.getElementById(id) ?? (id === "top" ? document.querySelector("main") : null)
      if (!target) return
      // Wait for the dropdown's scroll lock to be released before animating.
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => {
          if (lenis) {
            lenis.resize()
            lenis.scrollTo(target, { duration: 1.1, lerp: 0, force: true })
          } else {
            window.scrollTo({ top: Math.max(0, target.getBoundingClientRect().top + window.scrollY - 96), behavior: "instant" })
          }
        })
      })
    }
    const handleSection = (event: Event) => scrollToSection((event as CustomEvent<string>).detail)
    const handleHash = () => scrollToSection(window.location.hash)
    configure()
    handleHash()
    preference.addEventListener("change", configure)
    window.addEventListener("portfolio:scroll-to", handleSection)
    window.addEventListener("hashchange", handleHash)
    return () => {
      cancelAnimationFrame(frame)
      lenis?.destroy()
      preference.removeEventListener("change", configure)
      window.removeEventListener("portfolio:scroll-to", handleSection)
      window.removeEventListener("hashchange", handleHash)
    }
  }, [pathname])

  return null
}
