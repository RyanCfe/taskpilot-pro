import { Card } from "@/components/ui/card"
import { Download, FolderOpen, Settings, ToggleRight, MousePointer, FolderCheck } from "lucide-react"

const steps = [
  {
    number: 1,
    icon: Download,
    title: "Download the ZIP from GitHub",
    description: "Click the green \"Code\" button, then \"Download ZIP\"",
  },
  {
    number: 2,
    icon: FolderOpen,
    title: "Unzip the folder",
    description: "Extract the downloaded file to a location you can find easily",
  },
  {
    number: 3,
    icon: Settings,
    title: "Open chrome://extensions/",
    description: "Type this in your Chrome address bar and press Enter",
  },
  {
    number: 4,
    icon: ToggleRight,
    title: "Turn on Developer Mode",
    description: "Find the toggle in the top-right corner and switch it on",
  },
  {
    number: 5,
    icon: MousePointer,
    title: "Click \"Load unpacked\"",
    description: "This button appears in the top-left after enabling Developer Mode",
  },
  {
    number: 6,
    icon: FolderCheck,
    title: "Select the unzipped TaskPilot Pro folder",
    description: "Navigate to the folder and click \"Select Folder\" — you're done!",
  },
]

export function InstallSection() {
  return (
    <section className="px-4 py-20" id="install">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            How to install manually
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Get TaskPilot Pro running in Chrome in just a few steps. No coding required.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="relative border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-colors hover:bg-card/80"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {step.number}
                </div>
                <step.icon className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Need help?{" "}
            <a
              href="https://github.com/RyanCfe/taskpilot-pro/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Open an issue on GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
