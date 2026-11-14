import type { L } from "@/lib/i18n";

// LinkedIn recommendations, transcribed verbatim from the "Received" tab.
// `quote` is the original text in `lang`; `quoteTranslated` is a faithful
// translation into the *other* language, shown (clearly marked) when the
// visitor's site language differs from the original. A translation is the
// site's rendering, not the person's words — the UI always labels it as such
// and offers "see original".
//
// `featured` ones surface on the homepage (compact, clamped); the full set
// lives on /recommendations.
//
// `profileUrl` and `photo` are intentionally empty: they're third-party
// personal data. Fill them only once each person has given permission —
// `photo` as a local path under /public (LinkedIn media URLs can't be
// hotlinked), `profileUrl` as their public profile. The card renders an
// initials monogram and a non-linked name until then.

export const LINKEDIN_SOURCE_URL =
  "https://www.linkedin.com/in/matthew-garner-09215944a/details/recommendations/";

export interface Recommendation {
  name: string;
  // Role/relationship as of the recommendation, e.g. "Teammate · MAPS".
  context: L;
  lang: "en" | "pt";
  quote: string;
  quoteTranslated: string;
  featured: boolean;
  profileUrl?: string;
  photo?: string; // e.g. "/recommendations/carol.jpg"
}

// URL-safe id from a name, for per-card anchors (deep links from the homepage).
export function recSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const recommendations: Recommendation[] = [];
