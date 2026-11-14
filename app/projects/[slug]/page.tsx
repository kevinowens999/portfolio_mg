import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProject, projects } from "@/lib/projects"
import ProjectDetail from "@/components/project-detail"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.name} | Project Case Study | Matthew Garner`,
    description: project.description.en,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!getProject(slug)) notFound()
  return <ProjectDetail slug={slug} />
}
