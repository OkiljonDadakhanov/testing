import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Trophy, Users, GraduationCap, ClipboardCheck } from "lucide-react"

export function CompetitionSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#011c2c] to-emerald-950/90 py-20" id="competition">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 -translate-x-1/2 translate-y-1/2 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-emerald-500/20 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
          >
            Competition Structure
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Competition Categories & Rounds
          </h2>
          <p className="text-emerald-100/80">
            A comprehensive international chemistry competition designed to challenge and inspire young minds across
            different levels.
          </p>
        </div>

        {/* Age Categories */}
        <div className="mb-16">
          <h3 className="mb-8 text-2xl font-semibold text-white">Age Categories</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-100">
                  <Users className="h-5 w-5 text-emerald-400" />
                  Junior Division
                </CardTitle>
                <CardDescription className="text-emerald-100/70">Ages 14-15</CardDescription>
              </CardHeader>
              <CardContent className="text-emerald-100/80">
                Perfect for young chemistry enthusiasts starting their scientific journey.
              </CardContent>
            </Card>
            <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-100">
                  <GraduationCap className="h-5 w-5 text-emerald-400" />
                  Senior Division
                </CardTitle>
                <CardDescription className="text-emerald-100/70">Ages 16-17</CardDescription>
              </CardHeader>
              <CardContent className="text-emerald-100/80">
                For advanced students ready to tackle complex chemical concepts.
              </CardContent>
            </Card>
            <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-100">
                  <Trophy className="h-5 w-5 text-emerald-400" />
                  Advanced Division
                </CardTitle>
                <CardDescription className="text-emerald-100/70">Ages 18-19</CardDescription>
              </CardHeader>
              <CardContent className="text-emerald-100/80">
                Designed for exceptional students pursuing chemistry excellence.
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Competition Rounds */}
        <div className="mb-16">
          <h3 className="mb-8 text-2xl font-semibold text-white">Competition Rounds</h3>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-emerald-800/20 md:left-1/2" />
            <div className="space-y-8">
              <div className="relative">
                <div className="flex items-center md:justify-center">
                  <div className="absolute left-8 w-px h-full bg-emerald-800/20 md:left-1/2" />
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-500 bg-emerald-950 text-emerald-400">
                    1
                  </div>
                </div>
                <div className="ml-16 md:ml-0 md:mr-[50%] md:pr-8">
                  <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur">
                    <CardHeader>
                      <CardTitle className="text-emerald-100">Local Round</CardTitle>
                      <CardDescription className="text-emerald-100/70">School/Regional Level</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc space-y-2 pl-4 text-emerald-100/80">
                        <li>Written examination (2 hours)</li>
                        <li>Multiple choice and short answer questions</li>
                        <li>Focus on fundamental chemistry concepts</li>
                        <li>Top 30% proceed to national round</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center md:justify-center">
                  <div className="absolute left-8 w-px h-full bg-emerald-800/20 md:left-1/2" />
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-500 bg-emerald-950 text-emerald-400">
                    2
                  </div>
                </div>
                <div className="ml-16 md:ml-[50%] md:pl-8">
                  <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur">
                    <CardHeader>
                      <CardTitle className="text-emerald-100">National Round</CardTitle>
                      <CardDescription className="text-emerald-100/70">Country Level</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc space-y-2 pl-4 text-emerald-100/80">
                        <li>Theoretical exam (3 hours)</li>
                        <li>Practical laboratory test (2 hours)</li>
                        <li>Advanced problem-solving questions</li>
                        <li>Top 10 students qualify for international round</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center md:justify-center">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-500 bg-emerald-950 text-emerald-400">
                    3
                  </div>
                </div>
                <div className="ml-16 md:ml-0 md:mr-[50%] md:pr-8">
                  <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur">
                    <CardHeader>
                      <CardTitle className="text-emerald-100">International Final</CardTitle>
                      <CardDescription className="text-emerald-100/70">Global Championship</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc space-y-2 pl-4 text-emerald-100/80">
                        <li>Comprehensive theoretical examination (4 hours)</li>
                        <li>Advanced laboratory practical (3 hours)</li>
                        <li>Research presentation</li>
                        <li>International collaboration project</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scoring System */}
        <div id="scoring">
          <h3 className="mb-8 text-2xl font-semibold text-white">Scoring System</h3>
          <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-emerald-100">
                <ClipboardCheck className="h-5 w-5 text-emerald-400" />
                Evaluation Criteria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-2">
                  <h4 className="font-medium text-emerald-100">Theoretical Knowledge</h4>
                  <ul className="list-disc space-y-1 pl-4 text-sm text-emerald-100/80">
                    <li>Multiple choice (30%)</li>
                    <li>Short answer (30%)</li>
                    <li>Problem solving (40%)</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-emerald-100">Practical Skills</h4>
                  <ul className="list-disc space-y-1 pl-4 text-sm text-emerald-100/80">
                    <li>Laboratory technique (40%)</li>
                    <li>Data analysis (30%)</li>
                    <li>Safety compliance (30%)</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-emerald-100">Research & Innovation</h4>
                  <ul className="list-disc space-y-1 pl-4 text-sm text-emerald-100/80">
                    <li>Project presentation (40%)</li>
                    <li>Methodology (30%)</li>
                    <li>Innovation (30%)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-emerald-500 text-white hover:bg-emerald-600">
            Download Detailed Guidelines
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

