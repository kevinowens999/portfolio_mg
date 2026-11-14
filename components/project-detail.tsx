"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowUpRight, Layers, Target, Smartphone, Play } from "lucide-react"
import ProjectWorkflow from "@/components/project-workflow"
import SiteFooter from "@/components/site-footer"
import ContactForm from "@/components/contact-form"
import { getDict } from "@/lib/dictionary"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TechIcon } from "@/components/brand-icon"
import { getProject, projects } from "@/lib/projects"
import { caseStudies } from "@/lib/project-case-studies"

const sections = [
  { id: "overview", label: "Overview" },
  { id: "capabilities", label: "Key capabilities" },
  { id: "approach", label: "Technical approach" },
  { id: "priorities", label: "Delivery & outcomes" },
  { id: "contact", label: "Get in touch" },
]

export default function ProjectDetail({ slug }: { slug: string }) {
  const project = getProject(slug)
  const study = caseStudies[slug]
  if (!project || !study) return null
  const index = projects.findIndex(item => item.slug === slug)
  const previous = index > 0 ? projects[index - 1] : undefined
  const next = index < projects.length - 1 ? projects[index + 1] : undefined
  const domain = project.link ? new URL(project.link).hostname.replace(/^www\./, "") : project.name

  return (
    <main className="min-h-screen bg-background">
      <div className="container max-w-6xl px-4 pb-12 pt-24 md:px-6 md:pt-28">
        <Link href="/projects/" className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>
        <header className="mb-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <span className="font-mono text-primary">Project {String(index + 1).padStart(2, "0")}</span>
              <span aria-hidden className="h-px w-6 bg-border" /><span>{project.category}</span>
            </div>
            <h1 className="mb-4 text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">{project.name}</h1>
            <p className="max-w-2xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">{study.headline}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:max-w-[210px] md:justify-end">
          {project.appStores?.map(store => (
            <Button key={store.platform} asChild className="rounded-full">
              <a href={store.url} target="_blank" rel="noopener noreferrer" aria-label={`Get ${project.name} on ${store.platform === "ios" ? "the App Store" : "Google Play"} (opens in a new tab)`}>
                {store.platform === "ios" ? <Smartphone className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
                {store.platform === "ios" ? "App Store" : "Google Play"}<ArrowUpRight className="ml-2 h-3.5 w-3.5" />
              </a>
            </Button>
          ))}
          {project.link && (
            <Button asChild variant="outline" className="w-fit rounded-full">
              <a href={project.link} target="_blank" rel="noopener noreferrer">Visit website <ArrowUpRight className="ml-2 h-4 w-4" /></a>
            </Button>
          )}
          </div>
        </header>
        {project.thumbnail && (
          <figure className="mb-12 overflow-hidden rounded-2xl border border-border bg-card shadow-sm md:mb-16">
            <div className="flex items-center justify-between gap-3 border-b border-border bg-muted/50 px-4 py-3">
              <span aria-hidden className="flex gap-1.5">{[1, 2, 3].map(dot => <span key={dot} className="h-2 w-2 rounded-full bg-muted-foreground/30" />)}</span>
              <span className="truncate font-mono text-xs text-muted-foreground">{domain}</span>
              <ArrowUpRight aria-hidden className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
            <img src={project.thumbnail} alt={`${project.name} public website homepage`} width={1440} height={900} className="block h-auto w-full" />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">Public website preview</figcaption>
          </figure>
        )}
        <div className="grid items-start gap-10 lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-16">
          <aside className="lg:sticky lg:top-24">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">In this project</p>
            <nav aria-label="Project sections" className="flex flex-wrap gap-x-5 gap-y-3 lg:flex-col lg:gap-4">
              {sections.map((section, i) => (
                <a key={section.id} href={`#${section.id}`} className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <span className="font-mono text-xs opacity-50">0{i + 1}</span>{section.label}
                </a>
              ))}
            </nav>
            <div className="mt-8 hidden border-t border-border pt-5 lg:block">
              <p className="mb-1 text-sm font-medium">Matthew Garner</p>
              <p className="text-xs leading-relaxed text-muted-foreground">Full Stack & AI Engineer</p>
            </div>
          </aside>
          <div className="min-w-0 space-y-14 md:space-y-16">
            <section id="overview" className="scroll-mt-24">
              <SectionLabel number="01" title="Overview" />
              <h2 className="mb-5 text-2xl font-semibold tracking-tight sm:text-3xl">Project overview</h2>
              <p className="mb-4 text-sm font-medium text-primary">{project.industry}</p>
              <p className="text-base leading-8 text-muted-foreground md:text-lg">{study.challenge}</p>
              <div className="mt-7 flex gap-4 rounded-xl border border-primary/15 bg-primary/5 p-5">
                <Target className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div><h3 className="mb-2 text-sm font-semibold">My contribution</h3><p className="text-sm leading-7 text-muted-foreground">{study.focus}</p></div>
              </div>
            </section>
            <section id="capabilities" className="scroll-mt-24">
              <SectionLabel number="02" title="Key capabilities" />
              <h2 className="mb-6 text-2xl font-semibold tracking-tight sm:text-3xl">What I built</h2>
              <div className="divide-y divide-border rounded-xl border border-border bg-card px-5 sm:px-6">
                {study.capabilities.map((item, i) => (
                  <div key={item.title} className="flex gap-4 py-6 sm:gap-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted font-mono text-xs text-primary">0{i + 1}</span>
                    <div><h3 className="mb-2 font-semibold">{item.title}</h3><p className="text-sm leading-7 text-muted-foreground">{item.description}</p></div>
                  </div>
                ))}
              </div>
            </section>
            <section id="approach" className="scroll-mt-24">
              <SectionLabel number="03" title="Technical approach" />
              <h2 className="mb-6 text-2xl font-semibold tracking-tight sm:text-3xl">System design & technology</h2>
              {study.diagram ? <ProjectWorkflow diagram={study.diagram} /> : (
              <div className="mb-7 grid gap-3 sm:grid-cols-3" aria-label="Product workflow">
                {study.flow.map((step, i) => (
                  <div key={step} className="relative rounded-xl border border-border bg-card p-4">
                    <span className="mb-3 block font-mono text-xs text-muted-foreground">STEP 0{i + 1}</span>
                    <p className="pr-3 text-sm font-medium leading-6">{step}</p>
                    {i < study.flow.length - 1 && <ArrowRight aria-hidden className="absolute right-3 top-4 h-3.5 w-3.5 text-primary" />}
                  </div>
                ))}
              </div>
              )}
              <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold"><Layers className="h-4 w-4 text-primary" /> Main stack</h3>
                <ul className="flex flex-wrap gap-2">
                  {(project.stack ?? project.tech).map(tech => (
                    <li key={tech}><Badge variant="secondary" className="gap-2 px-3 py-2 font-normal"><TechIcon tech={tech} colored className="h-4 w-4" />{tech}</Badge></li>
                  ))}
                </ul>
              </div>
            </section>
            <section id="priorities" className="scroll-mt-24">
              <SectionLabel number="04" title="Delivery & outcomes" />
              <h2 className="mb-6 text-2xl font-semibold tracking-tight sm:text-3xl">What changed for the team</h2>
              <p className="text-base leading-8 text-muted-foreground md:text-lg">{study.outcome}</p>
            </section>
          </div>
        </div>
        <section id="contact" aria-labelledby="project-contact-title" className="mt-14 scroll-mt-24 border-t border-border pt-10 md:mt-16">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
            <div>
              <SectionLabel number="05" title="Get in touch" />
              <h2 id="project-contact-title" className="mb-4 text-2xl font-semibold tracking-tight sm:text-3xl">Have a similar project in mind?</h2>
              <p className="mb-5 text-base leading-7 text-muted-foreground">Ask about {project.name} or tell me what you’re building. Share your goals, scope, and where you need engineering support.</p>
              <a href="mailto:mattgarner0819@gmail.com" className="break-all text-sm font-medium text-primary hover:underline">mattgarner0819@gmail.com</a>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
              <ContactForm key={project.slug} t={getDict("en").contact} defaultSubject={`Project inquiry: ${project.name}`} />
            </div>
          </div>
        </section>
        <nav aria-label="Project navigation" className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-7 md:mt-16">
          {previous && (
            <Link href={`/projects/${previous.slug}/`} className="group col-start-1 flex min-w-0 items-center gap-3 py-2 transition-colors hover:text-primary">
              <ArrowLeft className="h-5 w-5 shrink-0" />
              <span><span className="mb-1 block text-sm text-muted-foreground">Previous project</span><span className="text-lg font-semibold sm:text-xl">{previous.name}</span></span>
            </Link>
          )}
          {next && (
            <Link href={`/projects/${next.slug}/`} className="group col-start-2 flex min-w-0 items-center justify-end gap-3 py-2 text-right transition-colors hover:text-primary">
              <span><span className="mb-1 block text-sm text-muted-foreground">Next project</span><span className="text-lg font-semibold sm:text-xl">{next.name}</span></span>
              <ArrowRight className="h-5 w-5 shrink-0" />
            </Link>
          )}
        </nav>
      </div>
      <SiteFooter />
    </main>
  )
}

function SectionLabel({ number, title }: { number: string; title: string }) {
  return <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-muted-foreground"><span className="font-mono text-primary">{number}</span>{title}</p>
}
