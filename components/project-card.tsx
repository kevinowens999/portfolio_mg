"use client"

import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TechIcon } from "@/components/brand-icon"
import { useLang, tx } from "@/lib/i18n"
import type { Project } from "@/lib/projects"

export default function ProjectCard({ project }: { project: Project }) {
  const { lang } = useLang()
  const detailsHref = `/projects/${project.slug}/`

  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
      <Link href={detailsHref} className="block overflow-hidden border-b border-border bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary" aria-label={`View ${project.name} project details`}>
        {project.thumbnail && (
          <img
            src={project.thumbnail}
            alt={`${project.name} website hero section`}
            width={1440}
            height={900}
            loading="lazy"
            decoding="async"
            className="aspect-[8/5] w-full object-cover object-top"
          />
        )}
        {!project.thumbnail && (
          <div className="flex aspect-[8/5] flex-col justify-between bg-gradient-to-br from-secondary via-card to-muted p-7">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-card text-lg font-bold text-primary">{project.name.split(' ').slice(0, 2).map(word => word[0]).join('')}</span>
            <div><span className="mb-2 block text-xs font-medium uppercase tracking-wider text-primary">{project.category}</span><span className="block text-2xl font-semibold tracking-tight text-foreground">{project.name}</span></div>
          </div>
        )}
      </Link>
      <CardContent className="flex flex-1 flex-col p-6">
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">{project.category}</p>
        <h3 className="mb-3 text-2xl font-bold tracking-tight">
          <Link href={detailsHref} className="transition-colors hover:text-primary">{project.name}</Link>
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{tx(project.description, lang)}</p>
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Main stack</h4>
          <ul className="flex flex-wrap gap-2" aria-label={`${project.name} main technology stack`}>
            {project.tech.map((tech) => (
              <li key={tech}>
                <Badge variant="secondary" className="gap-1.5 px-2.5 py-1 font-normal">
                  <TechIcon tech={tech} colored className="h-3.5 w-3.5" />
                  {tech}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap items-center justify-between gap-3 border-t border-border p-6">
        <Button asChild size="sm">
          <Link href={detailsHref} aria-label={`More details about ${project.name}`}>
            More details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 py-2 text-sm text-muted-foreground transition-colors hover:text-primary" aria-label={`Visit ${project.name} website (opens in a new tab)`}>
            Visit website <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </CardFooter>
    </Card>
  )
}
