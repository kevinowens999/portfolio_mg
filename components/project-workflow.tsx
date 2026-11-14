import { useId } from "react"
import type { CaseStudy } from "@/lib/project-case-studies"

type Node = { x: number; y: number; title: string; detail: string; accent?: boolean }

export default function ProjectWorkflow({ diagram }: { diagram: NonNullable<CaseStudy["diagram"]> }) {
  const arrowId = `arrow-${useId().replace(/:/g, "")}`
  const positions = [[30, 104], [310, 104], [590, 104], [170, 286], [450, 286]]
  const nodes: Node[] = diagram.nodes.map(([title, detail], i) => ({ x: positions[i][0], y: positions[i][1], title, detail, accent: i === 1 || i === 3 }))
  const edge = { fill: "none", stroke: "hsl(var(--muted-foreground))", strokeWidth: 1.5, markerEnd: `url(#${arrowId})` }

  return (
    <div className="mb-8 space-y-6">
      <figure className="overflow-hidden rounded-2xl border border-border bg-card" aria-label={diagram.title}>
        <div className="border-b border-border px-5 py-5 sm:px-6">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">System design</p>
          <h3 className="text-lg font-semibold tracking-tight">{diagram.title}</h3>
          <p className="mt-2 text-xs text-muted-foreground sm:hidden">Scroll horizontally to explore the architecture.</p>
        </div>
        <div className="overflow-x-auto p-3 sm:p-5" tabIndex={0} role="region" aria-label="Scrollable architecture diagram">
          <svg viewBox="0 0 820 435" className="min-w-[680px] w-full" role="img" aria-label={`${diagram.title}. ${diagram.nodes.map(([title, detail]) => `${title}: ${detail}`).join('. ')}. ${diagram.edges.map(edge => `${nodes[edge.from].title} connects to ${nodes[edge.to].title}${edge.label ? ` for ${edge.label}` : ''}`).join('. ')}.`}>
            <defs>
              <marker id={arrowId} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7" fill="hsl(var(--muted-foreground))" /></marker>
            </defs>
            <rect x="12" y="52" width="250" height="171" rx="12" fill="hsl(var(--muted) / .35)" stroke="hsl(var(--border))" />
            <rect x="292" y="52" width="250" height="171" rx="12" fill="hsl(var(--primary) / .04)" stroke="hsl(var(--primary) / .3)" strokeDasharray="5 4" />
            <rect x="572" y="52" width="236" height="171" rx="12" fill="hsl(var(--muted) / .35)" stroke="hsl(var(--border))" />
            {diagram.lanes.map((label, i) => <text key={label} x={positions[i][0]} y="79" fill="hsl(var(--muted-foreground))" fontSize="10" fontFamily="var(--font-mono), monospace" letterSpacing="1">{label}</text>)}
            {diagram.edges.map((connection, i) => {
              const from = nodes[connection.from], to = nodes[connection.to]
              const sameRow = from.y === to.y
              const right = to.x > from.x
              const down = to.y > from.y
              const sx = sameRow ? from.x + (right ? 212 : 0) : from.x + 106
              const sy = sameRow ? from.y + 37 : from.y + (down ? 74 : 0)
              const ex = sameRow ? to.x - 6 + (right ? 0 : 224) : to.x + 106
              const ey = sameRow ? to.y + 37 : to.y + (down ? -6 : 80)
              const middle = (sy + ey) / 2 + (i % 2 ? 8 : -8)
              return <g key={i}>
                <path d={sameRow ? `M${sx} ${sy} H${ex}` : `M${sx} ${sy} V${middle} H${ex} V${ey}`} {...edge} strokeDasharray={connection.dashed ? "5 4" : undefined} />
                {connection.label && <text x={(sx + ex) / 2} y={(sameRow ? sy : middle) - 10} textAnchor="middle" fontSize="9" fill="hsl(var(--muted-foreground))">{connection.label}</text>}
              </g>
            })}
            {nodes.map(node => <g key={node.title}>
              <rect x={node.x} y={node.y} width="212" height="74" rx="9" fill="hsl(var(--card))" stroke={node.accent ? "hsl(var(--primary) / .65)" : "hsl(var(--border))"} />
              <rect x={node.x} y={node.y + 17} width="3" height="38" rx="1.5" fill={node.accent ? "hsl(var(--primary))" : "hsl(var(--muted-foreground) / .4)"} />
              <text x={node.x + 16} y={node.y + 30} fontSize="12" fontWeight="600" fill="hsl(var(--foreground))">{node.title}</text>
              <text x={node.x + 16} y={node.y + 52} fontSize="10" fill="hsl(var(--muted-foreground))">{node.detail}</text>
            </g>)}
            <line x1="30" y1="393" x2="790" y2="393" stroke="hsl(var(--border))" />
            <text x="30" y="418" fontSize="10" fill="hsl(var(--muted-foreground))">{diagram.platform}</text>
          </svg>
        </div>
        <figcaption className="border-t border-border px-5 py-4 text-xs leading-6 text-muted-foreground sm:px-6">Logical architecture based on the supplied project summary. Solid arrows connect the main application boundaries; dashed arrows show supporting responsibilities and handoffs.</figcaption>
      </figure>
      <div>
        <h3 className="mb-4 text-base font-semibold">Design considerations</h3>
        <dl className="divide-y divide-border">
          {diagram.decisions.map(item => <div key={item.title} className="grid gap-2 py-4 sm:grid-cols-[160px_1fr] sm:gap-5"><dt className="text-sm font-medium">{item.title}</dt><dd className="text-sm leading-7 text-muted-foreground">{item.detail}</dd></div>)}
        </dl>
      </div>
    </div>
  )
}
