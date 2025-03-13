import { CommitteeLayout, type CommitteeMember } from "@/components/committee-layout"

const organizingMembers: CommitteeMember[] = [
  {
    name: "To'raboy Shermatov",
    role: "Chairman of The Organizing Committee",
    institution: "Science Olympiad Center",
    country: "Uzbekistan",
    bio: "Director of Science Olympiad Center and Chairman of The Organizing Committee",
    email: "s.chen@arbicho.com",
    linkedin: "https://linkedin.com/in/example",
    image: "/images/organizing/turaboy.jpg",
  },
  {
    name: "Sevara Shakirova",
    role: "Committee member",
    institution: "The Agency of Specialized Educational Institution",
    country: "Uzbekistan",
    bio: "Vice Diector of The Agency of Specialized Educational Institutions and Committee member",
    email: "m.rahman@arbicho.com",
    linkedin: "https://linkedin.com/in/example",
    image: "/images/organizing/sevara.jpg",
  },
  {
    name: "Akromxo‘ja Umarxodjayev",
    role: "Committee member",
    institution: "Chemistry Research Center",
    country: "Uzbekistan",
    bio: "Head of The event organization Department",
    email: "e.petrova@arbicho.com",
    linkedin: "https://linkedin.com/in/example",
    image: "/images/organizing/akrom.jpg",
  },
  {
    name: "Jo‘rabek Jangirov",
    role: "Committee member",
    institution: "The Web & Social Networks and Content Department",
    country: "Uzbekistan",
    bio: "Head of The Web & Social Networks and Content Department",
    email: "j.wilson@arbicho.com",
    linkedin: "https://linkedin.com/in/example",
    image: "/images/organizing/jurabek.jpg",
  },
  {
    name: "Xujamov Inom",
    role: "Committee member",
    institution: "International Events Bureau",
    country: "Uzbekistan",
    bio: "Head of IT and technical Department.",
    email: "a.karim@arbicho.com",
    linkedin: "https://linkedin.com/in/example",
    image: "/images/organizing/inom.jpg",
  },
  {
    name: "Usmonov Oybek",
    role: "Committee member",
    institution: "Science Communications Institute",
    country: "Uzbekistan",
    bio: "Head of The transport and logistics Department",
    email: "d.park@arbicho.com",
    linkedin: "https://linkedin.com/in/example",
    image: "/images/organizing/oybek.jpg",
  },
  {
    name: "Davron Tuxtayev",
    role: "Committee member",
    institution: "Science Olympiad Center",
    country: "Uzbekistan",
    bio: "Exam preparation and supporting track",
    email: "d.park@arbicho.com",
    linkedin: "https://linkedin.com/in/example",
    image: "/images/organizing/davron.jpg",
  },
  {
    name: "Murotjon Islamov",
    role: "Committee member",
    institution: "Science Olympiad Center",
    country: "Uzbekistan",
    bio: "Head of The Events and public relations track",
    email: "d.park@arbicho.com",
    linkedin: "https://linkedin.com/in/example",
    image: "/images/organizing/murot.jpg",
  },
  {
    name: "Tamanno To‘rayeva",
    role: "Committee member",
    institution: "Science Olympiad Center",
    country: "Uzbekistan",
    bio: "Media track",
    email: "d.park@arbicho.com",
    linkedin: "https://linkedin.com/in/example",
    image: "/images/organizing/tamanno.jpg",
  },
  {
    name: "Otabek Karimov",
    role: "Committee member",
    institution: "Science Olympiad Center",
    country: "Uzbekistan",
    bio: "Technology and technical support track",
    email: "d.park@arbicho.com",
    linkedin: "https://linkedin.com/in/example",
    image: "/images/organizing/otabek.jpg",
  },
  {
    name: "Dadaxanov Oqiljon",
    role: "Committee member",
    institution: "Science Olympiad Center",
    country: "Uzbekistan",
    bio: "Software engineer",
    email: "d.park@arbicho.com",
    linkedin: "https://linkedin.com/in/example",
    image: "/images/organizing/oqiljon.jpg",
  },
  {
    name: "Ruxsora Toirova",
    role: "Committee member",
    institution: "Science Olympiad Center",
    country: "Uzbekistan",
    bio: "Lead Specialist",
    email: "oqiljondadaxanov@gmail.com",
    linkedin: "https://linkedin.com/in/example",
    image: "/images/organizing/ruxsora.jpg",
  },
]

export default function OrganizingCommitteePage() {
  return (
    <CommitteeLayout
      title="Organizing Committee"
      description="Meet The dedicated team behind ARBIChO 2025, working tirelessly to create an exceptional competition experience for young chemists worldwide."
      members={organizingMembers}
      type="organizing"
    />
  )
}

