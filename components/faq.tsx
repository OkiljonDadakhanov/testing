import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: "What is ARBIChO?",
    answer: "ARBIChO (Abu Rayhan Biruni International Chemistry Olympiad) is a prestigious international chemistry competition that celebrates the legacy of Abu Rayhan Biruni while fostering scientific excellence among young chemists worldwide."
  },
  {
    question: "Who can participate in ARBIChO?",
    answer: "Students aged 14-19 can participate in ARBIChO across three divisions: Junior (14-15), Senior (16-17), and Advanced (18-19). Participants must be enrolled in a secondary education institution during the competition year."
  },
  {
    question: "How does the registration process work?",
    answer: "Registration opens on January 15, 2024. Students can register through their schools or individually through our online platform. Early bird registration is available with special rates. The registration deadline is February 15, 2024."
  },
  {
    question: "What is the competition format?",
    answer: "The competition consists of three rounds: Local (written examination), National (theoretical and practical tests), and International Final (comprehensive examination, laboratory practical, and research presentation)."
  },
  {
    question: "How are participants evaluated?",
    answer: "Evaluation is based on three main criteria: Theoretical Knowledge (multiple choice, short answer, problem-solving), Practical Skills (laboratory technique, data analysis, safety), and Research & Innovation (project presentation, methodology)."
  },
  {
    question: "What prizes are available?",
    answer: "ARBIChO offers over $50,000 in prizes, including gold, silver, and bronze medals, special awards for outstanding performance, research grants, and internship opportunities with leading scientific institutions."
  },
  {
    question: "Is there a participation fee?",
    answer: "Yes, there is a nominal participation fee that varies by region. Fee waivers and scholarships are available for eligible students. Early bird registrants receive a significant discount."
  },
  {
    question: "How can schools get involved?",
    answer: "Schools can participate by nominating students, hosting local rounds, or becoming an official ARBIChO center. Contact our school partnerships team for more information."
  },
  {
    question: "What preparation resources are available?",
    answer: "We provide comprehensive study materials, practice problems, video tutorials, and online workshops. Registered participants get access to our exclusive learning platform."
  },
  {
    question: "Where is the international final held?",
    answer: "The 2024 International Final will be held in Tashkent, Uzbekistan. The event includes not only the competition but also cultural programs, scientific workshops, and networking opportunities."
  }
]

export function FAQSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#012e40] to-[#011c2c] py-20" id="faq">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 -translate-x-1/2 translate-y-1/2 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4 border-emerald-500/20 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20">
            Help Center
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-emerald-100/80">
            Find answers to common questions about the ARBIChO competition, registration process, and more.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur px-6 rounded-lg"
              >
                <AccordionTrigger className="text-emerald-100 hover:text-emerald-300 [&[data-state=open]>div>svg]:text-emerald-400">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-emerald-500/70" />
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-emerald-100/70 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Help Text */}
        <div className="mt-16 text-center">
          <p className="text-emerald-100/80">
            Still have questions? {" "}
            <a href="/contact" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
