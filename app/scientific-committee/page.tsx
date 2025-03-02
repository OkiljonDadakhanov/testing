import { CommitteeLayout, type CommitteeMember } from "@/components/committee-layout"

const scientificMembers: CommitteeMember[] = [
  {
    name: "Prof. Alexander Ivanov",
    role: "Scientific Chair",
    institution: "Academy of Sciences",
    country: "Uzbekistan",
    bio: "Professor Ivanov is a renowned chemist with expertise in organic synthesis and has led multiple international research projects.",
    email: "a.ivanov@arbicho.com",
    linkedin: "https://linkedin.com/in/example",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Dr. Maria Rodriguez",
    role: "Problem Committee Head",
    institution: "International Chemistry Institute",
    country: "Spain",
    bio: "Dr. Rodriguez specializes in physical chemistry and leads the team developing competition problems.",
    email: "m.rodriguez@arbicho.com",
    linkedin: "https://linkedin.com/in/example",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Prof. Yuki Tanaka",
    role: "Laboratory Coordinator",
    institution: "Advanced Research University",
    country: "Japan",
    bio: "Professor Tanaka oversees the practical laboratory components and safety protocols for the competition.",
    email: "y.tanaka@arbicho.com",
    linkedin: "https://linkedin.com/in/example",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Dr. Ahmed Hassan",
    role: "Theoretical Chemistry Expert",
    institution: "Center for Molecular Studies",
    country: "Egypt",
    bio: "Dr. Hassan contributes expertise in quantum chemistry and develops advanced theoretical problems.",
    email: "a.hassan@arbicho.com",
    linkedin: "https://linkedin.com/in/example",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Prof. Lisa Schmidt",
    role: "Analytical Chemistry Advisor",
    institution: "Technical University",
    country: "Germany",
    bio: "Professor Schmidt specializes in analytical methods and instrumentation for chemical analysis.",
    email: "l.schmidt@arbicho.com",
    linkedin: "https://linkedin.com/in/example",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Dr. Wei Zhang",
    role: "Research Innovation Lead",
    institution: "Chemical Engineering Institute",
    country: "China",
    bio: "Dr. Zhang focuses on incorporating cutting-edge research topics into competition challenges.",
    email: "w.zhang@arbicho.com",
    linkedin: "https://linkedin.com/in/example",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function ScientificCommitteePage() {
  return (
    <CommitteeLayout
      title="Scientific Committee"
      description="Our distinguished Scientific Committee comprises leading chemists and educators who ensure the academic excellence and innovation of ARBIChO 2025."
      members={scientificMembers}
      type="scientific"
    />
  )
}

