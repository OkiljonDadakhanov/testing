import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
} from "lucide-react";

const contacts = [
  {
    name: "Murodbek Islamov",
    role: "Contact person",
    email: "info@olympcenter.uz",
    phone: "+998 77 550 33 66",
  },
  

];

const socialLinks = [
  {
    name: "Facebook",
    icon: <Facebook className="h-5 w-5" />,
    href: "https://facebook.com/arbicho",
    color: "hover:text-blue-500",
  },
  {
    name: "Twitter",
    icon: <Twitter className="h-5 w-5" />,
    href: "https://twitter.com/arbicho",
    color: "hover:text-blue-400",
  },
  {
    name: "Instagram",
    icon: <Instagram className="h-5 w-5" />,
    href: "https://instagram.com/arbicho",
    color: "hover:text-pink-500",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://linkedin.com/company/arbicho",
    color: "hover:text-blue-600",
  },
  {
    name: "YouTube",
    icon: <Youtube className="h-5 w-5" />,
    href: "https://youtube.com/arbicho",
    color: "hover:text-red-500",
  },
];

const offices = [
  {
    city: "Tashkent",
    country: "Uzbekistan",
    address: "100099, Otchopar-1, Darvozakent Street, House 60, Yunusobod District",
    phone: "+998 77 550 33 66",
    timezone: "GMT+5",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
  },
 
];

export default function ContactPage() {
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
            Get in Touch
          </Badge>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-6 text-lg leading-8 text-emerald-100/80">
            Have questions about ARBIChO? Our team is here to help you.
          </p>
        </div>

        <div className="mx-auto max-w-5xl grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-emerald-100">
                Contact Person
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contacts.map((contact) => (
                <div key={contact.email} className="space-y-2">
                  <h3 className="text-lg font-medium text-emerald-100">
                    {contact.name}
                  </h3>
                  <p className="text-sm text-emerald-100/70">{contact.role}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-emerald-100/70">
                      <Mail className="h-4 w-4 text-emerald-400" />
                      <a
                        href={`mailto:${contact.email}`}
                        className="hover:text-emerald-300"
                      >
                        {contact.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-100/70">
                      <Phone className="h-4 w-4 text-emerald-400" />
                      <a
                        href={`tel:${contact.phone}`}
                        className="hover:text-emerald-300"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Office Locations */}
          <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-emerald-100">Our Office</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {offices.map((office) => (
                <div key={office.city} className="space-y-3">
                  <div className="flex items-center gap-2 text-emerald-100">
                    <Globe className="h-5 w-5 text-emerald-400" />
                    <h3 className="font-medium">
                      {office.city}, {office.country}
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm text-emerald-100/70">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-emerald-400 mt-1" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-emerald-400" />
                      <a
                        href={`tel:${office.phone}`}
                        className="hover:text-emerald-300"
                      >
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-emerald-400" />
                      <span>
                        {office.timezone} • {office.hours}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Social Media Links */}
        <div className="mx-auto max-w-5xl mt-8">
          <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-emerald-100">
                Connect With Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-full bg-emerald-900/40 text-emerald-100/70 transition-all hover:scale-110 ${social.color}`}
                  >
                    {social.icon}
                    <span className="sr-only">{social.name}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
