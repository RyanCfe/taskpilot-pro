"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is TaskPilot Pro?",
    answer:
      "TaskPilot Pro is a Chrome extension that helps you find the best AI tools for any task. It ranks AI tools by task category, provides optimized prompts, and lets you launch into any AI tool with one click.",
  },
  {
    question: "Is TaskPilot Pro free?",
    answer:
      "Yes, TaskPilot Pro is completely free and open source. You can download it from GitHub and use all features without any cost or subscriptions.",
  },
  {
    question: "Does it collect my data?",
    answer:
      "No. TaskPilot Pro is privacy-first by design. It has no backend, no tracking, and no data collection. Everything runs locally in your browser, and your preferences stay on your device.",
  },
  {
    question: "Which AI tools are supported?",
    answer:
      "TaskPilot Pro supports all major AI tools including ChatGPT, Claude, Gemini, Perplexity, and coding assistants like Cursor, Windsurf, Copilot, and Blackbox. We regularly add new tools based on community feedback.",
  },
  {
    question: "How does the Smart Prompt Builder work?",
    answer:
      "The Smart Prompt Builder provides pre-optimized prompt templates for common tasks. Select your task category, choose a prompt template, customize if needed, and copy it with one click. These prompts are designed to get better results from AI tools.",
  },
  {
    question: "Can I contribute to the project?",
    answer:
      "Absolutely! TaskPilot Pro is open source on GitHub. You can contribute by adding new AI tools, improving prompts, fixing bugs, or suggesting features. Check out our GitHub repository for contribution guidelines.",
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
