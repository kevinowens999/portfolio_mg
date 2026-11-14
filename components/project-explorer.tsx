"use client"

import { useEffect, useState } from "react"
import ProjectCard from "@/components/project-card"
import type { Project } from "@/lib/projects"
import { projectCategories } from "@/lib/project-categories"

export default function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [industry, setIndustry] = useState("")
  const [focus, setFocus] = useState("")
  const [technology, setTechnology] = useState("")
  const [ready, setReady] = useState(false)
  useEffect(() => { setReady(true) }, [])
  const industries = [...new Set(projects.map(p => projectCategories[p.slug]?.industry).filter(Boolean))].sort()
  const industryProjects = projects.filter(p => !industry || projectCategories[p.slug]?.industry === industry)
  const focuses = [...new Set(industryProjects.flatMap(p => projectCategories[p.slug]?.focus ?? []))].sort()
  const focusProjects = industryProjects.filter(p => !focus || projectCategories[p.slug]?.focus.includes(focus))
  const technologies = [...new Set(focusProjects.flatMap(p => p.tech))].sort()
  const changeIndustry = (value: string) => {
    setIndustry(value)
    const matches = projects.filter(p => !value || projectCategories[p.slug]?.industry === value)
    const nextFocus = matches.some(p => projectCategories[p.slug]?.focus.includes(focus)) ? focus : ""
    setFocus(nextFocus)
    if (!matches.some(p => (!nextFocus || projectCategories[p.slug]?.focus.includes(nextFocus)) && p.tech.includes(technology))) setTechnology("")
  }
  const changeFocus = (value: string) => {
    setFocus(value)
    if (!industryProjects.some(p => (!value || projectCategories[p.slug]?.focus.includes(value)) && p.tech.includes(technology))) setTechnology("")
  }
  const filtered = projects.filter(project => {
    const category = projectCategories[project.slug]
    return (!industry || category?.industry === industry)
      && (!focus || category?.focus.includes(focus))
      && (!technology || project.tech.includes(technology))
  })
  const active = Boolean(industry || focus || technology)
  const clear = () => { setIndustry(""); setFocus(""); setTechnology("") }
  const selectClass = "mt-2 block min-h-12 w-full rounded-lg border border-border bg-background px-3 pr-8 text-sm text-foreground transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"

  return (
    <div>
      <section aria-label="Filter projects" className="mb-8 rounded-2xl border border-border bg-card p-5 sm:p-6">
        <div className="mb-5">
          <h2 className="text-lg font-semibold tracking-tight">Find work relevant to your business</h2>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">Browse by industry, engineering focus, or technology. Combine filters to narrow your search.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <label className="text-sm font-medium" htmlFor="project-industry">Industry
            <select id="project-industry" aria-label="Industry" disabled={!ready} value={industry} onChange={e => changeIndustry(e.target.value)} className={selectClass}>
              <option value="">All industries</option>
              {industries.map(value => <option key={value}>{value}</option>)}
            </select>
          </label>
          <label className="text-sm font-medium" htmlFor="project-focus">Engineering focus
            <select id="project-focus" aria-label="Engineering focus" disabled={!ready} value={focus} onChange={e => changeFocus(e.target.value)} className={selectClass}>
              <option value="">All capabilities</option>
              {focuses.map(value => <option key={value}>{value}</option>)}
            </select>
          </label>
          <label className="text-sm font-medium" htmlFor="project-technology">Technology
            <select id="project-technology" aria-label="Technology" disabled={!ready} value={technology} onChange={e => setTechnology(e.target.value)} className={selectClass}>
              <option value="">All technologies</option>
              {technologies.map(value => <option key={value}>{value}</option>)}
            </select>
          </label>
        </div>
      </section>
      <div className="mb-5 flex min-h-8 items-center justify-between gap-4">
        <p role="status" aria-live="polite" aria-atomic="true" className="text-sm text-muted-foreground">{active ? `${filtered.length} matching ${filtered.length === 1 ? "project" : "projects"}` : "All projects"}</p>
        {active && <button type="button" onClick={clear} className="rounded px-2 py-2 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Clear filters</button>}
      </div>
      {filtered.length ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map(project => <ProjectCard key={project.slug} project={project} />)}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border px-6 py-14 text-center">
          <h3 className="text-xl font-semibold">No projects match this combination</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">Try a broader industry, capability, or technology.</p>
          <button type="button" onClick={clear} className="mt-5 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Show all projects</button>
        </div>
      )}
    </div>
  )
}
