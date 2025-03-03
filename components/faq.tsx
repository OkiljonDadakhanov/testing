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
    question: "What is the Abu Rayhan Biruni International Chemistry Olympiad (ARBIChO)?",
    answer: "The International Abu Rayhan Biruni Chemistry Olympiad (ARBIChO) is a prestigious competition that brings together talented students from around the world to test their knowledge and skills in chemistry. It aims to promote scientific excellence and international collaboration."
  },
  {
    question: "When and where will the Olympiad take place?",
    answer: "The 2nd ARBIChO will be held in Tashkent, Uzbekistan, from June 1 to June 8, 2025."
  },
  {
    question: "Who can participate in the Olympiad?",
    answer: "Participants must be:\n• Under 18 years old as of July 1, 2025.\n• Enrolled in a regular secondary school (not a specialized STEM or chemistry-only school).\n• Not yet started full-time university studies."
  },
  {
    question: "How can my country participate?",
    answer: "Selected countries have received official invitation letters. However, if your country was not invited but is interested, your national Olympiad organization can request participation by contacting arbicho@olympcenter.uz before the registration deadline."
  },
  {
    question: "Can students register individually?",
    answer: "No, students cannot register individually. Each country must send an official national team selected through their own national competition or selection process."
  },
  {
    question: "How many students can each country send?",
    answer: "Each country may send one team, consisting of:\n• 4 student participants\n• 1 team leader"
  },
  {
    question: "How can we register for the Olympiad?",
    answer: "Teams must register online by March 15, 2025 (UTC+5) via the provided link in the invitation letter."
  },
  {
    question: "Is there a registration fee?",
    answer: "No, there is no registration fee for participating teams."
  },
  {
    question: "What expenses are covered by the organizers?",
    answer: "The Organizing Committee covers:\n• Accommodation (hotel stay)\n• Meals (breakfast, lunch, and dinner)\n• Local transportation (within Uzbekistan)"
  },
  {
    question: "What expenses must participants cover?",
    answer: "Participants must cover:\n• International travel costs (flights, visas, insurance)"
  },
  {
    question: "What is the format of the Olympiad?",
    answer: "The competition consists of two rounds:\n• Practical Examination (90 minutes, 30 points)\n• Theoretical Examination (4 hours, 80 points)"
  },
  {
    question: "Can I bring a calculator or periodic table to the exam?",
    answer: "Yes, students may bring a non-programmable scientific calculator and a printed periodic table provided by the organizers."
  },
  {
    question: "Are electronic devices allowed during the exam?",
    answer: "No. The use of phones, tablets, smartwatches, or any other electronic devices is strictly prohibited during the exam. Violation may result in disqualification."
  },
  {
    question: "How are the exams graded?",
    answer: "• Theoretical exams are graded out of 80 points.\n• Practical exams are graded out of 30 points.\n• Total maximum score: 110 points.\n• A panel of international and local experts ensures fair grading."
  },
  {
    question: "How are winners determined?",
    answer: "The top 60% of participants receive medals in a 1 (gold): 2 (silver): 3 (bronze) ratio."
  }
];


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
        <div className="mx-auto max-w-3xl ">
          <Accordion type="single" collapsible className="space-y-4 ">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur px-6 rounded-lg "
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
