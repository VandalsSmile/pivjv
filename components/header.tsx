"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, CONTACT } from "@/lib/constants";
import { TextToBookLink } from "@/components/text-to-book-link";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-primary text-white">
        <div className="container-custom mx-auto px-4">
          <Link
            href="/myers-iv-therapy"
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
              <Image
                src="/images/prime-iv-logo-color.webp"
                alt="Prime IV Hydration & Wellness - Huntsville"
                width={140}
                height={50}
                className="h-8 lg:h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 mx-4">
              <Link
                href="/"
                className="whitespace-nowrap rounded-md px-2.5 xl:px-3 py-2 text-sm text-primary/70 hover:text-primary hover:bg-background-alt font-medium transition-colors"
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
                  <button
                    type="button"
                    aria-expanded={openDropdown === link.label}
                    aria-haspopup="true"
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.label ? null : link.label
                      )
                    }
                    className={cn(
                      "flex items-center gap-1 whitespace-nowrap rounded-md px-2.5 xl:px-3 py-2 text-sm font-medium transition-colors hover:bg-background-alt hover:text-primary",
                      openDropdown === link.label
                        ? "text-primary bg-background-alt"
                        : "text-primary/70"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform",
                        openDropdown === link.label && "rotate-180"
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  {openDropdown === link.label && link.children && (
                    <div className="absolute top-full left-0 pt-2 w-60">
                    <div className="bg-white shadow-lg rounded-lg py-2 border border-border">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-primary/70 hover:bg-background-alt hover:text-primary transition-colors"
                        >
                          {child.highlight && (
                            <Star
                              className="w-4 h-4 flex-shrink-0 fill-[#f59e0b] text-[#f59e0b]"
                              aria-hidden="true"
                            />
                          )}
                          {child.label}
                        </Link>
                      ))}
                    </div>
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="/specials"
                className="whitespace-nowrap rounded-md px-2.5 xl:px-3 py-2 text-sm text-primary/70 hover:text-primary hover:bg-background-alt font-medium transition-colors"
              >
                Our Specials
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2 flex-shrink-0">
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="flex items-center gap-2 whitespace-nowrap rounded-md p-2 text-sm text-primary hover:bg-background-alt font-semibold transition-colors"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span className="sr-only xl:not-sr-only">{CONTACT.phone}</span>
                <span className="sr-only xl:hidden">Call {CONTACT.phone}</span>
              </Link>
              <TextToBookLink className="whitespace-nowrap rounded-md p-2 text-sm text-primary hover:bg-background-alt font-semibold transition-colors">
                <span className="sr-only 2xl:not-sr-only">Text to book</span>
              </TextToBookLink>
              <span className="mx-1 h-6 w-px bg-border" aria-hidden="true" />
              <Link
                href="/book-intro-offer"
                className="btn-primary whitespace-nowrap text-sm px-5 py-2.5"
              >
                Book Online Now
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
            "lg:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-lg transition-all duration-300 overflow-y-auto overscroll-contain",
            mobileMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          )}
          style={{
            // 100% = sticky header height; the extra 2.75rem accounts for the
            // announcement banner above the header so the panel never extends
            // past the bottom of the viewport (last CTA stays reachable).
            maxHeight: "calc(100dvh - 100% - 2.75rem)",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <nav className="container-custom mx-auto px-4 py-4 pb-8">
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
                        className="flex items-center gap-2 py-2 text-foreground-muted hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.highlight && (
                          <Star
                            className="w-4 h-4 flex-shrink-0 fill-[#f59e0b] text-[#f59e0b]"
                            aria-hidden="true"
                          />
                        )}
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
              <TextToBookLink
                showNumber
                iconClassName="w-5 h-5"
                className="flex items-center justify-center gap-2 py-3 text-primary font-semibold"
              />
              <Link
                href="/book-intro-offer"
                className="btn-primary w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Online Now
              </Link>
              <Link
                href="/specials"
                className="btn-outline w-full justify-center"
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
