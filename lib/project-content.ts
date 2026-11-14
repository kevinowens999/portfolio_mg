export interface ProjectContent {
  slug: string
  name: string
  website: string
  category: string
  industry: string
  headline: string
  summary: string
  overview: string
  role: string
  stack: string[]
  implementation: { title: string; description: string }[]
  outcome: string
  flow: string[]
  diagram?: {
    title: string
    lanes: [string, string, string]
    nodes: [string, string][]
    edges: { from: number; to: number; label?: string; dashed?: boolean }[]
    platform: string
    decisions: { title: string; detail: string }[]
  }
  appStores?: { platform: "ios" | "android"; url: string }[]
}

// Authored from Matthew's supplied project summaries. No invented metrics,
// dates, team sizes, or ownership of the companies' public websites.
export const projectContent: ProjectContent[] = [
  {
    slug: "henderson-engineers", name: "Henderson Engineers", website: "https://www.hendersonengineers.com/",
    category: "Enterprise SaaS & Professional Services", industry: "Engineering and professional services",
    headline: "Client engagements, connected from onboarding to delivery.",
    summary: "A client-services platform connecting onboarding, document requests, approvals, and delivery reporting, with client-specific access and AI-assisted summaries linked to source records.",
    overview: "I developed a client-services platform that connected project onboarding, document requests, approvals, and delivery reporting. I built the application with Next.js, TypeScript, Python/FastAPI, and PostgreSQL, with Microsoft 365 authentication and private Azure storage.",
    role: "Full-stack application development, configurable workflows, AI-assisted summaries, and operational handoff.",
    stack: ["Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Microsoft 365", "Azure Storage"],
    implementation: [
      { title: "Reusable engagement workflows", description: "I implemented reusable project templates, client-specific access, and configurable approval workflows." },
      { title: "Source-linked AI summaries", description: "I added AI-assisted summaries of outstanding requests, with links to the underlying records. Project managers could identify blocked work without reconstructing its history from email." },
      { title: "An operational handoff", description: "I also developed audit trails, operational dashboards, and deployment documentation, giving the business a maintainable platform for managing client engagements across departments." },
    ],
    outcome: "Project managers could identify blocked work from the platform, while departments gained a maintainable way to manage client engagements with audit history, dashboards, and deployment documentation.",
    flow: ["Onboard a project", "Collect requests & approvals", "Report delivery progress"],
    diagram: {
      title: "Client access, engagement workflows & source-linked summaries", lanes: ["CLIENT EXPERIENCE", "APPLICATION", "PRIVATE DATA"],
      nodes: [["Next.js / TypeScript", "Microsoft 365 authentication"], ["Python / FastAPI", "Templates, requests & approvals"], ["PostgreSQL / Azure", "Engagement records & documents"], ["AI-assisted summaries", "Outstanding requests + record links"], ["Operations & audit", "Dashboards, history & handoff"]],
      edges: [{ from: 0, to: 1, label: "Client access" }, { from: 1, to: 2, label: "Records" }, { from: 1, to: 3, dashed: true }, { from: 1, to: 4, dashed: true }], platform: "Microsoft 365 identity · Private Azure storage",
      decisions: [
        { title: "Client-specific access", detail: "Project templates are reusable, while access remains specific to the client engagement." },
        { title: "Summaries with provenance", detail: "Summaries link back to underlying request records so managers can inspect the context behind blocked work." },
      ],
    },
  },
  {
    slug: "continental-properties", name: "Continental Properties", website: "https://www.cproperties.com/",
    category: "Voice AI Agents & Real Estate", industry: "Property development and residential property management",
    headline: "A leasing conversation that only confirms what was booked.",
    summary: "A voice AI leasing assistant with property-specific retrieval, CRM and scheduling integrations, interruption handling, and human escalation. Appointments require a valid booking reference.",
    overview: "I developed a voice AI leasing assistant that answered property enquiries, retrieved approved availability, and helped prospects schedule tours. I used Python, FastAPI, LiveKit, PostgreSQL, and integrations with CRM and scheduling systems.",
    role: "Voice-agent development, property knowledge retrieval, CRM and scheduling integrations, and failure recovery.",
    stack: ["Python", "FastAPI", "LiveKit", "PostgreSQL", "CRM APIs", "Scheduling APIs"],
    implementation: [
      { title: "Conversation control & escalation", description: "I implemented interruption handling, property-specific knowledge retrieval, and escalation to leasing staff." },
      { title: "Confirmed bookings, not assumed success", description: "The agent confirmed appointments only after the scheduling system returned a valid booking reference. I added duplicate-request protection and recovery for uncertain API responses." },
      { title: "A useful handoff to leasing staff", description: "Leasing teams received conversation summaries and unresolved questions, helping them follow up without asking prospects to repeat information." },
    ],
    outcome: "Leasing teams received the conversation context and unresolved questions needed for follow-up, while appointment confirmations depended on a valid scheduling result.",
    flow: ["Answer & retrieve availability", "Create a verified booking", "Hand off unresolved questions"],
    diagram: {
      title: "Voice session, scheduling confirmation & staff handoff", lanes: ["VOICE SESSION", "AGENT APPLICATION", "KNOWLEDGE & RECORDS"],
      nodes: [["LiveKit", "Prospect voice + interruptions"], ["Python / FastAPI", "Property retrieval & agent logic"], ["PostgreSQL / CRM", "Property knowledge & context"], ["Scheduling system", "Valid booking reference required"], ["Leasing staff", "Summaries, questions & escalation"]],
      edges: [{ from: 0, to: 1, label: "Voice" }, { from: 1, to: 2, label: "Context" }, { from: 1, to: 3, label: "Book & verify", dashed: true }, { from: 1, to: 4, label: "Escalate", dashed: true }], platform: "Approved property availability · CRM & scheduling integrations",
      decisions: [
        { title: "Confirmation boundary", detail: "The agent cannot equate a request being sent with an appointment being booked. Confirmation requires a valid booking reference." },
        { title: "Uncertain API responses", detail: "Duplicate-request protection and recovery handle ambiguous responses without blindly repeating scheduling actions." },
      ],
    },
  },
  {
    slug: "pine-park-health", name: "Pine Park Health", website: "https://www.pineparkhealth.com/",
    category: "CRM & Healthcare", industry: "Healthcare delivery and senior living partnerships",
    headline: "A referral workflow with clear identity, access, and ownership.",
    summary: "A Dynamics 365 healthcare CRM connecting community relationships, referrals, intake, and follow-up. Matching rules, role-based access, and recoverable updates protect record quality.",
    overview: "I implemented a healthcare CRM workflow connecting community relationships, referrals, intake tasks, and follow-up ownership. I configured Dynamics 365 and Dataverse, supported by Power Automate and secure integrations.",
    role: "Dynamics 365 and Dataverse configuration, relationship matching, secure integrations, and controlled data enrichment.",
    stack: ["Dynamics 365", "Dataverse", "Power Automate", "Secure integrations", "Role-based access"],
    implementation: [
      { title: "Distinct identities & permissions", description: "I created matching rules that distinguished patients, family contacts, and community representatives. I configured role-based access and separated sensitive information from ordinary relationship reporting." },
      { title: "Lead-to-referral continuity", description: "I also corrected lead and referral mappings so relevant details carried into subsequent workflows." },
      { title: "Recoverable record enrichment", description: "Before bulk updates, I validated a sample and prepared recovery records." },
    ],
    outcome: "Staff gained a clearer referral timeline and a reliable process for enriching records without overwriting valuable information.",
    flow: ["Match relationships & referrals", "Assign intake & follow-up", "Enrich with recovery records"],
    diagram: {
      title: "Relationship identity, referral automation & controlled enrichment", lanes: ["CRM WORKSPACE", "AUTOMATION", "RECORD OWNERSHIP"],
      nodes: [["Dynamics 365", "Relationships & referral intake"], ["Power Automate", "Intake tasks & follow-up owners"], ["Dataverse", "Matching rules & mapped records"], ["Access boundaries", "Sensitive data vs. reporting"], ["Bulk enrichment", "Sample validation + recovery"]],
      edges: [{ from: 0, to: 1, label: "Referrals" }, { from: 1, to: 2, label: "Mappings" }, { from: 1, to: 3, dashed: true }, { from: 2, to: 4, dashed: true }], platform: "Dynamics 365 · Dataverse · Secure integrations",
      decisions: [
        { title: "Identity before matching", detail: "Patients, relatives, and community representatives are different relationship types; matching rules preserve those distinctions." },
        { title: "Recovery before bulk writes", detail: "Sample validation and recovery records precede bulk updates so enrichment does not overwrite valuable existing information without a recovery path." },
      ],
    },
  },
  {
    slug: "barre3", name: "barre3", website: "https://barre3.com/",
    category: "Subscription Mobile & Fitness", industry: "Fitness, wellness, and digital subscriptions",
    headline: "Successful payment. Dependable workout access.",
    summary: "A React Native fitness subscription app with onboarding, workout discovery, saved routines, progress tracking, and controlled offline downloads. Purchase verification is separated from interface state.",
    overview: "I developed a subscription fitness application using React Native, TypeScript, Node.js, PostgreSQL, and RevenueCat. I built onboarding, workout discovery, saved routines, progress tracking, and controlled offline downloads.",
    role: "Mobile and backend development, subscription lifecycle handling, content tools, and member-journey instrumentation.",
    stack: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "RevenueCat"],
    implementation: [
      { title: "Entitlements across account changes", description: "I implemented subscription restoration and entitlement checks across account changes, reinstalls, and temporary connectivity failures." },
      { title: "Purchase verification as its own concern", description: "I separated purchase verification from interface state so a successful payment could not leave a member locked out." },
      { title: "Content tools & journey visibility", description: "I also created content-management tools and instrumented the journey from registration to a completed workout." },
    ],
    outcome: "The application gave members dependable access while helping the business understand onboarding friction and continued engagement.",
    flow: ["Register & discover workouts", "Verify membership access", "Complete & track a workout"],
    appStores: [
      { platform: "ios", url: "https://apps.apple.com/us/app/barre3-online-fitness-workout/id1573784619" },
      { platform: "android", url: "https://play.google.com/store/apps/details?id=com.appbarre3" },
    ],
    diagram: {
      title: "Mobile experience, entitlements & offline access", lanes: ["MEMBER EXPERIENCE", "APPLICATION", "MEMBERSHIP & DATA"],
      nodes: [["React Native", "Onboarding & workout discovery"], ["Node.js", "Access checks & content tools"], ["PostgreSQL", "Routines, progress & records"], ["RevenueCat", "Verification & restoration"], ["Offline downloads", "Controlled workout access"]],
      edges: [{ from: 0, to: 1, label: "Account" }, { from: 1, to: 2, label: "Progress" }, { from: 1, to: 3, dashed: true }, { from: 0, to: 4, dashed: true }], platform: "TypeScript · React Native · RevenueCat",
      decisions: [
        { title: "Entitlement vs. UI state", detail: "Payment verification is separate from interface state, so a successful purchase does not depend on a transient screen state to unlock access." },
        { title: "Restore across lifecycle changes", detail: "Account changes, reinstalls, and temporary connectivity failures are part of subscription restoration and access checking." },
      ],
    },
  },
  {
    slug: "parachute", name: "Parachute", website: "https://parachutehome.com/",
    category: "Headless E-Commerce & Retail", industry: "Premium home furnishings and retail",
    headline: "A distinctive storefront with commerce ownership kept clear.",
    summary: "A headless Next.js storefront with Shopify APIs, editorial merchandising, server-side cart validation, and variant availability checks. Product, inventory, and order ownership stay in the commerce backend.",
    overview: "I developed a headless storefront with Next.js, TypeScript, Shopify APIs, and a structured content platform. I organized product discovery around materials, sizes, colors, and collections, then connected editorial content to relevant products.",
    role: "Headless storefront development, commerce validation, merchandising components, mobile delivery, and analytics.",
    stack: ["Next.js", "TypeScript", "Shopify APIs", "Structured content", "Server-side validation"],
    implementation: [
      { title: "Validated cart & availability", description: "I implemented server-side cart validation, variant availability checks, and analytics across the purchase journey." },
      { title: "Mobile browsing continuity", description: "I improved mobile image delivery and preserved browsing state when shoppers compared products." },
      { title: "Independent merchandising", description: "I also built reusable merchandising components that the content team could manage independently. Product, inventory, and order ownership remained in the commerce backend, while the storefront supported a more distinctive and responsive shopping experience." },
    ],
    outcome: "The content team gained independently managed merchandising components, and shoppers gained a more distinctive, responsive experience without moving commerce ownership into the storefront.",
    flow: ["Discover products & editorial", "Validate variants & cart", "Continue through commerce checkout"],
  },
  {
    slug: "boatsetter", name: "Boatsetter", website: "https://www.boatsetter.com/",
    category: "Marketplaces & Travel", industry: "Travel experiences, boat rentals, and charters",
    headline: "Booking states that stay clear when payment responses do not.",
    summary: "Marketplace booking services with explicit reservation states, temporary availability holds, payment reconciliation, and queued notifications for travelers, operators, captains, and support.",
    overview: "I developed marketplace booking services connecting travelers, vessel operators, and captains. I used React, Node.js, PostgreSQL, Redis, and AWS, with payment integrations and queued notifications.",
    role: "Booking-service development, availability and payment consistency, operator tools, and transaction-history visibility.",
    stack: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Payment APIs", "Queued notifications"],
    implementation: [
      { title: "Explicit booking state", description: "I modeled availability, booking requests, operator acceptance, payments, and cancellations as separate states." },
      { title: "Holds & payment reconciliation", description: "I implemented temporary availability holds and reconciliation for uncertain payment responses, preventing retries from creating duplicate bookings." },
      { title: "Operator tools & exception context", description: "I also built operator tools for enquiries and itinerary changes. Customers received clearer booking updates, while support staff could inspect the full transaction history and resolve exceptions without searching across disconnected systems." },
    ],
    outcome: "Customers received clearer booking updates. Support staff could inspect transaction history and resolve exceptions, while retry handling avoided duplicate bookings.",
    flow: ["Request & hold availability", "Accept & reconcile payment", "Notify & support changes"],
    diagram: {
      title: "Reservation state, availability holds & payment reconciliation", lanes: ["MARKETPLACE", "BOOKING SERVICES", "STATE & HOLDS"],
      nodes: [["React", "Travelers & operator tools"], ["Node.js", "Explicit booking state transitions"], ["PostgreSQL / Redis", "Transaction history & holds"], ["Payment integrations", "Uncertain-response reconciliation"], ["Queued notifications", "Booking updates & changes"]],
      edges: [{ from: 0, to: 1, label: "Requests" }, { from: 1, to: 2, label: "State" }, { from: 1, to: 3, dashed: true }, { from: 1, to: 4, dashed: true }], platform: "AWS · Payment integrations · Queued notifications",
      decisions: [
        { title: "Separate state transitions", detail: "Availability, operator acceptance, payment, and cancellation are distinct states rather than a single booked flag." },
        { title: "Reconcile before repeating", detail: "An uncertain payment response is reconciled against transaction history instead of treating retries as new bookings." },
      ],
    },
  },
  {
    slug: "ima-financial-group", name: "IMA Financial Group", website: "https://imacorp.com/",
    category: "Document AI & Insurance", industry: "Commercial insurance and risk management",
    headline: "Extracted values with the evidence needed to review them.",
    summary: "A document AI workflow for insurance renewal materials, with source passages, page references, deterministic validation, review queues, document permissions, and version tracking.",
    overview: "I developed a document AI workflow for policy schedules, renewal submissions, and supporting client documents. I used Python, FastAPI, document-processing services, language-model APIs, and PostgreSQL.",
    role: "Document-processing services, evidence-backed extraction, validation and review workflows, and document access controls.",
    stack: ["Python", "FastAPI", "Document processing", "LLM APIs", "PostgreSQL"],
    implementation: [
      { title: "Extraction with source evidence", description: "I preserved source passages and page references for extracted values, then applied deterministic checks to dates, limits, and totals." },
      { title: "Review instead of silent acceptance", description: "Conflicting information and uncertain extractions entered a review queue." },
      { title: "Permission & version continuity", description: "I also implemented document-level permissions and version tracking so comparisons remained traceable after revised policies arrived." },
    ],
    outcome: "Account teams could prepare renewal materials more efficiently while retaining responsibility for coverage interpretation, exceptions, and client recommendations.",
    flow: ["Process policy documents", "Extract & validate with evidence", "Review renewal materials"],
    diagram: {
      title: "Document extraction, deterministic checks & review", lanes: ["DOCUMENT INPUT", "PROCESSING", "TRACEABLE RECORDS"],
      nodes: [["Policy documents", "Schedules & renewal submissions"], ["Python / FastAPI", "Processing & language-model APIs"], ["PostgreSQL", "Values, versions & source refs"], ["Deterministic checks", "Dates, limits & totals"], ["Account-team review", "Conflicts & uncertain values"]],
      edges: [{ from: 0, to: 1, label: "Documents" }, { from: 1, to: 2, label: "Evidence" }, { from: 1, to: 3, dashed: true }, { from: 3, to: 4, label: "Exceptions", dashed: true }], platform: "Document-level permissions · Version-tracked comparisons",
      decisions: [
        { title: "Evidence alongside values", detail: "Extracted fields retain source passages and page references, so a reviewer can inspect the supporting policy text." },
        { title: "Validation before interpretation", detail: "Deterministic checks and review queues handle conflicts; account teams retain coverage interpretation and recommendations." },
      ],
    },
  },
  {
    slug: "fennemore", name: "Fennemore", website: "https://www.fennemorelaw.com/",
    category: "Knowledge Systems & Legal Services", industry: "Business law and legal services",
    headline: "Knowledge retrieval that follows the permission boundary.",
    summary: "A permission-aware legal knowledge workspace with authorization before retrieval and source access, versioned supporting passages, insufficient-evidence handling, and deletion propagation.",
    overview: "I developed a permission-aware knowledge workspace for searching approved precedents, internal guidance, and matter documents. I built the services with Python, FastAPI, PostgreSQL, vector search, and Microsoft Graph.",
    role: "Knowledge-search services, permission-aware retrieval, evidence and version tracking, and index lifecycle management.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Vector search", "Microsoft Graph"],
    implementation: [
      { title: "Authorization at both access points", description: "I enforced access before retrieval and rechecked authorization when users opened source material." },
      { title: "Grounded answers & insufficient evidence", description: "Answers included supporting passages and document versions, with explicit handling of insufficient evidence." },
      { title: "Index lifecycle & permission changes", description: "I implemented deletion propagation and permission updates so stale indexes could not preserve unauthorized visibility." },
    ],
    outcome: "Attorneys gained a faster way to locate relevant material while keeping legal judgment and final drafting decisions with the responsible professionals.",
    flow: ["Authorize & retrieve", "Answer with passages & versions", "Recheck source access"],
    diagram: {
      title: "Permission-aware retrieval & source lifecycle", lanes: ["KNOWLEDGE REQUEST", "RETRIEVAL SERVICES", "CONTENT & INDEX"],
      nodes: [["Search workspace", "Approved guidance & matters"], ["Python / FastAPI", "Authorize before retrieval"], ["PostgreSQL / vectors", "Passages & document versions"], ["Microsoft Graph", "Permission updates & deletions"], ["Source access", "Authorization checked again"]],
      edges: [{ from: 0, to: 1, label: "Query" }, { from: 1, to: 2, label: "Retrieve" }, { from: 3, to: 2, label: "Lifecycle", dashed: true }, { from: 1, to: 4, dashed: true }], platform: "Microsoft Graph · Deletion propagation · Permission updates",
      decisions: [
        { title: "Access before relevance", detail: "Authorization is enforced before retrieval, then checked again when opening the source. Search relevance does not override access." },
        { title: "Indexes are not authority", detail: "Permission changes and deletions propagate into retrieval so a stale index cannot preserve unauthorized visibility." },
      ],
    },
  },
  {
    slug: "mccowngordon", name: "McCownGordon Construction", website: "https://mccowngordon.com/",
    category: "Field Service & Construction", industry: "Commercial construction and project delivery",
    headline: "Field work that survives offline capture and delayed uploads.",
    summary: "A field-operations platform connecting observations, assignments, inspections, photos, and reporting, with persistent offline queues, version checks, audit trails, and recovery tools.",
    overview: "I developed a field-operations platform connecting site observations, assigned work, inspections, photographs, and office reporting. I used React Native, React, .NET APIs, PostgreSQL, and Azure storage.",
    role: "Mobile and web development, offline synchronization, inspection workflows, operational monitoring, recovery, and training.",
    stack: ["React Native", "React", ".NET APIs", "PostgreSQL", "Azure Storage"],
    implementation: [
      { title: "Persistent offline capture", description: "I implemented persistent offline queues and version checks so delayed uploads could not silently overwrite newer information." },
      { title: "Completion is not inspection acceptance", description: "I separated task completion from inspection acceptance and retained an audit trail for important changes." },
      { title: "Operational recovery & adoption", description: "Supervisors could see outstanding actions and supporting evidence, while field staff could continue capturing information with limited connectivity. I delivered operational monitoring, recovery tools, and training built around actual site workflows." },
    ],
    outcome: "Field staff could keep capturing information with limited connectivity, and supervisors could inspect outstanding actions and evidence with monitoring and recovery tools available.",
    flow: ["Capture field work offline", "Synchronize with version checks", "Inspect & report with evidence"],
    diagram: {
      title: "Offline queues, version checks & inspection acceptance", lanes: ["FIELD & OFFICE", "APPLICATION", "RECORDS & EVIDENCE"],
      nodes: [["React Native / React", "Site capture & office reporting"], [".NET APIs", "Version-checked synchronization"], ["PostgreSQL / Azure", "Records & photographic evidence"], ["Persistent offline queue", "Capture through poor connectivity"], ["Inspection acceptance", "Separate from task completion"]],
      edges: [{ from: 0, to: 1, label: "Sync" }, { from: 1, to: 2, label: "Versions" }, { from: 0, to: 3, dashed: true }, { from: 1, to: 4, dashed: true }], platform: "Azure storage · Audit trail · Monitoring & recovery tools",
      decisions: [
        { title: "Do not silently overwrite", detail: "Delayed offline uploads pass through version checks, protecting newer information from stale updates." },
        { title: "Two business milestones", detail: "Completing a task does not imply inspection acceptance. These states remain separate and auditable." },
      ],
    },
  },
  {
    slug: "flexible-metal", name: "Flexible Metal", website: "https://www.flexiblemetal.com/",
    category: "Inventory & ERP Integration", industry: "Engineered metal components and manufacturing",
    headline: "Demand, shipments, and ERP records that can be reconciled.",
    summary: "A manufacturing integration layer for schedules, production demand, inventory, shipments, and ERP records, with partner identifiers, duplicate protection, acknowledgment tracking, and exception staging.",
    overview: "I implemented an integration layer connecting customer schedules, production demand, inventory movements, shipments, and ERP records. I used Python, C#/.NET, SQL, and queued processing, with a staging interface for exceptions.",
    role: "Manufacturing integrations, partner-message semantics, exception staging, acknowledgment tracking, and shipment reconciliation.",
    stack: ["Python", "C#", ".NET", "SQL", "Queued processing", "ERP integrations"],
    implementation: [
      { title: "Partner identifiers & schedule semantics", description: "I preserved partner-specific identifiers and distinguished replacement schedules from incremental changes." },
      { title: "Traceable message processing", description: "I added duplicate-message protection, acknowledgment tracking, and reconciliation between shipment quantities and ERP postings." },
      { title: "Review before production demand", description: "Uncertain mappings required review before affecting production demand." },
    ],
    outcome: "Planners gained clearer visibility into incoming requirements, while accounting staff could trace shipments through invoicing without repeatedly entering the same information.",
    flow: ["Stage partner schedules", "Review mappings & demand", "Reconcile shipments with ERP"],
    diagram: {
      title: "Partner schedules, exception staging & ERP reconciliation", lanes: ["PARTNER INPUT", "INTEGRATION LAYER", "ERP & RECORDS"],
      nodes: [["Customer schedules", "Partner-specific identifiers"], ["Python / C# / .NET", "Queued processing & deduplication"], ["SQL / ERP", "Demand, inventory & postings"], ["Exception staging", "Review uncertain mappings"], ["Reconciliation", "Shipments, postings & acks"]],
      edges: [{ from: 0, to: 1, label: "Schedules" }, { from: 1, to: 2, label: "Postings" }, { from: 1, to: 3, dashed: true }, { from: 2, to: 4, dashed: true }], platform: "Queued processing · Acknowledgment tracking · Exception staging",
      decisions: [
        { title: "Replacement vs. increment", detail: "Replacement schedules and incremental changes have different effects on production demand. Partner-specific identifiers and message semantics remain intact." },
        { title: "Review before impact", detail: "Uncertain mappings enter staging for review before they can change production demand." },
      ],
    },
  },
  {
    slug: "saddle-creek", name: "Saddle Creek Logistics Services", website: "https://www.sclogistics.com/",
    category: "Data Engineering & Logistics", industry: "Warehousing, fulfillment, and transportation",
    headline: "Operational metrics traceable to the events behind them.",
    summary: "A logistics data platform combining warehouse, order, carrier, and customer feeds, with original event timestamps, explicit fulfillment definitions, completeness checks, and bounded replay.",
    overview: "I developed a logistics data platform combining warehouse events, order records, carrier updates, and customer feeds. I used Python, SQL, S3, SQS, and containerized AWS workers.",
    role: "Event processing, logistics reporting models, data-quality controls, operational alerts, and recovery procedures.",
    stack: ["Python", "SQL", "Amazon S3", "Amazon SQS", "AWS", "Containers"],
    implementation: [
      { title: "Event time & source corrections", description: "I handled duplicate scans, late messages, source corrections, and timezone differences while preserving the original event timestamps." },
      { title: "Explicit fulfillment definitions", description: "I created reporting models with explicit definitions for fulfillment milestones and exceptions." },
      { title: "Completeness & bounded recovery", description: "I also implemented completeness checks, operational alerts, and bounded replay procedures for failed jobs." },
    ],
    outcome: "Operations teams gained more dependable reporting, and customer-facing metrics could be traced back to the records used to calculate them.",
    flow: ["Collect source events", "Process & reconcile event time", "Publish traceable reporting"],
    diagram: {
      title: "Source events, queued workers & traceable reporting", lanes: ["SOURCE FEEDS", "EVENT PROCESSING", "DATA & REPORTING"],
      nodes: [["Warehouse / carrier feeds", "Orders, scans & customer events"], ["SQS / Python workers", "Deduplication & event-time handling"], ["S3 / SQL", "Source records & reporting models"], ["Quality controls", "Completeness checks & alerts"], ["Bounded replay", "Recovery for failed jobs"]],
      edges: [{ from: 0, to: 1, label: "Events" }, { from: 1, to: 2, label: "Models" }, { from: 1, to: 3, dashed: true }, { from: 4, to: 1, label: "Replay", dashed: true }], platform: "Containerized AWS workers · Original event timestamps retained",
      decisions: [
        { title: "Event time remains explicit", detail: "Original timestamps are retained while processing late messages, source corrections, duplicate scans, and timezone differences." },
        { title: "Recovery has a boundary", detail: "Failed jobs use bounded replay procedures, alongside completeness checks and operational alerts." },
      ],
    },
  },
  {
    slug: "bennett-thrasher", name: "Bennett Thrasher", website: "https://www.btcpa.net/",
    category: "Accounting Automation", industry: "Accounting, tax, and financial advisory services",
    headline: "Automate the transfer. Keep control of the posting.",
    summary: "A QuickBooks Online automation platform with company-scoped OAuth, encrypted tokens, account mappings, duplicate checks, record-version conflict detection, and accountant-reviewed AI extraction.",
    overview: "I developed an accounting automation platform connecting client operations with QuickBooks Online. I worked with accountants to map invoices, payments, expenses, and supporting documents, then automated repetitive transfers while preserving review and approval. I built the platform with Next.js, Python/FastAPI, PostgreSQL, and the QuickBooks Online API.",
    role: "Accounting workflow mapping, full-stack development, QuickBooks integration, AI extraction, and posting controls.",
    stack: ["Next.js", "Python", "FastAPI", "PostgreSQL", "QuickBooks Online API", "OAuth", "AI extraction"],
    implementation: [
      { title: "Company-scoped connections", description: "I implemented company-scoped OAuth connections, encrypted token storage, account mappings, and duplicate-transaction checks." },
      { title: "Conflict-aware updates", description: "I used QuickBooks record versions to detect conflicting updates." },
      { title: "Proposals before posting", description: "AI extracted proposed values from invoices and receipts, while deterministic checks and accountant review controlled posting." },
    ],
    outcome: "Finance staff gained a clear queue of completed transactions, exceptions, and reconciliation tasks.",
    flow: ["Extract proposed transactions", "Validate & obtain review", "Post & reconcile QuickBooks records"],
    diagram: {
      title: "Document proposals, accountant review & version-aware posting", lanes: ["FINANCE WORKSPACE", "AUTOMATION SERVICES", "FINANCIAL RECORDS"],
      nodes: [["Next.js", "Documents & transaction queues"], ["Python / FastAPI", "Mappings, checks & token storage"], ["QuickBooks / PostgreSQL", "Company-scoped records & versions"], ["AI extraction", "Proposed invoice & receipt values"], ["Accountant review", "Approval before posting"]],
      edges: [{ from: 0, to: 1, label: "Records" }, { from: 1, to: 2, label: "Versions" }, { from: 1, to: 3, dashed: true }, { from: 3, to: 4, label: "Proposals", dashed: true }, { from: 4, to: 2, label: "Approved", dashed: true }], platform: "Company-scoped OAuth · Encrypted tokens · Duplicate checks",
      decisions: [
        { title: "Review controls posting", detail: "AI produces proposed values. Deterministic validation and accountant review remain the gate before posting financial records." },
        { title: "Detect concurrent updates", detail: "QuickBooks record versions detect conflicting updates; company-scoped connections keep each client's integration separate." },
      ],
    },
  },
  {
    slug: "fusion-academy", name: "Fusion Academy", website: "https://www.fusionacademy.com/",
    category: "Learning Platforms & Education", industry: "Personalized education and academic support",
    headline: "Learning support grounded in the student’s actual work.",
    summary: "A learning workspace with separate student, parent, and educator permissions, reviewable AI practice generation, evidence-based student memory, and parent summaries linked to supporting work.",
    overview: "I developed a learning workspace connecting student goals, assignments, practice activities, and educator feedback. I used Next.js, Python/FastAPI, PostgreSQL, and private storage, with separate student, parent, and educator permissions.",
    role: "Learning-workspace development, permission boundaries, document ingestion, AI-assisted practice, and evidence-based memory.",
    stack: ["Next.js", "Python", "FastAPI", "PostgreSQL", "Private storage", "AI generation"],
    implementation: [
      { title: "Reviewable practice generation", description: "I implemented document ingestion and AI-assisted practice generation, keeping uncertain materials reviewable before publication." },
      { title: "Specific observations, not ability labels", description: "Student memory stored specific attempts, hints, and observed mistakes rather than unsupported conclusions about ability." },
      { title: "Evidence for parents & educators", description: "Parent summaries linked to the work supporting them. Educators could prepare differentiated activities and maintain continuity between sessions while retaining responsibility for assessment and instruction." },
    ],
    outcome: "Educators could prepare differentiated activities and maintain continuity between sessions, with assessment and instruction remaining their responsibility.",
    flow: ["Ingest learning materials", "Review generated practice", "Record attempts & educator feedback"],
    diagram: {
      title: "Role-aware learning, reviewable generation & evidence", lanes: ["LEARNING EXPERIENCE", "APPLICATION", "PRIVATE LEARNING DATA"],
      nodes: [["Next.js", "Student, parent & educator roles"], ["Python / FastAPI", "Ingestion & practice generation"], ["PostgreSQL / storage", "Attempts, hints & supporting work"], ["Educator review", "Uncertain material before publication"], ["Parent summaries", "Links to supporting student work"]],
      edges: [{ from: 0, to: 1, label: "Roles" }, { from: 1, to: 2, label: "Evidence" }, { from: 1, to: 3, dashed: true }, { from: 2, to: 4, dashed: true }], platform: "Private storage · Separate student, parent & educator permissions",
      decisions: [
        { title: "Observation, not inference", detail: "Student memory records attempts, hints, and observed mistakes rather than making unsupported statements about ability." },
        { title: "Educator responsibility", detail: "Uncertain materials stay reviewable before publication, and educators retain assessment and instructional decisions." },
      ],
    },
  },
  {
    slug: "planet-professional", name: "Planet Professional", website: "https://www.planet-pro.com/",
    category: "Workflow Automation & Recruitment", industry: "Recruitment and professional staffing",
    headline: "Recruitment handoffs that verify the action before confirming it.",
    summary: "Recruitment automations across applicant records, calendars, email, and ATS APIs, with source-backed résumé summaries, duplicate review, send-time checks, and verified interview confirmations.",
    overview: "I developed recruitment automations connecting enquiries, applicant records, interview scheduling, and recruiter follow-ups. I used Python, Microsoft Graph, n8n, PostgreSQL, and applicant-tracking APIs.",
    role: "Recruitment workflow integrations, résumé extraction, calendar verification, communication controls, and action-queue visibility.",
    stack: ["Python", "Microsoft Graph", "n8n", "PostgreSQL", "ATS APIs", "Structured extraction"],
    implementation: [
      { title: "Source-backed candidate drafts", description: "I implemented structured résumé extraction and draft candidate summaries with supporting references, while keeping screening and hiring decisions with recruiters." },
      { title: "Record & communication controls", description: "I added duplicate-record review, communication preferences, and checks immediately before scheduled messages were sent." },
      { title: "Verified interview confirmations", description: "Interview confirmations depended on successful calendar creation." },
    ],
    outcome: "Recruiters gained a dependable action queue and better visibility into failed handoffs, reducing repeated administration across email, calendars, and the applicant-tracking system.",
    flow: ["Extract & review candidate records", "Verify calendar creation", "Check & send recruiter follow-ups"],
    diagram: {
      title: "Applicant workflows, calendar verification & send-time controls", lanes: ["APPLICANT SYSTEMS", "AUTOMATION", "RECORDS & CALENDARS"],
      nodes: [["Enquiries / ATS APIs", "Applicants & recruiter follow-ups"], ["Python / n8n", "Extraction & action workflows"], ["PostgreSQL / Graph", "Records, email & calendars"], ["Recruiter review", "Drafts, references & duplicates"], ["Verified actions", "Calendar created; send-time checks"]],
      edges: [{ from: 0, to: 1, label: "Applicants" }, { from: 1, to: 2, label: "Actions" }, { from: 1, to: 3, dashed: true }, { from: 2, to: 4, dashed: true }], platform: "Microsoft Graph · Communication preferences · Recruiter decision ownership",
      decisions: [
        { title: "Calendar before confirmation", detail: "Interview confirmation depends on successful calendar creation, not simply an attempted scheduling request." },
        { title: "Check at send time", detail: "Communication preferences and checks are evaluated immediately before scheduled messages are sent." },
      ],
    },
  },
  {
    slug: "sparkfund", name: "Sparkfund", website: "https://sparkfund.com/",
    category: "IoT Dashboards & Energy", industry: "Distributed energy infrastructure and utility services",
    headline: "Separate missing telemetry from a confirmed equipment fault.",
    summary: "An energy-asset dashboard with timestamp-aware telemetry, freshness indicators, alert ownership, escalation, maintenance handoffs, and separately authorized remote controls.",
    overview: "I developed an operational dashboard for monitoring distributed energy assets and investigating telemetry exceptions. I used React, Python, AWS IoT services, time-series storage, and PostgreSQL for asset and maintenance records.",
    role: "Operational dashboard and telemetry processing, alert workflows, data-quality handling, and maintenance handoffs.",
    stack: ["React", "Python", "AWS IoT", "Time-series storage", "PostgreSQL"],
    implementation: [
      { title: "Telemetry with time context", description: "I handled delayed measurements, duplicate messages, device restarts, and inconsistent timestamps." },
      { title: "Freshness is operational context", description: "I distinguished missing telemetry from confirmed equipment faults and displayed data freshness alongside operational metrics." },
      { title: "Owned alerts & controlled actions", description: "I implemented alert acknowledgment, escalation, and maintenance handoffs with clear ownership. Remote-control actions remained separately authorized and audited." },
    ],
    outcome: "Operations staff could prioritize investigation using dependable context, while remote-control actions remained separately authorized and audited.",
    flow: ["Collect & qualify telemetry", "Investigate freshness & exceptions", "Acknowledge, escalate & maintain"],
    diagram: {
      title: "Telemetry quality, operational alerts & control boundaries", lanes: ["ENERGY ASSETS", "TELEMETRY PROCESSING", "OPERATIONAL DATA"],
      nodes: [["AWS IoT services", "Measurements & device events"], ["Python", "Timestamps, duplicates & freshness"], ["Time series / PostgreSQL", "Telemetry, assets & maintenance"], ["React dashboard", "Exceptions & owned alert queues"], ["Remote controls", "Separate authorization & audit"]],
      edges: [{ from: 0, to: 1, label: "Telemetry" }, { from: 1, to: 2, label: "Records" }, { from: 1, to: 3, dashed: true }, { from: 3, to: 4, label: "Authorized", dashed: true }], platform: "AWS IoT · Data freshness · Separate control authorization",
      decisions: [
        { title: "Missing is not faulty", detail: "Missing telemetry is not treated as a confirmed equipment failure. Data freshness is displayed alongside operational metrics." },
        { title: "Monitoring is not control", detail: "Remote-control actions retain a separate authorization and audit boundary from routine monitoring and investigation." },
      ],
    },
  },
  {
    slug: "noble-house", name: "Noble House Hotels & Resorts", website: "https://www.noblehousehotels.com/",
    category: "Website Modernization & Hospitality", industry: "Luxury hotels, resorts, and hospitality",
    headline: "A shared publishing foundation without losing property identity.",
    summary: "A multi-property Next.js website with reusable hospitality content, booking-engine integrations, controlled publishing, preview environments, and analytics that distinguish booking intent from completed reservations.",
    overview: "I modernized a multi-property hospitality website using Next.js, TypeScript, a headless CMS, and existing booking-engine integrations. I created reusable components for rooms, dining, experiences, offers, and destination content while preserving each property’s identity.",
    role: "Website modernization, reusable content architecture, mobile performance, accessibility, publishing workflows, and booking-transition analytics.",
    stack: ["Next.js", "TypeScript", "Headless CMS", "Booking-engine APIs", "Analytics", "Accessibility"],
    implementation: [
      { title: "Mobile delivery & accessibility", description: "I improved mobile photography delivery, accessibility, redirects, and content-management workflows." },
      { title: "Honest booking-journey analytics", description: "I tracked booking-engine transitions without confusing a button click with a completed reservation." },
      { title: "Controlled property publishing", description: "Property teams gained controlled publishing access, preview environments, and reusable content structures." },
    ],
    outcome: "Guests gained a clearer path from discovering a property to exploring an experience and checking availability. Property teams gained controlled publishing access and reusable content structures.",
    flow: ["Discover a property", "Explore rooms & experiences", "Check booking-engine availability"],
  },
]
