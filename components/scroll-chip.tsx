"use client"

import { useEffect, useState, type MouseEvent } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BriefcaseBusiness, Check, ChevronDown, Building2, Briefcase, Home, Layers, Mail, UserRound } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { getProject } from "@/lib/projects"

const homeSections = [
  { id: "about", label: "About", icon: UserRound },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness },
  { id: "services", label: "Services", icon: Briefcase },
  { id: "industries", label: "Industries", icon: Building2 },
  { id: "contact", label: "Contact", icon: Mail },
]

export default function ScrollChip() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [discovered, setDiscovered] = useState(false)
  const [active, setActive] = useState("Home")
  const onHome = pathname === "/"
  const project = getProject(pathname.split("/")[2] ?? "")
  const label = onHome ? active : project?.name ?? "Projects"

  useEffect(() => {
    if (!onHome) return
    const sections = [
      { id: "about", label: "About" }, { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" }, { id: "services", label: "Services" },
      { id: "industries", label: "Industries" },
      { id: "contact", label: "Contact" },
    ]
    const update = () => {
      let current = "Home"
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element && element.getBoundingClientRect().top <= innerHeight / 3) current = section.label
      }
      setActive(current)
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update) }
  }, [onHome])

  const itemClass = "min-h-11 cursor-pointer gap-3 rounded-lg px-3 text-sm"

  const navigateSection = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    setOpen(false)
    if (!onHome) return
    event.preventDefault()
    window.history.pushState(null, "", id === "top" ? "/" : `/#${id}`)
    window.dispatchEvent(new CustomEvent("portfolio:scroll-to", { detail: `#${id}` }))
  }

  return (
    <div className="fixed left-4 top-4 z-[70]">
      <DropdownMenu open={open} onOpenChange={value => { setOpen(value); if (value) setDiscovered(true) }}>
        <DropdownMenuTrigger asChild>
          <button type="button" aria-label="Open page navigation" className={`group flex min-h-12 items-center gap-3 rounded-full border border-primary/35 bg-card/95 py-2 pl-2 pr-4 text-foreground shadow-lg backdrop-blur-md transition-colors hover:border-primary hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:min-h-14 ${!discovered ? "navigation-beacon" : ""}`}>
            <span aria-hidden="true" className="developer-avatar-frame relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-primary/20 sm:h-14 sm:w-14">
              <span className="developer-avatar-shadow absolute bottom-1.5 h-2 w-8 rounded-full bg-indigo-950/20 blur-sm" />
              <img src="/developer-avatar.png" alt="" width={256} height={256} className="developer-avatar relative z-10 h-full w-full object-contain p-0.5" />
            </span>
            <span className="flex min-w-0 flex-col items-start text-left">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Explore</span>
              <span key={label} className="max-w-[140px] truncate text-sm font-semibold animate-in fade-in duration-200 sm:max-w-[200px] sm:text-base">{label}</span>
            </span>
            <ChevronDown aria-hidden className={`ml-1 h-4 w-4 text-primary transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" sideOffset={12} collisionPadding={16} className="z-[80] max-h-[calc(100dvh-100px)] w-[300px] max-w-[calc(100vw-32px)] overflow-y-auto rounded-2xl p-2 shadow-xl motion-reduce:animate-none">
          <DropdownMenuLabel className="px-3 py-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">Navigate</DropdownMenuLabel>
          <DropdownMenuItem asChild className={itemClass}>
            <Link href="/" scroll={!onHome} onClick={event => navigateSection(event, "top")} aria-current={onHome && active === "Home" ? "page" : undefined}><Home className="h-4 w-4 text-muted-foreground" />Home{onHome && active === "Home" && <Check className="ml-auto h-4 w-4 text-primary" />}</Link>
          </DropdownMenuItem>
          {homeSections.slice(0, 2).map(item => <DropdownMenuItem key={item.id} asChild className={itemClass}><Link href={`/#${item.id}`} scroll={false} onClick={event => navigateSection(event, item.id)}><item.icon className="h-4 w-4 text-muted-foreground" />{item.label}</Link></DropdownMenuItem>)}
          <DropdownMenuSeparator />
          <div className="flex items-center gap-1">
            <DropdownMenuItem asChild className={`${itemClass} flex-1 font-semibold`}>
              <Link href="/#projects" scroll={false} onClick={event => navigateSection(event, "projects")}><Layers className="h-4 w-4 text-primary" />Projects</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="min-h-11 cursor-pointer rounded-lg px-3 text-sm text-primary">
              <Link href="/projects/" aria-label="View all projects" aria-current={pathname === "/projects/" || pathname === "/projects" ? "page" : undefined}>View all</Link>
            </DropdownMenuItem>
          </div>
          <DropdownMenuSeparator />
          {homeSections.slice(2).map(item => <DropdownMenuItem key={item.id} asChild className={itemClass}><Link href={`/#${item.id}`} scroll={false} onClick={event => navigateSection(event, item.id)}><item.icon className="h-4 w-4 text-muted-foreground" />{item.label}</Link></DropdownMenuItem>)}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
