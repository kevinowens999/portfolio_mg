import type { Metadata } from "next"
import Link from "next/link"
import ProjectExplorer from "@/components/project-explorer"
import SiteFooter from "@/components/site-footer"
import ProjectsContact from "@/components/projects-contact"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Projects | Matthew Garner",
  description: "Engineering case studies spanning AI agents, healthcare CRM, subscription mobile, commerce, ERP, logistics, and data platforms.",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container px-4 pb-16 pt-28 md:px-6 md:pb-24 md:pt-32">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m12 19-7-7 7-7M5 12h14" /></svg> Home</Link>
        <header className="mb-10 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">Selected work</p>
          <h1 className="mb-5 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Projects</h1>
          <p className="text-lg leading-8 text-muted-foreground">Engineering business-critical platforms that support revenue growth, streamline operations, and reduce manual work. Explore the architecture, technical judgment, and delivery behind each engagement.</p>
        </header>
        <ProjectExplorer projects={projects} />
        <ProjectsContact />
      </div>
      <SiteFooter />
    </main>
  )
}
