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
                    "The official languages of the Olympiad are Uzbek and English. Participants may complete the exam in their native language.",
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
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mx-auto max-w-3xl mt-16 text-center">
          <p className="text-emerald-100/80 mb-6">
            Ready to participate in ARBIChO 2025?
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
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
