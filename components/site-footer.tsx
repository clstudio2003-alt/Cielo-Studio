import Image from "next/image"
import { site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[#243646]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-14 text-center md:px-8">
        <span className="overflow-hidden rounded-full ring-1 ring-[#d4b073]/50">
          <Image
            src="/logo.png"
            alt={`${site.name} logo`}
            width={64}
            height={64}
            className="h-16 w-16 object-cover"
          />
        </span>

        <div>
          <p className="font-serif text-lg font-bold tracking-[0.18em] text-[#f5ecdc]">
            CIELO STUDIO
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#d4b073]">
            Barber Chino
          </p>
        </div>

        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold uppercase tracking-[0.12em] text-[#d4b073] transition-colors hover:text-[#f5ecdc]"
        >
          Follow {site.instagramHandle} on Instagram
        </a>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-[#c3cdd6]">
          <a href={site.phoneHref} className="transition-colors hover:text-[#d4b073]">
            {site.phone}
          </a>
          <span className="text-[#4c6376]">·</span>
          <span>
            {site.address.line1}, {site.address.line2}
          </span>
        </div>

        <p className="mt-2 text-xs text-[#c3cdd6]/70">
          &copy; {new Date().getFullYear()} Cielo Studio. Created for Barber
          Chino. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
