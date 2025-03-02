import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, GraduationCap, Award } from "lucide-react"
import Image from "next/image"

const sponsorTiers = [
  {
    name: "Platinum Sponsors",
    icon: <Award className="h-5 w-5 text-emerald-400" />,
    sponsors: [
      { name: "ChemCorp International", logo: "/placeholder.svg?height=80&width=200" },
      { name: "Global Scientific Solutions", logo: "/placeholder.svg?height=80&width=200" },
      { name: "TechLabs Worldwide", logo: "/placeholder.svg?height=80&width=200" },
      { name: "some rich organization to ad itself", logo: "/placeholder.svg?height=80&width=200" },
    ],
  },
  {
    name: "Gold Sponsors",
    icon: <Building2 className="h-5 w-5 text-emerald-400" />,
    sponsors: [
      { name: "Chemistry Innovation Labs", logo: "/placeholder.svg?height=60&width=150" },
      { name: "Research Dynamics", logo: "/placeholder.svg?height=60&width=150" },
      { name: "Scientific Equipment Co", logo: "/placeholder.svg?height=60&width=150" },
      { name: "Laboratory Systems", logo: "/placeholder.svg?height=60&width=150" },
    ],
  },
]

const academicPartners = [
  {
    name: "Tashkent State University",
    logo: "/placeholder.svg?height=100&width=100",
    description: "Leading research institution in Uzbekistan",
  },
  {
    name: "Institute of Chemistry",
    logo: "/placeholder.svg?height=100&width=100",
    description: "Premier chemistry research center",
  },
  {
    name: "National Science Academy",
    logo: "/placeholder.svg?height=100&width=100",
    description: "Supporting excellence in science",
  },
  {
    name: "International Research Center",
    logo: "/placeholder.svg?height=100&width=100",
    description: "Global scientific collaboration hub",
  },
]

export function SponsorsSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#023430] to-[#012e40] py-20" id="sponsors">
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
            Our Supporters
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Sponsors & Partners</h2>
          <p className="text-emerald-100/80">
            We are proud to collaborate with leading organizations and institutions that share our commitment to
            advancing chemistry education.
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="space-y-16">
          {sponsorTiers.map((tier) => (
            <div key={tier.name} className="space-y-8">
              <div className="flex items-center justify-center gap-2">
                {tier.icon}
                <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center">
                {tier.sponsors.map((sponsor) => (
                  <Card
                    key={sponsor.name}
                    className="group relative border-emerald-800/20 bg-emerald-900/10 backdrop-blur overflow-hidden"
                  >
                    <CardContent className="p-6">
                      <div className="relative h-20 w-full">
                        <Image
                          src={sponsor.logo || "/placeholder.svg"}
                          alt={sponsor.name}
                          fill
                          className="object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </CardContent>
                    <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-emerald-500/10 group-hover:ring-emerald-500/20 transition-all duration-300" />
                  </Card>
                ))}
              </div>
            </div>
          ))}

          {/* Academic Partners */}
          <div className="space-y-8 pt-8">
            <div className="flex items-center justify-center gap-2">
              <GraduationCap className="h-5 w-5 text-emerald-400" />
              <h3 className="text-xl font-semibold text-white">Academic Partners</h3>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {academicPartners.map((partner) => (
                <Card
                  key={partner.name}
                  className="group relative border-emerald-800/20 bg-emerald-900/10 backdrop-blur"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="relative mx-auto h-24 w-24">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        fill
                        className="object-contain rounded-full transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="font-medium text-emerald-100">{partner.name}</h4>
                      <p className="mt-1 text-sm text-emerald-100/70">{partner.description}</p>
                    </div>
                  </CardContent>
                  <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-emerald-500/10 group-hover:ring-emerald-500/20 transition-all duration-300" />
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Supporting Text */}
        <div className="mt-20 text-center">
          <p className="text-emerald-100/80">
            Interested in becoming a sponsor? Contact us to learn more about partnership opportunities.
          </p>
        </div>
      </div>
    </section>
  )
}

