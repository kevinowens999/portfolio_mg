"use client"

import { Button } from "@/components/ui/button"
import { getDict } from "@/lib/dictionary"

type ContactDict = ReturnType<typeof getDict>["contact"]

export default function ContactForm({ t, defaultSubject = "" }: { t: ContactDict; defaultSubject?: string }) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    if (String(data.get("website") ?? "").trim()) return
    const subject = String(data.get("subject") ?? "").trim() || "Portfolio inquiry"
    const body = `${String(data.get("message") ?? "").trim()}\n\nFrom: ${String(data.get("name") ?? "").trim()}\nReply to: ${String(data.get("email") ?? "").trim()}`
    window.location.href = `mailto:mattgarner0819@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            {t.name}
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full p-2 border rounded-md"
            placeholder={t.namePlaceholder}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            {t.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full p-2 border rounded-md"
            placeholder={t.emailPlaceholder}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          {t.subject}
        </label>
        <input
          id="subject"
          name="subject"
          defaultValue={defaultSubject}
          className="w-full p-2 border rounded-md"
          placeholder={t.subjectPlaceholder}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="w-full p-2 border rounded-md min-h-[120px]"
          placeholder={t.messagePlaceholder}
        ></textarea>
      </div>
      {/* Honeypot — visually hidden, off from a11y and tab order. */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label htmlFor="website">Leave this empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <Button type="submit" className="w-full" >
        Send message
      </Button>
    </form>
  )
}
