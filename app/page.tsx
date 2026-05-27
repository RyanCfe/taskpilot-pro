import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"
import { InstallSection } from "@/components/landing/install-section"
import { DemoSection } from "@/components/landing/demo-section"
import { PrivacySection } from "@/components/landing/privacy-section"
import { FAQ } from "@/components/landing/faq"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <InstallSection />
        <DemoSection />
        <PrivacySection />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
