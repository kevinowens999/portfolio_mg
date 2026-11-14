"use client"

import { useEffect, useState } from "react"

const slogans = [
  "Engineering software that grows revenue and moves business forward.",
  "Turning complex operations into simpler, more profitable systems.",
  "Building practical AI that saves time and keeps people in control.",
  "15+ years turning business priorities into dependable software.",
]

export default function HeroSlogan() {
  const [text, setText] = useState(slogans[0])
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    let timer: ReturnType<typeof setTimeout>
    let index = 0
    let length = slogans[0].length
    let deleting = false
    let stopped = false

    const tick = () => {
      if (stopped || preference.matches) return
      const current = slogans[index]
      if (!deleting && length === current.length) {
        deleting = true
        timer = setTimeout(tick, 4200)
        return
      }
      if (deleting && length === 0) {
        index = (index + 1) % slogans.length
        deleting = false
        timer = setTimeout(tick, 350)
        return
      }
      length += deleting ? -1 : 1
      setText(slogans[index].slice(0, length))
      timer = setTimeout(tick, deleting ? 16 : 45)
    }
    const configure = () => {
      clearTimeout(timer)
      index = 0
      length = slogans[0].length
      deleting = false
      setText(slogans[0])
      setAnimated(!preference.matches)
      if (!preference.matches) timer = setTimeout(tick, 1000)
    }
    configure()
    preference.addEventListener("change", configure)
    return () => {
      stopped = true
      clearTimeout(timer)
      preference.removeEventListener("change", configure)
    }
  }, [])

  return (
    <div className="mx-auto grid w-full max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
      {/* Reserve the tallest slogan's height so typing never shifts the hero. */}
      {slogans.map(slogan => <p key={slogan} aria-hidden="true" className="invisible col-start-1 row-start-1">{slogan}<span className="inline-block w-2" /></p>)}
      <p aria-hidden="true" className="col-start-1 row-start-1">
        {text}<span className={`ml-1 inline-block h-[1em] w-[2px] translate-y-0.5 bg-primary ${animated ? "slogan-caret" : "hidden"}`} />
      </p>
      <p className="sr-only">{slogans[0]} With 15+ years of experience, I build dependable systems and practical AI that reduce manual work and save time.</p>
    </div>
  )
}
