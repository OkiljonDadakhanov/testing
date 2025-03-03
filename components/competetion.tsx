import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,

  ClipboardCheck,
} from "lucide-react";

export function CompetitionSection() {
  return (
    <section
      className="relative w-full bg-gradient-to-b from-[#011c2c] to-emerald-950/90 py-20"
      id="competition"
    >
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
            Competition  Rounds
          </h2>
          <p className="text-emerald-100/80">
            A comprehensive international chemistry competition designed to
            challenge and inspire young minds across different levels.
          </p>
        </div>

        {/* Age Categories */}
       

        {/* Competition Rounds */}
        <div className="mb-16">
          <h3 className="mb-8 text-2xl font-semibold text-white">
            Competition Rounds
          </h3>
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
                      <CardTitle className="text-emerald-100">
                        Practical Examination
                      </CardTitle>
                      <CardDescription className="text-emerald-100/70">
                      Participants will receive a set of experimental tasks to complete.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc space-y-2 pl-4 text-emerald-100/80">
                        <li>	Format: Participants will perform a laboratory experiment.</li>
                        <li>Scoring: The maximum score for this round is 30 points.</li>
                        <li>Duration: 1.5 hours (90 minutes).</li>
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
                      <CardTitle className="text-emerald-100">
                      Theoretical Examination
                      </CardTitle>
                      <CardDescription className="text-emerald-100/70">
                        Students are provided with all necessary assets(scientific calculator, periodic table, pen, paper).
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc space-y-2 pl-4 text-emerald-100/80">
                        <li>	Format: Participants will solve 8 written problems covering various areas of chemistry.</li>
                        <li>Scoring: Each problem is worth 10 points, making the total 80 points.</li>
                        <li>	Duration: 4 hours (240 minutes).</li>
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
  <h3 className="mb-8 text-2xl font-semibold text-white">
    Scoring System
  </h3>
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
          <h4 className="font-medium text-emerald-100">
            Round 1: Practical Examination
          </h4>
          <ul className="list-disc space-y-1 pl-4 text-sm text-emerald-100/80">
            <li>Participants perform a laboratory experiment.</li>
            <li>Maximum score: 30 points.</li>
            <li>Duration: 1.5 hours (90 minutes).</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium text-emerald-100">
            Round 2: Theoretical Examination
          </h4>
          <ul className="list-disc space-y-1 pl-4 text-sm text-emerald-100/80">
            <li>Participants complete 8 written tasks.</li>
            <li>Each task is worth up to 10 points (total: 80 points).</li>
            <li>Duration: 4 hours (240 minutes).</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium text-emerald-100">
            Overall Scoring
          </h4>
          <ul className="list-disc space-y-1 pl-4 text-sm text-emerald-100/80">
            <li>Total maximum score: 110 points.</li>
            <li>Round 1 contributes 30 points.</li>
            <li>Round 2 contributes 80 points.</li>
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
  );
}
