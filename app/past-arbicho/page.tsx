import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Trophy,
  Users,
  MapPin,
  Calendar,
  ArrowRight,
  Medal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import pic from '@/public/images/buxoro.jpg'

// Past competition data
const pastCompetitions = [
  {
    year: "ARBIChO 2023",
    location: "Khiva, Uzbekistan",
    dates: "June 11 to June 17, 2023",
    participants: "112 students from 16 countries",
    highlights: [
      "Record number of participating countries",
      "First hybrid format with both in-person and virtual components",
      "Special symposium on sustainable chemistry",
    ],
    topCountries: [
      { name: "Uzbekistan ", gold: 3, silver: 4, bronze: 1, total: 8 },
      { name: "Vietnam ", gold: 4, silver: 4, bronze: 0, total: 8 },
      { name: "Belarus ", gold: 0, silver: 3, bronze: 3, total: 6 },
      { name: "Kazakhstan ", gold: 0, silver: 3, bronze: 5, total: 8 },
      { name: "Brazil  ", gold: 0, silver: 0, bronze: 3, total: 3 },
      { name: "Tajikistan   ", gold: 0, silver: 0, bronze: 1, total: 1 },
      { name: "Turkmenistan    ", gold: 0, silver: 0, bronze: 6, total: 0 },
      { name: "Azerbaijan     ", gold: 0, silver: 0, bronze: 4, total: 4 },
      { name: "Russia ", gold: 1, silver: 2, bronze: 3, total: 6 },



    ],
    featuredImage: "/placeholder.svg?height=400&width=800",
  },
  

];

// Statistics
const statistics = [
  {
    label: "Total Competitions",
    value: "1",
    icon: <Trophy className="h-5 w-5 text-emerald-400" />,
  },
  {
    label: "Countries Participated",
    value: "16 ",
    icon: <MapPin className="h-5 w-5 text-emerald-400" />,
  },
  {
    label: "Total Participants",
    value: "112",
    icon: <Users className="h-5 w-5 text-emerald-400" />,
  },
  {
    label: "Gold Medals Awarded",
    value: "8",
    icon: <Medal className="h-5 w-5 text-emerald-400" />,
  },
];

export default function PastARBIChOPage() {
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
            Competition History
          </Badge>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Past ARBIChO Competitions
          </h1>
          <p className="mt-6 text-lg leading-8 text-emerald-100/80">
            Explore the rich history of the Abu Rayhan Biruni International
            Chemistry Olympiad and its impact on young scientists worldwide
          </p>
        </div>

        {/* Statistics */}
        <div className="mx-auto max-w-5xl mb-16">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {statistics.map((stat, index) => (
              <Card
                key={index}
                className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-2">
                    {stat.icon}
                    <p className="text-3xl font-bold text-emerald-100">
                      {stat.value}
                    </p>
                    <p className="text-sm text-emerald-100/70">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Competitions Tabs */}
        <div className="mx-auto max-w-5xl mb-16">
          <Tabs defaultValue={pastCompetitions[0].year} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-emerald-900/30 border border-emerald-800/20">
                {pastCompetitions.map((comp) => (
                  <TabsTrigger
                    key={comp.year}
                    value={comp.year}
                    className="data-[state=active]:bg-emerald-500 data-[state=active]:text-emerald-950"
                  >
                    {comp.year}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {pastCompetitions.map((competition) => (
              <TabsContent
                key={competition.year}
                value={competition.year}
                className="space-y-8"
              >
                {/* Competition Overview */}
                <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur overflow-hidden">
                  <div className="relative h-[300px] w-full">
                    <Image
                      src={competition.featuredImage || "/placeholder.svg"}
                      alt={`ARBIChO ${competition.year}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-3xl font-bold text-white">
                        ARBIChO {competition.year}
                      </h2>
                      <p className="text-emerald-100/90">
                        {competition.location}
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-emerald-400" />
                          <p className="text-emerald-100">
                            {competition.dates}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-emerald-400" />
                          <p className="text-emerald-100">
                            {competition.participants}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium text-emerald-100">
                          Highlights
                        </h3>
                        <ul className="space-y-1">
                          {competition.highlights.map((highlight, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-2 text-emerald-100/80"
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Medal Table */}
                {competition.topCountries.length > 0 && (
                  <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur">
                    <CardHeader>
                      <CardTitle className="text-emerald-100">
                        Top Performing Countries
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-emerald-800/20">
                              <th className="text-left py-3 px-4 text-emerald-100">
                                Rank
                              </th>
                              <th className="text-left py-3 px-4 text-emerald-100">
                                Country
                              </th>
                              <th className="text-center py-3 px-4 text-yellow-500">
                                Gold
                              </th>
                              <th className="text-center py-3 px-4 text-gray-400">
                                Silver
                              </th>
                              <th className="text-center py-3 px-4 text-amber-700">
                                Bronze
                              </th>
                              <th className="text-center py-3 px-4 text-emerald-100">
                                Total
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {competition.topCountries.map((country, index) => (
                              <tr
                                key={index}
                                className="border-b border-emerald-800/10"
                              >
                                <td className="py-3 px-4 text-emerald-100">
                                  {index + 1}
                                </td>
                                <td className="py-3 px-4 text-emerald-100">
                                  {country.name}
                                </td>
                                <td className="py-3 px-4 text-center text-emerald-100/80">
                                  {country.gold}
                                </td>
                                <td className="py-3 px-4 text-center text-emerald-100/80">
                                  {country.silver}
                                </td>
                                <td className="py-3 px-4 text-center text-emerald-100/80">
                                  {country.bronze}
                                </td>
                                <td className="py-3 px-4 text-center font-medium text-emerald-100">
                                  {country.total}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Gallery Preview */}
                {competition.year !== "2020" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white">
                        Photo Gallery
                      </h3>
                      <Link
                        href="/gallery"
                        className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                      >
                        <span>View all photos</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                      {[1, 2, 3, 4].map((item) => (
                        <div
                          key={item}
                          className="relative aspect-square overflow-hidden rounded-lg"
                        >
                          <Image
                            src={pic}
                            alt={`ARBIChO ${competition.year} Photo ${item}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>

       
        {/* CTA Section */}
        <div className="mx-auto max-w-3xl mt-16 text-center">
          <p className="text-emerald-100/80 mb-6">
            Interested in learning more about upcoming ARBIChO competitions?
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button
              className="bg-emerald-500 text-white hover:bg-emerald-600"
              asChild
            >
              <Link href="/future-arbicho">
                Explore Future ARBIChO
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-emerald-400/50 text-emerald-100 hover:bg-emerald-950/50 hover:text-emerald-50"
              asChild
            >
              <Link href="/gallery">View Photo Gallery</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
