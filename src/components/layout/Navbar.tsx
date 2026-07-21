"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faBars } from "@fortawesome/free-solid-svg-icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-green-800 via-green-600 to-amber-500 text-white overflow-hidden animate-flash">
        <div className="flex animate-marquee whitespace-nowrap py-2 text-sm font-semibold tracking-wide">
          <span className="inline-block px-8">
            🧗 First Visit Free! Ask About Our Intro Pass &mdash; New Routes Set Weekly
          </span>
          <span className="inline-block px-8">
            🧗 First Visit Free! Ask About Our Intro Pass &mdash; New Routes Set Weekly
          </span>
        </div>
      </div>
      <header className="glass-nav sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <FontAwesomeIcon icon={faMountain} className="size-7 text-primary" />
              <span className="text-lg font-extrabold tracking-tight text-primary">
                SUMMITLINE
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    pathname === l.href
                      ? "text-primary bg-primary/8"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-2">
              <Link href="/pricing" className="inline-flex">
                <Button variant="outline" size="sm">
                  Join Now
                </Button>
              </Link>
            </div>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="md:hidden">
                <FontAwesomeIcon icon={faBars} className="size-5 text-primary" />
              </SheetTrigger>
              <SheetContent side="right" className="w-64 pt-12">
                <nav className="flex flex-col gap-2">
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium ${
                        pathname === l.href
                          ? "text-primary bg-primary/8"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {l.label}
                    </Link>
                  ))}
                  <Link href="/pricing" onClick={() => setOpen(false)} className="inline-flex mt-2">
                    <Button size="sm" className="w-full">Join Now</Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
