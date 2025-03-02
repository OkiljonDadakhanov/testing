import { CommitteeLayout, type CommitteeMember } from "@/components/committee-layout"

const organizingMembers: CommitteeMember[] = [
  {
    name: "Dr. Sarah Chen",
    role: "Committee Chair",
    institution: "National University of Chemistry",
    country: "Uzbekistan",
    bio: "Dr. Chen has over 15 years of experience organizing international scientific competitions and leads the ARBIChO organizing committee.",
    email: "s.chen@arbicho.com",
    linkedin: "https://linkedin.com/in/example",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Prof. Michael Rahman",
    role: "Vice Chair",
    institution: "Institute of Chemical Sciences",
    country: "Uzbekistan",
    bio: "Professor Rahman specializes in competition design and international educational program development.",
    email: "m.rahman@arbicho.com",
    linkedin: "https://linkedin.com/in/example",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Dr. Elena Petrova",
    role: "Operations Director",
    institution: "Chemistry Research Center",
    country: "Uzbekistan",
    bio: "Dr. Petrova oversees the logistical operations and coordinates with international partners for ARBIChO events.",
    email: "e.petrova@arbicho.com",
    linkedin: "https://linkedin.com/in/example",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Dr. James Wilson",
    role: "Registration Coordinator",
    institution: "Global Science Foundation",
    country: "United Kingdom",
    bio: "Dr. Wilson manages the participant registration process and coordinates with participating institutions worldwide.",
    email: "j.wilson@arbicho.com",
    linkedin: "https://linkedin.com/in/example",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Ms. Aisha Karim",
    role: "Event Manager",
    institution: "International Events Bureau",
    country: "Uzbekistan",
    bio: "Ms. Karim handles event planning and coordination for all ARBIChO activities and ceremonies.",
    email: "a.karim@arbicho.com",
    linkedin: "https://linkedin.com/in/example",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Mr. David Park",
    role: "Communications Director",
    institution: "Science Communications Institute",
    country: "South Korea",
    bio: "Mr. Park leads the communications team and manages public relations for ARBIChO.",
    email: "d.park@arbicho.com",
    linkedin: "https://linkedin.com/in/example",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function OrganizingCommitteePage() {
  return (
    <CommitteeLayout
      title="Organizing Committee"
      description="Meet the dedicated team behind ARBIChO 2025, working tirelessly to create an exceptional competition experience for young chemists worldwide."
      members={organizingMembers}
      type="organizing"
    />
  )
}

