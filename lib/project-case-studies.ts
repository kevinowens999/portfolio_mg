import { projectContent, type ProjectContent } from "@/lib/project-content"

export interface CaseStudy {
  headline: string
  challenge: string
  focus: string
  capabilities: { title: string; description: string }[]
  flow: string[]
  outcome: string
  diagram?: NonNullable<ProjectContent["diagram"]>
}

// Cards and detail pages share one content source to avoid copy drift.
export const caseStudies: Record<string, CaseStudy> = Object.fromEntries(
  projectContent.map(item => [item.slug, {
    headline: item.headline,
    challenge: item.overview,
    focus: item.role,
    capabilities: item.implementation,
    flow: item.flow,
    outcome: item.outcome,
    diagram: item.diagram,
  }]),
)
