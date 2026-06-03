"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, CONTACT, LOGO_URL, PRICING } from "@/lib/constants";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className="sticky top-0 z-50">
      {/* Top Banner - Dark blue */}
      <div className="bg-primary text-white">
        <div className="container-custom mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm">
            <Link
              href="/iv-therapy#myers"
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <span className="text-accent">&#10024;</span>
              <span className="hidden sm:inline">
                Get the most popular and time-tested IV in history —
              </span>
              <span className="font-semibold text-secondary">
                {"The Myers' Cocktail"}
              </span>
            </Link>
            <Link
              href="/iv-therapy#myers"
              className="hidden sm:inline-flex items-center gap-1 px-4 py-1 border border-white/30 rounded-full text-xs hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header - White background */}
      <header className="bg-white shadow-sm">
        <div className="container-custom mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo - colored version */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src={LOGO_URL}
                alt="Prime IV Hydration & Wellness - Huntsville"
                width={140}
                height={50}
                className="h-12 lg:h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className="px-4 py-2 text-foreground hover:text-primary font-medium transition-colors"
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
                  <button className="flex items-center gap-1 px-4 py-2 text-foreground hover:text-primary font-medium transition-colors">
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {openDropdown === link.label && link.children && (
                    <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-lg py-2 border border-border">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-foreground hover:bg-background-alt hover:text-primary transition-colors"
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
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="flex items-center gap-2 text-foreground hover:text-primary font-medium"
              >
                <Phone className="w-4 h-4" />
                {CONTACT.phone}
              </Link>
              {/* Orange button like Bluebell's "Our Specials!" */}
              <Link href="/specials" className="btn-secondary text-sm">
                <span>&#127881;</span> Our Specials!
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
                className="btn-secondary w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>&#127881;</span> Our Specials!
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
