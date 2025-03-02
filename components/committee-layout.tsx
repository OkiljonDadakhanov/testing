import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Mail, LinkedinIcon } from "lucide-react"
import Link from "next/link"

export interface CommitteeMember {
  name: string
  role: string
  institution: string
  country: string
  bio: string
  image?: string
  email?: string
  linkedin?: string
}

interface CommitteeLayoutProps {
  title: string
  description: string
  members: CommitteeMember[]
  type: "organizing" | "scientific"
}

export function CommitteeLayout({ title, description, members, type }: CommitteeLayoutProps) {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#011c2c] to-[#012e40] py-20">
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
            {type === "organizing" ? "Organization" : "Scientific Committee"}
          </Badge>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h1>
          <p className="text-emerald-100/80">{description}</p>
        </div>

        {/* Committee Members Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <Card
              key={index}
              className="group relative border-emerald-800/20 bg-emerald-900/10 backdrop-blur overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar className="h-16 w-16 border-2 border-emerald-500/20">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="bg-emerald-950 text-emerald-100">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h3 className="font-medium text-lg text-emerald-100">{member.name}</h3>
                  <p className="text-sm text-emerald-100/70">{member.role}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-emerald-100/70">{member.institution}</p>
                  <p className="text-sm text-emerald-100/70">{member.country}</p>
                </div>
                <p className="text-sm text-emerald-100/80">{member.bio}</p>
                <div className="flex gap-2 pt-2">
                  {member.email && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-emerald-800/20 bg-emerald-900/20 text-emerald-100 hover:bg-emerald-800/20"
                      asChild
                    >
                      <Link href={`mailto:${member.email}`}>
                        <Mail className="mr-2 h-4 w-4" />
                        Email
                      </Link>
                    </Button>
                  )}
                  {member.linkedin && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-emerald-800/20 bg-emerald-900/20 text-emerald-100 hover:bg-emerald-800/20"
                      asChild
                    >
                      <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <LinkedinIcon className="mr-2 h-4 w-4" />
                        LinkedIn
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-emerald-500/10 group-hover:ring-emerald-500/20 transition-all duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

