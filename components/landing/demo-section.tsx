import { Card } from "@/components/ui/card"
import { Trophy, Sparkles, MousePointerClick, Shield, ImageIcon } from "lucide-react"

const demoScreens = [
  {
    icon: Trophy,
    title: "Tool Ranking Screen",
    description: "See AI tools ranked by task category",
  },
  {
    icon: Sparkles,
    title: "Prompt Builder",
    description: "Copy optimized prompts instantly",
  },
  {
    icon: MousePointerClick,
    title: "Right-Click Actions",
    description: "Launch AI tools from any page",
  },
  {
    icon: Shield,
    title: "Launch Guard",
    description: "Security checklist before launch",
  },
]

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

        <div className="grid gap-6 sm:grid-cols-2">
          {demoScreens.map((screen) => (
            <Card
              key={screen.title}
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50"
            >
              <div className="aspect-video bg-gradient-to-br from-muted/30 via-card to-muted/20 p-6">
                <div className="flex h-full flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-border/50 bg-background/30">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <screen.icon className="h-8 w-8" />
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <ImageIcon className="h-4 w-4" />
                    <span className="text-sm">Screenshot / GIF placeholder</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-border/50 p-4">
                <h3 className="font-semibold text-foreground">{screen.title}</h3>
                <p className="text-sm text-muted-foreground">{screen.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
