# Matthew Garner — Portfolio

Next.js 15 / React 19 portfolio for Matthew Garner, Senior Full Stack & AI Engineer, based in Houston, Texas. English only, with light and dark themes.

## Run locally

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

The project exports static pages to `out/`. Deployment is not configured for a personal domain yet.

## Content

- `app/page.tsx`: homepage, skills, education, and contact links.
- `lib/dictionary.ts`: English interface and profile copy.
- `lib/data.ts`: five professional roles and career timeline.
- `lib/project-content.ts`: the single content source for all 16 supplied project summaries, company/industry details, stacks, implementation notes, qualitative outcomes, store links, and project-specific architecture data.
- `lib/projects.ts`: card data derived from that source. The homepage features the first six projects; `/projects/` lists all 16.
- `lib/project-case-studies.ts`: detail-page content derived from the same source. Each detail page includes contact, ordered previous/next navigation, and the shared footer.
- `components/project-workflow.tsx`: accessible SVG architecture views with project-specific nodes, connections, and design decisions. Diagrams summarize logical responsibilities rather than claiming exact production infrastructure.
- `public/projects/*-hero.png`: screenshots of public company websites, separate from the described internal project work. Henderson Engineers, Fennemore, McCownGordon, Saddle Creek, and Noble House use the exact screenshots supplied by Matthew (`*-provided-hero.png`).

barre3 uses a frame captured from its playing homepage hero video.

The barre3 page links to its online-workout apps on both iOS and Android. Other mobile platforms do not receive invented public store links.
- `public/matthew-garner-resume.pdf`: the original supplied résumé, served by the download button.

The contact form opens a draft in the visitor's email app addressed to mattgarner0819@gmail.com. It does not submit to a hosted form service.

The portfolio uses a monogram until a personal photo is supplied. No testimonials or GitHub link are displayed because the résumé did not provide them.
