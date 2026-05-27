import { AlertCircle, Clock, Search } from "lucide-react"

export function ProblemSection() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-destructive/5 via-card to-card p-8 sm:p-12">
          <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-destructive/10 blur-3xl" />

          <div className="relative text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/10 px-4 py-2 text-sm text-destructive">
              <AlertCircle className="h-4 w-4" />
              The Problem
            </div>

            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
              Too many AI tools exist now.
              <br />
              <span className="text-muted-foreground">Choosing the right one wastes time.</span>
            </h2>

            <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-3">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <Search className="h-8 w-8 text-destructive/60" />
                <span className="text-sm">Endless searching</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <Clock className="h-8 w-8 text-destructive/60" />
                <span className="text-sm">Wasted hours</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <AlertCircle className="h-8 w-8 text-destructive/60" />
                <span className="text-sm">Decision fatigue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
