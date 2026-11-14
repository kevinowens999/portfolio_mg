import { Linkedin, Mail } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-6 text-muted-foreground">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-3 text-sm leading-6 sm:text-base">
          <span className="font-bold text-foreground">MG.</span>
          <p>&copy; {new Date().getFullYear()} Matthew Garner. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/matthew-garner-09215944a" target="_blank" rel="noopener noreferrer" className="p-1 transition-colors hover:text-foreground" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:mattgarner0819@gmail.com" className="p-1 transition-colors hover:text-foreground" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
