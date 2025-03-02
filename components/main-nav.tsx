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
import { cn } from "@/lib/utils";

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
              className={cn(navigationMenuTriggerStyle(), "px-4")}
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
          <NavigationMenuTrigger>Competition</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              {competitionItems.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                />
              ))}
            </ul>
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
          <NavigationMenuTrigger>Info Center</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              {infoCenterItems.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                />
              ))}
            </ul>
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
          <NavigationMenuTrigger>ARBICHO 2025</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              {arbicho2025Items.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                />
              ))}
            </ul>
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
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

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
          <button
            onClick={() =>
              setOpenSubmenu(
                openSubmenu === "competition" ? null : "competition"
              )
            }
            className="flex items-center justify-between w-full text-white hover:text-emerald-300"
          >
            Competition
            <span className="ml-2">
              {openSubmenu === "competition" ? "−" : "+"}
            </span>
          </button>
          {openSubmenu === "competition" && (
            <ul className="mt-2 ml-4 space-y-2">
              {competitionItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="block text-white hover:text-emerald-300"
                    onClick={onCloseAction}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
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
          <button
            onClick={() =>
              setOpenSubmenu(openSubmenu === "infoCenter" ? null : "infoCenter")
            }
            className="flex items-center justify-between w-full text-white hover:text-emerald-300"
          >
            Info Center
            <span className="ml-2">
              {openSubmenu === "infoCenter" ? "−" : "+"}
            </span>
          </button>
          {openSubmenu === "infoCenter" && (
            <ul className="mt-2 ml-4 space-y-2">
              {infoCenterItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="block text-white hover:text-emerald-300"
                    onClick={onCloseAction}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
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
          <button
            onClick={() =>
              setOpenSubmenu(
                openSubmenu === "arbicho2025" ? null : "arbicho2025"
              )
            }
            className="flex items-center justify-between w-full text-white hover:text-emerald-300"
          >
            ARBICHO 2025
            <span className="ml-2">
              {openSubmenu === "arbicho2025" ? "−" : "+"}
            </span>
          </button>
          {openSubmenu === "arbicho2025" && (
            <ul className="mt-2 ml-4 space-y-2">
              {arbicho2025Items.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="block text-white hover:text-emerald-300"
                    onClick={onCloseAction}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li className="py-2">
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href ?? "#"}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-emerald-100/10 hover:text-emerald-300 focus:bg-emerald-100/10 focus:text-emerald-300",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
