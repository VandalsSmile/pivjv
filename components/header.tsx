"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, CONTACT, LOGO_URL } from "@/lib/constants";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-primary text-white">
        <div className="container-custom mx-auto px-4">
          <Link
            href="/iv-therapy#myers"
            className="flex items-center justify-center gap-2 py-2 text-sm hover:text-secondary transition-colors"
          >
            <span className="hidden sm:inline">
              Get the most popular and time-tested IV in history —
            </span>
            <span className="font-semibold text-secondary">
              {"The Myers' Cocktail"}
            </span>
            <span className="text-xs ml-2 underline">Learn More</span>
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container-custom mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="bg-primary p-2 rounded">
                <Image
                  src={LOGO_URL}
                  alt="Prime IV Hydration & Wellness - Huntsville"
                  width={140}
                  height={50}
                  className="h-8 lg:h-10 w-auto"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className="px-4 py-2 text-sm text-primary/70 hover:text-primary font-medium transition-colors"
              >
                Home
              </Link>

              {NAV_LINKS.filter((link) => link.children).map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm text-primary/70 hover:text-primary font-medium transition-colors">
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {openDropdown === link.label && link.children && (
                    <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-lg py-2 border border-border">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-primary/70 hover:bg-background-alt hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="flex items-center gap-2 text-foreground hover:text-primary font-medium"
              >
                <Phone className="w-4 h-4" />
                {CONTACT.phone}
              </Link>
              <Link href="/specials" className="btn-primary text-sm">
                Our Specials
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-lg transition-all duration-300",
            mobileMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          )}
        >
          <nav className="container-custom mx-auto px-4 py-4">
            <Link
              href="/"
              className="block py-3 text-foreground font-medium border-b border-border"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            {NAV_LINKS.filter((link) => link.children).map((link) => (
              <div key={link.label} className="border-b border-border">
                <button
                  className="flex items-center justify-between w-full py-3 text-foreground font-medium"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === link.label ? null : link.label
                    )
                  }
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      openDropdown === link.label && "rotate-180"
                    )}
                  />
                </button>

                {openDropdown === link.label && link.children && (
                  <div className="pb-3 pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-2 text-foreground-muted hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 space-y-3">
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="flex items-center justify-center gap-2 py-3 text-primary font-semibold"
              >
                <Phone className="w-5 h-5" />
                Call {CONTACT.phone}
              </Link>
              <Link
                href="/specials"
                className="btn-primary w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Specials
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
