import Image from "next/image"
import { site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[#080b0e]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-14 text-center md:px-8">
        <span className="overflow-hidden rounded-full ring-1 ring-primary/40">
          <Image
            src="/logo.png"
            alt={`${site.name} logo`}
            width={64}
            height={64}
            className="h-16 w-16 object-cover"
          />
        </span>

        <div>
          <p className="font-serif text-lg font-bold tracking-[0.18em] text-foreground">
            CIELO STUDIO
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Barber Chino
          </p>
        </div>

        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:text-foreground"
        >
          Follow {site.instagramHandle} on Instagram
        </a>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <a href={site.phoneHref} className="transition-colors hover:text-primary">
            {site.phone}
          </a>
          <span className="text-border">·</span>
          <span>
            {site.address.line1}, {site.address.line2}
          </span>
        </div>

        <p className="mt-2 text-xs text-muted-foreground/70">
          &copy; {new Date().getFullYear()} Cielo Studio. Created for Barber
          Chino. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
