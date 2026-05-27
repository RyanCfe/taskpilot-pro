import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Trophy,
  Sparkles,
  MousePointerClick,
  BookOpen,
  Code2,
  Shield,
} from "lucide-react"

const features = [
  {
    icon: Trophy,
    title: "Ranked AI Tools by Task",
    description:
      "Get curated rankings of the best AI tools for any task. No more endless searching—just pick and go.",
  },
  {
    icon: Sparkles,
    title: "Smart Prompt Builder",
    description:
      "Copy battle-tested prompts instantly. Optimized templates that get you better results from any AI tool.",
  },
  {
    icon: MousePointerClick,
    title: "Right-Click AI Actions",
    description:
      "Access AI tools directly from your context menu. Select text, right-click, and launch into your favorite AI.",
  },
  {
    icon: BookOpen,
    title: "Study & Research Helpers",
    description:
      "Specialized tools for students and researchers. Math solvers, paper analyzers, and book summarizers at your fingertips.",
  },
  {
    icon: Code2,
    title: "Coding Tools Integration",
    description:
      "Quick access to Cursor, Windsurf, Copilot, Blackbox, and more. Switch between coding assistants seamlessly.",
  },
  {
    icon: Shield,
    title: "Launch Guard Security",
    description:
      "Built-in security checklist before launching any AI tool. Know exactly what data you are sharing.",
  },
]

export function Features() {
  return (
    <section className="px-4 py-20" id="features">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Everything you need to work with AI
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            TaskPilot Pro puts the power of AI at your fingertips with smart tools designed for productivity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card"
            >
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
