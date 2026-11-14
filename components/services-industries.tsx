import { Code2, Workflow, Smartphone, Database, Plug, BrainCircuit } from "lucide-react"

const services = [
  { icon: Code2, title: "Full stack development", description: "Web applications, client portals, and internal platforms built from requirements through deployment and handoff.", stack: "React · Next.js · TypeScript · Python · .NET" },
  { icon: BrainCircuit, title: "AI applications & agents", description: "Document extraction, permission-aware knowledge retrieval, voice agents, and AI workflows with evidence and human review.", stack: "FastAPI · LLMs · RAG · LiveKit" },
  { icon: Smartphone, title: "Mobile applications", description: "React Native experiences with subscription access, offline synchronization, and dependable account and purchase recovery.", stack: "React Native · RevenueCat · Node.js" },
  { icon: Workflow, title: "Business workflow automation", description: "Connect approvals, scheduling, referrals, and follow-ups with clear ownership, verified actions, and exception handling.", stack: "n8n · Power Automate · Microsoft Graph" },
  { icon: Plug, title: "CRM, ERP & API integrations", description: "Connect business systems while preserving record ownership, access boundaries, and reconciliation across uncertain responses.", stack: "Dynamics 365 · Dataverse · QuickBooks · REST APIs" },
  { icon: Database, title: "Data & operational platforms", description: "Reporting pipelines, telemetry dashboards, and event processing with traceable metrics, quality checks, and controlled recovery.", stack: "PostgreSQL · SQL · AWS · Azure" },
]

const industries = [
  { name: "Engineering & professional services", detail: "Client engagements, approvals, and delivery visibility", slug: "henderson-engineers" },
  { name: "Real estate & property management", detail: "Voice leasing assistants and verified tour scheduling", slug: "continental-properties" },
  { name: "Healthcare", detail: "Referral workflows, relationship matching, and controlled access", slug: "pine-park-health" },
  { name: "Fitness & wellness", detail: "Subscription mobile experiences and dependable member access", slug: "barre3" },
  { name: "Retail & e-commerce", detail: "Headless storefronts, merchandising, and cart validation", slug: "parachute" },
  { name: "Travel & hospitality", detail: "Marketplace bookings and multi-property digital experiences", slug: "boatsetter" },
  { name: "Insurance & legal services", detail: "Evidence-backed document AI and permission-aware knowledge", slug: "ima-financial-group" },
  { name: "Construction & manufacturing", detail: "Offline field operations, inventory, and ERP integration", slug: "mccowngordon" },
  { name: "Logistics & fulfillment", detail: "Event-driven reporting and source-traceable operational metrics", slug: "saddle-creek" },
  { name: "Accounting & financial advisory", detail: "Reviewed accounting automation and reconciliation", slug: "bennett-thrasher" },
  { name: "Education & recruitment", detail: "Learning workspaces and recruiter-controlled automations", slug: "fusion-academy" },
  { name: "Energy & infrastructure", detail: "Telemetry quality, alert ownership, and maintenance handoffs", slug: "sparkfund" },
]

export default function ServicesIndustries() {
  return (
    <>
      <section id="services" className="border-y border-border bg-card py-16 md:py-24" aria-labelledby="services-title">
        <div className="container px-4 md:px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">How I can help</p>
              <h2 id="services-title" className="mb-5 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Services</h2>
              <p className="text-lg leading-8 text-muted-foreground">From a product idea to a dependable system. I design, build, integrate, and deliver software that fits the way your team works.</p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, description, stack }) => (
              <article key={title} className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 motion-reduce:transform-none motion-reduce:transition-none">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none"><Icon className="h-5 w-5" aria-hidden /></span>
                <h3 className="mb-3 text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary">{title}</h3>
                <p className="mb-5 text-sm leading-7 text-muted-foreground">{description}</p>
                <p className="mt-auto border-t border-border pt-4 text-xs leading-6 text-muted-foreground">{stack}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="industries" className="bg-background py-16 md:py-24" aria-labelledby="industries-title">
        <div className="container px-4 md:px-6">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">Experience across sectors</p>
            <h2 id="industries-title" className="mb-5 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Industries</h2>
            <p className="text-lg leading-8 text-muted-foreground">Different domains bring different constraints. My work connects product needs with the data, permissions, and operational details each industry depends on.</p>
          </div>
          <div className="grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
            {industries.map(item => (
              <article key={item.name} className="group border-t border-border py-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 motion-reduce:transform-none motion-reduce:transition-none">
                <div><h3 className="mb-2 text-base font-semibold transition-colors group-hover:text-primary">{item.name}</h3><p className="text-sm leading-6 text-muted-foreground">{item.detail}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
