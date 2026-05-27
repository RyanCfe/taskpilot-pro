"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is it free?",
    answer:
      "Yes, TaskPilot Pro is completely free and open source. You can download it from GitHub and use all features without any cost or subscriptions.",
  },
  {
    question: "Is it on Chrome Web Store?",
    answer:
      "Not yet. TaskPilot Pro is currently available as a manual install from GitHub. We are working on getting it published to the Chrome Web Store soon.",
  },
  {
    question: "Does it collect data?",
    answer:
      "No. TaskPilot Pro is privacy-first by design. It has no backend, no tracking, and no data collection. Everything runs locally in your browser, and your preferences stay on your device.",
  },
  {
    question: "How do I install it?",
    answer:
      "Download the ZIP from GitHub, unzip it, go to chrome://extensions/, turn on Developer Mode, click Load unpacked, and select the unzipped TaskPilot Pro folder. That's it!",
  },
  {
    question: "Can I suggest tools?",
    answer:
      "Absolutely! TaskPilot Pro is open source on GitHub. You can contribute by suggesting new AI tools, improving prompts, fixing bugs, or adding features. Check out our GitHub repository to get started.",
  },
]

export function FAQ() {
  return (
    <section className="px-4 py-20" id="faq">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about TaskPilot Pro.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-border/50"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
