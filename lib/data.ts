// Career data for the subway / git-graph timeline map.
// Two parallel tracks: "fte" (full-time trunk) + "side" (parallel ventures).
//
// Human-readable text fields are localized ({ en, pt }); resolve them with
// `tx(field, lang)` from lib/i18n. Structural fields (years, ids, codes,
// company names, tech) are language-independent.

import type { L } from "@/lib/i18n";

export interface ClientPeriod {
  client: string;
  start: number;
  end: number;
  country: string;
}

export interface ProgressionStep {
  years: string;
  title: L;
  note: L;
}

export interface Experience {
  id: string;
  period?: string;
  track: "fte" | "side";
  code: string;
  initial: string;
  title: L;
  company: string;
  shortCompany: string;
  short: L;
  start: number;
  end: number;
  country: string;
  location: L;
  description: L;
  roles: L[];
  tech: string[];
  progression?: ProgressionStep[];
  clientPeriods?: ClientPeriod[];
  pointYear?: number;
  interchangeWith?: string;
  mergesBack?: boolean;
  dip?: boolean;
}

export const experiences: Experience[] = [
  {
    "id": "pwc",
    "track": "fte",
    "code": "PC",
    "initial": "Pw",
    "title": {
      "en": "Lead AI & Full-Stack Software Engineer",
      "pt": "Lead AI & Full-Stack Software Engineer"
    },
    "company": "PwC",
    "shortCompany": "PwC",
    "short": {
      "en": "Leading AI-enabled client applications from technical design to operational handoff.",
      "pt": "Leading AI-enabled client applications from technical design to operational handoff."
    },
    "start": 2024,
    "end": 2026,
    "period": "Aug 2024 – Present",
    "country": "US",
    "location": {
      "en": "Dallas, TX · Remote · Contract",
      "pt": "Dallas, TX · Remote · Contract"
    },
    "description": {
      "en": "Lead technical design, code reviews, release planning, and operational handoff for AI-enabled client applications. Built a finance document review workspace combining structured LLM extraction, field validation, and exception handling. Developed a SharePoint-connected RAG service with access-filtered retrieval, document metadata, and source references. Design approval-based agents and integrate Microsoft Graph and client APIs using background workers, idempotent processing, retries, and reconciliation checks.",
      "pt": "Lead technical design, code reviews, release planning, and operational handoff for AI-enabled client applications. Built a finance document review workspace combining structured LLM extraction, field validation, and exception handling. Developed a SharePoint-connected RAG service with access-filtered retrieval, document metadata, and source references. Design approval-based agents and integrate Microsoft Graph and client APIs using background workers, idempotent processing, retries, and reconciliation checks."
    },
    "roles": [
      {
        "en": "Lead AI & Full-Stack Software Engineer",
        "pt": "Lead AI & Full-Stack Software Engineer"
      }
    ],
    "tech": [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "RAG",
      "Microsoft Graph"
    ]
  },
  {
    "id": "att",
    "track": "fte",
    "code": "AT",
    "initial": "AT",
    "title": {
      "en": "Senior AI-Native Software Engineer",
      "pt": "Senior AI-Native Software Engineer"
    },
    "company": "AT&T",
    "shortCompany": "AT&T",
    "short": {
      "en": "Billing investigation tools and LLM-assisted workflows with controlled account adjustments.",
      "pt": "Billing investigation tools and LLM-assisted workflows with controlled account adjustments."
    },
    "start": 2020,
    "end": 2024,
    "period": "Mar 2020 – Jul 2024",
    "country": "US",
    "location": {
      "en": "Dallas, TX · Hybrid · Part-time",
      "pt": "Dallas, TX · Hybrid · Part-time"
    },
    "description": {
      "en": "Developed a billing investigation application consolidating invoices, account changes, and support history. Built LLM-assisted disputed-charge summaries, account timelines, and retrieval of supporting procedures through Azure AI Search. Integrated billing and CRM APIs with scoped permissions, response validation, and approval controls for account adjustments. Implemented Azure Service Bus processing, evaluation scripts, and regression tests; supported Docker deployments through Azure DevOps pipelines.",
      "pt": "Developed a billing investigation application consolidating invoices, account changes, and support history. Built LLM-assisted disputed-charge summaries, account timelines, and retrieval of supporting procedures through Azure AI Search. Integrated billing and CRM APIs with scoped permissions, response validation, and approval controls for account adjustments. Implemented Azure Service Bus processing, evaluation scripts, and regression tests; supported Docker deployments through Azure DevOps pipelines."
    },
    "roles": [
      {
        "en": "Senior AI-Native Software Engineer",
        "pt": "Senior AI-Native Software Engineer"
      }
    ],
    "tech": [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "Azure AI Search",
      "Azure Service Bus",
      "Docker",
      "Azure DevOps"
    ]
  },
  {
    "id": "ntt-data",
    "track": "fte",
    "code": "NT",
    "initial": "NT",
    "title": {
      "en": "Full-Stack Software Engineer",
      "pt": "Full-Stack Software Engineer"
    },
    "company": "NTT DATA North America",
    "shortCompany": "NTT DATA",
    "short": {
      "en": "Web and mobile field service applications, from Figma designs to production support.",
      "pt": "Web and mobile field service applications, from Figma designs to production support."
    },
    "start": 2017,
    "end": 2019,
    "period": "Aug 2017 – Dec 2019",
    "country": "US",
    "location": {
      "en": "Plano, TX · Hybrid · Full-time",
      "pt": "Plano, TX · Hybrid · Full-time"
    },
    "description": {
      "en": "Delivered React and React Native field service applications from requirements and Figma designs through app store submission and production support. Built work assignment, technician update, photograph, signature, and completion-report workflows with offline synchronization. Integrated CRM, payment, mapping, and notification services; implemented role-based access, audit trails, and automated delivery checks for AWS deployments.",
      "pt": "Delivered React and React Native field service applications from requirements and Figma designs through app store submission and production support. Built work assignment, technician update, photograph, signature, and completion-report workflows with offline synchronization. Integrated CRM, payment, mapping, and notification services; implemented role-based access, audit trails, and automated delivery checks for AWS deployments."
    },
    "roles": [
      {
        "en": "Full-Stack Software Engineer",
        "pt": "Full-Stack Software Engineer"
      }
    ],
    "tech": [
      "React",
      "React Native",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "AWS"
    ]
  },
  {
    "id": "ethosenergy",
    "track": "fte",
    "code": "EE",
    "initial": "Et",
    "title": {
      "en": "Business Application Developer, Internal Tools",
      "pt": "Business Application Developer, Internal Tools"
    },
    "company": "EthosEnergy",
    "shortCompany": "EthosEnergy",
    "short": {
      "en": "Internal tools for turbine repair, digital inspections, and engineering approvals.",
      "pt": "Internal tools for turbine repair, digital inspections, and engineering approvals."
    },
    "start": 2011,
    "end": 2017,
    "period": "May 2011 – Aug 2017",
    "country": "US",
    "location": {
      "en": "Houston, TX · On-site · Full-time",
      "pt": "Houston, TX · On-site · Full-time"
    },
    "description": {
      "en": "Developed C#, ASP.NET, and SQL Server applications for turbine repair work orders, equipment records, inspections, and job tracking. Built digital inspection and engineering approval workflows; integrated ERP and document systems and delivered SQL reports for turnaround time and work-in-progress aging.",
      "pt": "Developed C#, ASP.NET, and SQL Server applications for turbine repair work orders, equipment records, inspections, and job tracking. Built digital inspection and engineering approval workflows; integrated ERP and document systems and delivered SQL reports for turnaround time and work-in-progress aging."
    },
    "roles": [
      {
        "en": "Business Application Developer, Internal Tools",
        "pt": "Business Application Developer, Internal Tools"
      }
    ],
    "tech": [
      "C#",
      "ASP.NET",
      "SQL Server",
      "SQL"
    ]
  },
  {
    "id": "texas-mutual",
    "track": "fte",
    "code": "TM",
    "initial": "Te",
    "title": {
      "en": "Associate Software Engineer",
      "pt": "Associate Software Engineer"
    },
    "company": "Texas Mutual Insurance Company",
    "shortCompany": "Texas Mutual",
    "short": {
      "en": "Java and SQL features for internal policy and claims applications.",
      "pt": "Java and SQL features for internal policy and claims applications."
    },
    "start": 2010,
    "end": 2011,
    "period": "Jun 2010 – Apr 2011",
    "country": "US",
    "location": {
      "en": "Austin, TX · Hybrid · Full-time",
      "pt": "Austin, TX · Hybrid · Full-time"
    },
    "description": {
      "en": "Contributed Java and SQL features to internal policy and claims applications, including record search, claim review, document checklists, and task tracking. Resolved defects and data discrepancies, added unit and integration tests, and verified fixes under senior engineering guidance.",
      "pt": "Contributed Java and SQL features to internal policy and claims applications, including record search, claim review, document checklists, and task tracking. Resolved defects and data discrepancies, added unit and integration tests, and verified fixes under senior engineering guidance."
    },
    "roles": [
      {
        "en": "Associate Software Engineer",
        "pt": "Associate Software Engineer"
      }
    ],
    "tech": [
      "Java",
      "SQL",
      "Unit testing",
      "Integration testing"
    ]
  }
];

export const YEAR_MIN = 2010;
export const YEAR_MAX = 2028;
export const COUNTRY_PERIODS = [{ code: "US", label: { en: "United States", pt: "United States" }, start: 2010, end: 2028 }];
export const COUNTRY_PALETTE: Record<string, { tint: string; zone: string; ink: string; accent: string }> = { US: { tint: "rgba(20,22,26,0.04)", zone: "rgba(20,22,26,0.02)", ink: "#4B5563", accent: "#4B5563" } };
