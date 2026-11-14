// Side-project / product data for the Projects section.
//
// Localized text fields use { en, pt } — resolve with `tx(field, lang)`.
// `end` undefined means the project is still running; `status` drives the
// badge on the card ("active" | "paused" | "sunset").

import { projectContent } from "@/lib/project-content";
import type { L } from "@/lib/i18n";

export type ProjectStatus = "active" | "paused" | "sunset";

// LLMs / AI coding tools used to build the project (rendered as brand icons).
export type Llm = "claude" | "codex" | "copilot" | "gemini" | "vercel" | "replit";

// Where the project is hosted (rendered as a badge on the detail page).
export type Deployment = "cloudflare-pages" | "cloudflare-workers" | "github-pages" | "replit" | "aws" | "local";

export interface Project {
  slug: string;
  name: string;
  industry?: string;
  thumbnail?: string;
  appStores?: { platform: "ios" | "android"; url: string }[];
  /** Path under /public, e.g. "/projects/piggly-logo.svg". Falls back to a monogram. */
  logo?: string;
  status?: ProjectStatus;
  category?: string;
  start?: number;
  end?: number; // undefined = ongoing
  tagline: L;
  description: L;
  /** Primary tech, shown as icon-only chips on the card. */
  tech: string[];
  /** Full tech stack, shown on the detail page. Falls back to `tech`. */
  stack?: string[];
  llms: Llm[];
  /** Where it's hosted, shown as a badge on the detail page. */
  deployment?: Deployment;
  link?: string;
  /** Additional live URLs (e.g. sub-apps), shown as secondary link buttons. */
  links?: { label: string; url: string }[];
  github?: string;
  /** Optional link to a brand/design doc (PDF under /public), shown as a button. */
  brandDoc?: string;
  /** Screenshots for the detail-page gallery. `src` is a path under /public. */
  screenshots?: { src: string; caption: L }[];
}

const localized = (text: string): L => ({ en: text, pt: text });

const suppliedPreviews = new Set(["henderson-engineers", "fennemore", "mccowngordon", "saddle-creek", "noble-house"]);

export const projects: Project[] = projectContent.map(item => ({
  slug: item.slug,
  name: item.name,
  category: item.category,
  industry: item.industry,
  link: item.website,
  thumbnail: suppliedPreviews.has(item.slug)
    ? `/projects/${item.slug}-provided-hero.png`
    : item.slug === "barre3" ? "/projects/barre3-video-hero.png" : `/projects/${item.slug}-hero.png`,
  tagline: localized(item.headline),
  description: localized(item.summary),
  tech: item.stack,
  llms: [],
  appStores: item.appStores,
}));

export function getProject(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}
