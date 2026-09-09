import Image from "next/image"
import { site } from "@/lib/site"

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <Image
        src="/studio.jpg"
        alt=""
        fill
        priority
        aria-hidden
        className="object-cover object-center opacity-30"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/85 to-background"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[88vh] max-w-4xl flex-col items-center justify-center px-5 py-24 text-center md:px-8">
        <span className="mb-7 inline-flex items-center gap-2 border border-primary/70 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-primary">
          {site.city}
        </span>

        <h1 className="text-balance font-serif text-4xl font-bold leading-[1.08] tracking-[0.04em] text-foreground sm:text-6xl md:text-7xl">
          The Cut is
          <br />
          <span className="text-primary">Craft.</span>
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Precision cuts, master fades, and creative designs by Barber Chino — a
          private, appointments-only studio in the heart of Chicago.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={site.booksy}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-primary bg-primary px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-transparent hover:text-primary"
          >
            Book via Booksy
          </a>
          <a
            href="#portfolio"
            className="rounded-sm border border-border px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            View the Work
          </a>
        </div>

        <p className="mt-10 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground/80">
          Appointments Only · Walk-ins by chance
        </p>
      </div>
    </section>
  )
}

export function NoticeBanner() {
  return (
    <div className="border-y border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-primary md:text-sm">
        <span>{site.address.line1}, Chicago</span>
        <span className="text-border">/</span>
        <span>Appointments Only</span>
        <span className="text-border">/</span>
        <span>Book Direct via Booksy</span>
      </div>
    </div>
  )
}
