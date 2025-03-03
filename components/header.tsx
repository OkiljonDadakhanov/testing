"use client";
import { MainNav } from "@/components/main-nav";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { MobileNav } from "@/components/main-nav";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-800/10 bg-gradient-to-b from-emerald-900/95 to-[#011c2c]/95 backdrop-blur supports-[backdrop-filter]:from-emerald-900/80 supports-[backdrop-filter]:to-[#011c2c]/80">
      <div className="container flex items-center justify-between py-4 min-h-[120px] px-4 md:px-6 m-auto">
        {/* Logo on the Left */}
        <Link href="/" className="flex items-center z-10">
          <Image
            src="/logo/logowhite.png"
            width={100} // Adjust width as needed
            height={64} // Adjust height as needed
            alt="logo of ARBIChO"
            className="object-contain"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-white hover:text-emerald-300 z-10"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <MainNav />
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-emerald-900/95 lg:hidden">
            <MobileNav onCloseAction={handleClose} />
          </div>
        )}
      </div>
    </header>
  );
}