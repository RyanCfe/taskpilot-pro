import { Button } from "@/components/ui/button"
import { Github, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:py-32">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/20 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-primary" />
          Chrome Extension
        </div>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Ranked AI tools
          </span>{" "}
          for every task
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl text-balance">
          Stop searching. Pick a task, get the best AI tools ranked, copy a strong prompt, and launch instantly.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="https://github.com/RyanCfe/taskpilot-pro" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              Download from GitHub
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 border-border/50 bg-card/50 backdrop-blur-sm" asChild>
            <a href="#demo">
              <Play className="h-5 w-5" />
              View Demo
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
