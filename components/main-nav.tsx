"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";

const competitionItems = [
  {
    title: "Participation Requirements",
    href: "/requirements",
  },
  {
    title: "Past ARBICHO",
    href: "/past-arbicho",
  },
  {
    title: "Future ARBICHO",
    href: "/future-arbicho",
  },
];

const arbicho2025Items = [
  {
    title: "Organizing Committee",
    href: "/organizing-committee",
  },
  {
    title: "Scientific Committee",
    href: "/scientific-committee",
  },
  {
    title: "Programme Schedule",
    href: "/programme-schedule",
  },
];

const infoCenterItems = [
  {
    title: "Results & Reports",
    href: "/results",
  },
  {
    title: "Rules & Guidelines",
    href: "/rules",
  },
];

export function MainNav() {
  return (
    <NavigationMenu className="max-w-none justify-end">
      <NavigationMenuList className="space-x-4">
        <NavigationMenuItem className="px-1">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "px-4 w-full")}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem className="px-1">
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "px-4")}
            >
              About ARBICHO
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem className="px-1">
          <NavigationMenuTrigger className="cursor-pointer">Competition</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-3 p-4">
              {competitionItems.map((item) => (
                <NavigationMenuLink key={item.title} asChild>
                  <Link 
                    href={item.href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-emerald-100/10 hover:text-emerald-300 focus:bg-emerald-100/10 focus:text-emerald-300"
                  >
                    <div className="text-sm font-medium leading-none">{item.title}</div>
                  </Link>
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="px-1">
          <Link href="/arbicho-foundation" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "px-4")}
            >
              ARBICHO Foundation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem className="px-1">
          <NavigationMenuTrigger className="cursor-pointer">Info Center</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-3 p-4">
              {infoCenterItems.map((item) => (
                <NavigationMenuLink key={item.title} asChild>
                  <Link 
                    href={item.href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-emerald-100/10 hover:text-emerald-300 focus:bg-emerald-100/10 focus:text-emerald-300"
                  >
                    <div className="text-sm font-medium leading-none">{item.title}</div>
                  </Link>
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="px-1">
          <Link href="/gallery" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "px-4")}
            >
              Gallery
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem className="px-1">
          <NavigationMenuTrigger className="cursor-pointer px-4 text-1xl py-2 rounded-lg hover:bg-gray-700 transition-colors">ARBICHO 2025</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-3 p-4">
              {arbicho2025Items.map((item) => (
                <NavigationMenuLink key={item.title} asChild>
                  <Link 
                    href={item.href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-emerald-100/10 hover:text-emerald-300 focus:bg-emerald-100/10 focus:text-emerald-300"
                  >
                    <div className="text-sm font-medium leading-none">{item.title}</div>
                  </Link>
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="px-1">
          <Link href="/uzbekistan" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "px-4")}
            >
              Uzbekistan
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem className="px-1">
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "px-4")}
            >
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function MobileNav({ onCloseAction }: { onCloseAction: () => void }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <nav className="p-6">
      <ul className="space-y-6">
        <li className="py-2">
          <Link
            href="/"
            className="block text-white hover:text-emerald-300"
            onClick={onCloseAction}
          >
            Home
          </Link>
        </li>
        <li className="py-2">
          <Link
            href="/about"
            className="block text-white hover:text-emerald-300"
            onClick={onCloseAction}
          >
            About ARBICHO
          </Link>
        </li>
        <li className="py-2">
          <DropdownMenu open={openMenu === "competition"} onOpenChange={() => toggleMenu("competition")}>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center justify-between w-full text-white hover:text-emerald-300">
                Competition
                <span className="ml-2">
                  {openMenu === "competition" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full bg-gray-800 border-gray-700">
              {competitionItems.map((item) => (
                <DropdownMenuItem key={item.title} asChild>
                  <Link
                    href={item.href}
                    className="block w-full text-white hover:text-emerald-300"
                    onClick={onCloseAction}
                  >
                    {item.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className="py-2">
          <Link
            href="/arbicho-foundation"
            className="block text-white hover:text-emerald-300"
            onClick={onCloseAction}
          >
            ARBICHO Foundation
          </Link>
        </li>
        <li className="py-2">
          <DropdownMenu open={openMenu === "infoCenter"} onOpenChange={() => toggleMenu("infoCenter")}>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center justify-between w-full text-white hover:text-emerald-300">
                Info Center
                <span className="ml-2">
                  {openMenu === "infoCenter" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full bg-gray-800 border-gray-700">
              {infoCenterItems.map((item) => (
                <DropdownMenuItem key={item.title} asChild>
                  <Link
                    href={item.href}
                    className="block w-full text-white hover:text-emerald-300"
                    onClick={onCloseAction}
                  >
                    {item.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className="py-2">
          <Link
            href="/gallery"
            className="block text-white hover:text-emerald-300"
            onClick={onCloseAction}
          >
            Gallery
          </Link>
        </li>
        <li className="py-2">
          <DropdownMenu open={openMenu === "arbicho2025"} onOpenChange={() => toggleMenu("arbicho2025")}>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center justify-between w-full text-white hover:text-emerald-300">
                ARBICHO 2025
                <span className="ml-2">
                  {openMenu === "arbicho2025" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full bg-gray-800 border-gray-700">
              {arbicho2025Items.map((item) => (
                <DropdownMenuItem key={item.title} asChild>
                  <Link
                    href={item.href}
                    className="block w-full text-white hover:text-emerald-300 "
                    onClick={onCloseAction}
                  >
                    {item.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className="py-2">
          <Link
            href="/uzbekistan"
            className="block text-white hover:text-emerald-300"
            onClick={onCloseAction}
          >
            Uzbekistan
          </Link>
        </li>
        <li className="py-2">
          <Link
            href="/contact"
            className="block text-white hover:text-emerald-300"
            onClick={onCloseAction}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}