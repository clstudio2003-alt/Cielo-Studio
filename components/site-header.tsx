"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { navLinks, site } from "@/lib/site"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-background/90 backdrop-blur-md"
          : "border-transparent bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <span className="overflow-hidden rounded-full ring-1 ring-primary/40">
            <Image
              src="/logo.png"
              alt={`${site.name} logo`}
              width={48}
              height={48}
              className="h-11 w-11 object-cover"
              priority
            />
          </span>
          <span className="leading-none">
            <span className="block font-serif text-base font-bold tracking-[0.18em] text-foreground">
              CIELO STUDIO
            </span>
            <span className="mt-1 block text-[0.6rem] font-semibold tracking-[0.32em] text-primary">
              BARBER CHINO
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.booksy}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-sm border border-primary bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-transparent hover:text-primary sm:inline-block"
          >
            Book Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-current transition-all ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${
                  open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-border bg-background/98 backdrop-blur-md transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-96 border-t opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-2" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.booksy}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 mb-2 rounded-sm border border-primary bg-primary px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground"
          >
            Book via Booksy
          </a>
        </nav>
      </div>
    </header>
  )
}
