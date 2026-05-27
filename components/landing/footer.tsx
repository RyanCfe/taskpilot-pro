import { Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
              <span className="text-sm font-bold text-primary-foreground">T</span>
            </div>
            <span className="font-semibold text-foreground">TaskPilot Pro</span>
          </div>

          <nav className="flex items-center gap-6">
            <a
              href="#features"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </a>
            <a
              href="#demo"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Demo
            </a>
            <a
              href="#faq"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/RyanCfe/taskpilot-pro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
            <a
              href="https://github.com/RyanCfe/taskpilot-pro/blob/main/PRIVACY_POLICY.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border/50 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TaskPilot Pro. Open source under MIT License.
          </p>
        </div>
      </div>
    </footer>
  )
}
