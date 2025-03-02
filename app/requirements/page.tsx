"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  GraduationCap,
  ClipboardCheck,
  FileText,
  Globe,
  Shield,
  Download,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

export default function RequirementsPage() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#011c2c] to-[#012e40]">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 -translate-x-1/2 translate-y-1/2 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-emerald-500/20 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
          >
            Competition Guidelines
          </Badge>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Participation Requirements
          </h1>
          <p className="mt-6 text-lg leading-8 text-emerald-100/80">
            Essential information and guidelines for participating in ARBIChO
            2025
          </p>
        </div>

        {/* Quick Links */}
        <div className="mx-auto max-w-5xl mb-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Users className="h-6 w-6 text-emerald-400" />,
                title: "Eligibility",
                description: "Age and academic requirements",
              },
              {
                icon: <ClipboardCheck className="h-6 w-6 text-emerald-400" />,
                title: "Registration",
                description: "Process and deadlines",
              },
              {
                icon: <Shield className="h-6 w-6 text-emerald-400" />,
                title: "Rules",
                description: "Competition guidelines",
              },
              {
                icon: <FileText className="h-6 w-6 text-emerald-400" />,
                title: "Documents",
                description: "Required paperwork",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur cursor-pointer transition-colors hover:bg-emerald-900/20"
                onClick={() =>
                  document
                    .getElementById(item.title.toLowerCase())
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-2">
                    {item.icon}
                    <h3 className="font-medium text-emerald-100">
                      {item.title}
                    </h3>
                    <p className="text-sm text-emerald-100/70">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Eligibility Requirements */}
        <div id="eligibility" className="mx-auto max-w-5xl mb-16 scroll-mt-16">
          <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur">
            <CardHeader>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-emerald-400" />
                <CardTitle className="text-2xl text-emerald-100">
                  Eligibility Requirements
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Age Categories */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-emerald-100">
                  Age Categories
                </h3>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="space-y-2 p-4 rounded-lg bg-emerald-900/20">
                    <h4 className="font-medium text-emerald-100">
                      Junior Division
                    </h4>
                    <p className="text-sm text-emerald-100/70">
                      Ages 14-15 years old
                    </p>
                    <p className="text-sm text-emerald-100/70">
                      Born after January 1, 2010
                    </p>
                  </div>
                  <div className="space-y-2 p-4 rounded-lg bg-emerald-900/20">
                    <h4 className="font-medium text-emerald-100">
                      Senior Division
                    </h4>
                    <p className="text-sm text-emerald-100/70">
                      Ages 16-17 years old
                    </p>
                    <p className="text-sm text-emerald-100/70">
                      Born after January 1, 2008
                    </p>
                  </div>
                  <div className="space-y-2 p-4 rounded-lg bg-emerald-900/20">
                    <h4 className="font-medium text-emerald-100">
                      Advanced Division
                    </h4>
                    <p className="text-sm text-emerald-100/70">
                      Ages 18-19 years old
                    </p>
                    <p className="text-sm text-emerald-100/70">
                      Born after January 1, 2006
                    </p>
                  </div>
                </div>
              </div>

              {/* Academic Requirements */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-emerald-100">
                  Academic Requirements
                </h3>
                <ul className="space-y-3">
                  {[
                    "Must be enrolled in secondary education during the 2024-2025 academic year",
                    "Not enrolled in any university-level courses",
                    "Not holding a secondary school graduation certificate as of January 1, 2025",
                    "No more than two participations in previous ARBIChO competitions",
                  ].map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="text-emerald-100/80">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Country Representation */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-emerald-100">
                  Country Representation
                </h3>
                <ul className="space-y-3">
                  {[
                    "Each country may send one team",
                    "Teams must be officially endorsed by their national chemistry organization or education ministry",
                    "Maximum of 4 students per country",
                    "Students must be citizens or legal permanent residents of the country they represent",
                  ].map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="text-emerald-100/80">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Registration Process */}
        <div id="registration" className="mx-auto max-w-5xl mb-16 scroll-mt-16">
          <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur">
            <CardHeader>
              <div className="flex items-center gap-3">
                <ClipboardCheck className="h-6 w-6 text-emerald-400" />
                <CardTitle className="text-2xl text-emerald-100">
                  Registration Process
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Timeline */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-emerald-100">
                  Important Dates
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      date: "January 15, 2025",
                      event: "Registration Opens",
                      status: "upcoming",
                    },
                    {
                      date: "January 15 - February 1, 2025",
                      event: "Early Bird Registration Period",
                      status: "upcoming",
                    },
                    {
                      date: "February 15, 2025",
                      event: "Regular Registration Deadline",
                      status: "upcoming",
                    },
                    {
                      date: "February 28, 2025",
                      event: "Document Submission Deadline",
                      status: "upcoming",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="mt-0.5">
                        {item.status === "completed" ? (
                          <CheckCircle className="h-5 w-5 text-emerald-500" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-yellow-500" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-emerald-100">
                          {item.event}
                        </p>
                        <p className="text-sm text-emerald-100/70">
                          {item.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Registration Fees */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-emerald-100">
                  Registration Fees
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2 p-4 rounded-lg bg-emerald-900/20">
                    <h4 className="font-medium text-emerald-100">
                      Early Bird Rate
                    </h4>
                    <p className="text-2xl font-bold text-emerald-400">$200</p>
                    <p className="text-sm text-emerald-100/70">
                      Per participant until February 1, 2025
                    </p>
                  </div>
                  <div className="space-y-2 p-4 rounded-lg bg-emerald-900/20">
                    <h4 className="font-medium text-emerald-100">
                      Regular Rate
                    </h4>
                    <p className="text-2xl font-bold text-emerald-400">$250</p>
                    <p className="text-sm text-emerald-100/70">
                      Per participant until February 15, 2025
                    </p>
                  </div>
                </div>
                <p className="text-sm text-emerald-100/70">
                  * Fee waivers available for eligible countries. Contact the
                  organizing committee for details.
                </p>
              </div>

              {/* Registration Steps */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-emerald-100">
                  Registration Steps
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      step: "1. National Selection",
                      description:
                        "Countries must complete their national selection process and identify their team members.",
                    },
                    {
                      step: "2. Online Registration",
                      description:
                        "Complete the online registration form with team and participant information.",
                    },
                    {
                      step: "3. Document Submission",
                      description:
                        "Submit all required documents through the online portal.",
                    },
                    {
                      step: "4. Fee Payment",
                      description:
                        "Process registration fee payment through the secure payment system.",
                    },
                    {
                      step: "5. Confirmation",
                      description:
                        "Receive confirmation email and access to the participant portal.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-emerald-900/20"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-emerald-950 font-medium">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium text-emerald-100">
                          {item.step}
                        </h4>
                        <p className="text-sm text-emerald-100/70 mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Competition Rules */}
        <div id="rules" className="mx-auto max-w-5xl mb-16 scroll-mt-16">
          <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-emerald-400" />
                <CardTitle className="text-2xl text-emerald-100">
                  Competition Rules
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Team Composition */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-emerald-100">
                  Team Composition
                </h3>
                <ul className="space-y-3">
                  {[
                    "4 student participants",
                    "1 head mentor (team leader)",
                    "1 additional mentor (optional)",
                    "Students must compete in their respective age divisions",
                  ].map((rule, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="text-emerald-100/80">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Language Requirements */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-emerald-100">
                  Language Requirements
                </h3>
                <ul className="space-y-3">
                  {[
                    "Official competition language is English",
                    "All examinations will be provided in English",
                    "Mentors must be proficient in English for effective communication",
                    "Translation support available for specific circumstances",
                  ].map((rule, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Globe className="h-5 w-5 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="text-emerald-100/80">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Code of Conduct */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-emerald-100">
                  Code of Conduct
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-3">
                    <h4 className="font-medium text-emerald-100">
                      Academic Integrity
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "No external resources during examinations",
                        "Independent work on all tasks",
                        "No communication during competition rounds",
                        "Strict adherence to examination rules",
                      ].map((rule, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-2"></div>
                          <span className="text-sm text-emerald-100/70">
                            {rule}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium text-emerald-100">
                      Behavioral Standards
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Respect for all participants and staff",
                        "Punctual attendance at all events",
                        "Proper laboratory safety compliance",
                        "Cultural sensitivity and inclusivity",
                      ].map((rule, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-2"></div>
                          <span className="text-sm text-emerald-100/70">
                            {rule}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Required Documents */}
        <div id="documents" className="mx-auto max-w-5xl mb-16 scroll-mt-16">
          <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur">
            <CardHeader>
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-emerald-400" />
                <CardTitle className="text-2xl text-emerald-100">
                  Required Documents
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: "For Students",
                    items: [
                      "Valid passport copy",
                      "Recent photograph",
                      "School enrollment verification",
                      "Parent/guardian consent form",
                      "Medical information form",
                      "Travel insurance confirmation",
                    ],
                  },
                  {
                    title: "For Team Leaders",
                    items: [
                      "Valid passport copy",
                      "Recent photograph",
                      "Professional credentials",
                      "Institution endorsement letter",
                      "Emergency contact information",
                      "Code of conduct agreement",
                    ],
                  },
                ].map((section, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-lg font-medium text-emerald-100">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <FileText className="h-5 w-5 text-emerald-400 mt-0.5 shrink-0" />
                          <span className="text-emerald-100/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-emerald-500 text-white hover:bg-emerald-600">
                  <Download className="mr-2 h-4 w-4" />
                  Download Document Templates
                </Button>
                <Button
                  variant="outline"
                  className="border-emerald-400/50 text-emerald-100 hover:bg-emerald-950/50 hover:text-emerald-50"
                >
                  Document Submission Guidelines
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mx-auto max-w-3xl mt-16 text-center">
          <p className="text-emerald-100/80 mb-6">
            Ready to participate in ARBIChO 2025?
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button className="bg-emerald-500 text-white hover:bg-emerald-600">
              Start Registration Process
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="border-emerald-400/50 text-emerald-100 hover:bg-emerald-950/50 hover:text-emerald-50"
              asChild
            >
              <Link href="/contact">Contact Organizing Committee</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
