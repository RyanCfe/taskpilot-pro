import { Shield, Server, Lock } from "lucide-react"

export function PrivacySection() {
  return (
    <section className="px-4 py-20" id="privacy">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card via-card to-primary/5 p-8 sm:p-12">
          {/* Background decoration */}
          <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative">
            <div className="mb-8 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Shield className="h-8 w-8" />
              </div>
            </div>

            <h2 className="mb-4 text-center text-3xl font-bold text-foreground sm:text-4xl">
              Privacy-first by design
            </h2>

            <p className="mx-auto mb-12 max-w-xl text-center text-lg text-muted-foreground">
              No backend. No tracking. Saved data stays local.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted/50 text-primary">
                  <Server className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">No Backend</h3>
                <p className="text-sm text-muted-foreground">
                  Everything runs locally in your browser. Zero server calls.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted/50 text-primary">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">No Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  No analytics, no cookies, no data collection of any kind.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted/50 text-primary">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">Local Storage</h3>
                <p className="text-sm text-muted-foreground">
                  Your preferences and data never leave your device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
