import { Card } from "@/components/ui/card"
import { Play, ChevronRight } from "lucide-react"

export function DemoSection() {
  return (
    <section className="px-4 py-20" id="demo">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            See TaskPilot Pro in action
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Watch how quickly you can find the right AI tool, grab a prompt, and start working.
          </p>
        </div>

        <Card className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
          {/* Browser mockup header */}
          <div className="flex items-center gap-2 border-b border-border/50 bg-muted/30 px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-destructive/60" />
              <div className="h-3 w-3 rounded-full bg-chart-4/60" />
              <div className="h-3 w-3 rounded-full bg-primary/60" />
            </div>
            <div className="ml-4 flex-1">
              <div className="mx-auto flex max-w-md items-center gap-2 rounded-md bg-background/50 px-3 py-1.5 text-sm text-muted-foreground">
                <div className="h-4 w-4 rounded-full bg-primary/20" />
                <span>chrome://extensions</span>
              </div>
            </div>
          </div>

          {/* Demo content placeholder */}
          <div className="relative aspect-video bg-gradient-to-br from-card via-muted/20 to-card">
            {/* Extension popup mockup */}
            <div className="absolute right-8 top-8 w-72 rounded-lg border border-border/50 bg-card shadow-2xl">
              <div className="border-b border-border/50 p-3">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded bg-gradient-to-br from-primary to-accent" />
                  <span className="font-semibold text-foreground">TaskPilot Pro</span>
                </div>
              </div>
              <div className="space-y-2 p-3">
                <div className="rounded-md bg-muted/50 p-2 text-xs text-muted-foreground">
                  Select a task category...
                </div>
                {["Writing", "Coding", "Research", "Math"].map((task, i) => (
                  <div
                    key={task}
                    className={`flex items-center justify-between rounded-md px-3 py-2 text-sm ${
                      i === 0
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted/50"
                    }`}
                  >
                    <span>{task}</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                ))}
              </div>
            </div>

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="group flex h-20 w-20 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-all hover:bg-primary hover:scale-105">
                <Play className="h-8 w-8 translate-x-0.5" />
              </button>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-card to-transparent" />
          </div>
        </Card>
      </div>
    </section>
  )
}
