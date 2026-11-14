"use client"

import ContactForm from "@/components/contact-form"
import { getDict } from "@/lib/dictionary"

export default function ProjectsContact() {
  return (
    <section id="contact" aria-labelledby="projects-contact-title" className="mt-16 border-t border-border pt-12 md:mt-24 md:pt-16">
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">Get in touch</p>
          <h2 id="projects-contact-title" className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">Have a project in mind?</h2>
          <p className="mb-5 text-base leading-7 text-muted-foreground">Tell me what you’re building, the business problem you want to solve, and where you need engineering support.</p>
          <a href="mailto:mattgarner0819@gmail.com" className="break-all text-sm font-medium text-primary hover:underline">mattgarner0819@gmail.com</a>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
          <ContactForm t={getDict("en").contact} defaultSubject="Project inquiry" />
        </div>
      </div>
    </section>
  )
}
