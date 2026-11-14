"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

// Flow-field motion adapted from the reference supplied by Matthew:
// Chris Alberto's BackgroundFlowField. Keep it scoped to the portfolio hero.
const palettes = {
  light: { background: "247,248,250", ink: "30,41,59", core: "51,65,85", width: 2.6, opacity: 0.8, fade: 0.016, glow: 12 },
  dark: { background: "20,22,26", ink: "89,112,255", core: "205,242,255", width: 3.2, opacity: 0.95, fade: 0.014, glow: 22 },
}
type Particle = { x: number; y: number; vx: number; vy: number; age: number; life: number }

export default function HeroGraph({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const themeRef = useRef(resolvedTheme === "dark" ? palettes.dark : palettes.light)
  const redrawRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    themeRef.current = resolvedTheme === "dark" ? palettes.dark : palettes.light
    redrawRef.current?.()
  }, [resolvedTheme])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return
    const host = canvas.closest("section") ?? canvas.parentElement ?? canvas
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const particles: Particle[] = []
    const mouse = { x: -1000, y: -1000 }
    let width = 0, height = 0, frameId = 0, lastTime = 0
    let visible = true

    const reset = (particle: Particle, randomAge = false) => {
      particle.x = Math.random() * width
      particle.y = Math.random() * height
      particle.vx = 0
      particle.vy = 0
      particle.life = 240 + Math.random() * 360
      particle.age = randomAge ? Math.random() * particle.life : 0
    }

    const draw = () => {
      const palette = themeRef.current
      ctx.globalAlpha = 1
      ctx.shadowBlur = 0
      // Fade a transparent layer, so theme changes never repaint a full backdrop.
      ctx.globalCompositeOperation = "destination-out"
      ctx.fillStyle = `rgba(0,0,0,${palette.fade})`
      ctx.fillRect(0, 0, width, height)
      ctx.globalCompositeOperation = "source-over"
      ctx.lineWidth = palette.width
      ctx.lineCap = "round"
      ctx.strokeStyle = `rgb(${palette.ink})`

      for (const particle of particles) {
        const oldX = particle.x, oldY = particle.y
        const angle = (Math.cos(particle.x * 0.005) + Math.sin(particle.y * 0.005)) * Math.PI
        particle.vx += Math.cos(angle) * 0.16
        particle.vy += Math.sin(angle) * 0.16
        const dx = mouse.x - particle.x, dy = mouse.y - particle.y
        const distance = Math.hypot(dx, dy)
        if (distance < 150) {
          const force = (1 - distance / 150) * 0.012
          particle.vx -= dx * force
          particle.vy -= dy * force
        }
        particle.x += particle.vx
        particle.y += particle.vy
        particle.vx *= 0.95
        particle.vy *= 0.95
        particle.age++
        if (particle.age > particle.life || particle.x < 0 || particle.x > width || particle.y < 0 || particle.y > height) {
          reset(particle)
          continue
        }
        const envelope = 1 - Math.abs(particle.age / particle.life - 0.5) * 2
        ctx.globalAlpha = envelope * palette.opacity
        ctx.beginPath()
        ctx.moveTo(oldX, oldY)
        ctx.lineTo(particle.x, particle.y)
        ctx.lineWidth = palette.width * 1.8
        ctx.strokeStyle = `rgb(${palette.ink})`
        ctx.globalAlpha = envelope * palette.opacity * 0.55
        ctx.stroke()
        ctx.lineWidth = palette.width * 0.65
        ctx.strokeStyle = `rgb(${palette.core})`
        ctx.globalAlpha = envelope * palette.opacity
        ctx.stroke()
      }
      ctx.globalAlpha = 1
    }

    const paint = () => {
      ctx.globalAlpha = 1
      ctx.shadowBlur = 0
      ctx.clearRect(0, 0, width, height)
      // Develop enough trail length for a useful initial or reduced-motion view.
      for (let i = 0; i < (motion.matches ? 24 : 8); i++) draw()
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      const dpr = Math.min(window.devicePixelRatio || 1, width < 768 ? 1 : 1.5)
      const pixelWidth = Math.round(width * dpr), pixelHeight = Math.round(height * dpr)
      if (canvas.width === pixelWidth && canvas.height === pixelHeight && particles.length) return
      canvas.width = pixelWidth
      canvas.height = pixelHeight
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(width < 768 ? 110 : 260, Math.max(65, Math.round(width * height / 4200)))
      particles.length = 0
      for (let i = 0; i < count; i++) {
        const particle: Particle = { x: 0, y: 0, vx: 0, vy: 0, age: 0, life: 0 }
        reset(particle, true)
        particles.push(particle)
      }
      paint()
    }

    const tick = (time: number) => {
      if (time - lastTime >= 1000 / 60 - 1) { draw(); lastTime = time }
      frameId = requestAnimationFrame(tick)
    }
    const sync = () => {
      cancelAnimationFrame(frameId)
      lastTime = 0
      if (!motion.matches && visible && !document.hidden) frameId = requestAnimationFrame(tick)
      else if (motion.matches) paint()
    }
    const onMove = (event: PointerEvent) => {
      if (event.pointerType === "touch" || motion.matches) return
      const rect = canvas.getBoundingClientRect()
      mouse.x = event.clientX - rect.left
      mouse.y = event.clientY - rect.top
    }
    const onLeave = () => { mouse.x = -1000; mouse.y = -1000 }
    const observer = new ResizeObserver(resize)
    const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync() })

    // Switching themes changes colors without rebuilding or warming the field.
    redrawRef.current = () => {
      ctx.clearRect(0, 0, width, height)
      draw()
    }
    resize()
    observer.observe(canvas)
    intersection.observe(canvas)
    host.addEventListener("pointermove", onMove)
    host.addEventListener("pointerleave", onLeave)
    document.addEventListener("visibilitychange", sync)
    motion.addEventListener("change", sync)
    sync()
    return () => {
      cancelAnimationFrame(frameId)
      observer.disconnect()
      intersection.disconnect()
      host.removeEventListener("pointermove", onMove)
      host.removeEventListener("pointerleave", onLeave)
      document.removeEventListener("visibilitychange", sync)
      motion.removeEventListener("change", sync)
      redrawRef.current = null
    }
  }, [])

  return (
    <div aria-hidden="true" className={`hero-monogram pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}>
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", filter: "drop-shadow(0 0 5px var(--mg-color))", maskImage: "radial-gradient(ellipse at 42% 48%, rgba(0,0,0,.22) 0%, rgba(0,0,0,.5) 35%, #000 75%)" }} />

    </div>
  )
}
