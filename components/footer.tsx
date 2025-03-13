import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="relative w-full bg-[#011c2c] border-t border-emerald-800/20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-24">
          {/* Column 1: Logo & Description */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo/logowhite.png"
                width={150}
                height={150}
                alt="logo of ARBIChO"
              />
            </Link>
            <p className="max-w-xs text-sm leading-6 text-emerald-100/80">
              An international chemistry competition celebrating the legacy of
              Abu Rayhan Beruni, fostering scientific excellence worldwide.
            </p>
            <div className="flex space-x-5">
              <Link
                href="#"
                className="text-emerald-400 hover:text-emerald-300"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-emerald-400 hover:text-emerald-300"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-emerald-400 hover:text-emerald-300"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-emerald-400 hover:text-emerald-300"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-emerald-100">
              Quick Links
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About ARBIChO", href: "/about" },
                { name: "Competition Details", href: "#competition" },
                { name: "FAQs", href: "#faq" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-emerald-100/70 hover:text-emerald-100"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-emerald-100">
              Contact Information
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              <li className="flex gap-2">
                <Mail className="h-5 w-5 text-emerald-400" />
                <Link
                  href="mailto:info@arbicho.com"
                  className="text-sm leading-6 text-emerald-100/70 hover:text-emerald-100"
                >
                  arbicho@olympcenter.uz
                </Link>
              </li>
              <li className="flex gap-2">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span className="text-sm leading-6 text-emerald-100/70">
                +998 77 550 33 66
                </span>
              </li>
              <li className="flex gap-2">
                <MapPin className="h-10 w-10 text-emerald-400" />
                <span className="text-sm leading-6 text-emerald-100/70">
                100099, Otchopar-1, Darvozakent Street, House 60,
                Yunusobod District, Tashkent, Uzbekistan
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-emerald-800/20 pt-8 sm:mt-20 lg:mt-24 text-center">
          <p className="text-xs leading-5 text-emerald-100/70">
            &copy; {new Date().getFullYear()} ARBIChO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
