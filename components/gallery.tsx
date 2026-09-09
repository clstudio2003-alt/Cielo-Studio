"use client"

import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { gallery } from "@/lib/site"
import { SectionHeading } from "@/components/section-heading"

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])
  const show = useCallback(
    (dir: number) =>
      setActive((cur) => {
        if (cur === null) return cur
        return (cur + dir + gallery.length) % gallery.length
      }),
    [],
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") show(1)
      if (e.key === "ArrowLeft") show(-1)
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [active, close, show])

  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading eyebrow="Portfolio" title="The Work" />

      <div className="mt-14 columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4">
        {gallery.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActive(i)}
            className="group relative mb-3 block w-full overflow-hidden rounded-sm border border-border sm:mb-4"
            aria-label={`Open ${item.alt}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={600}
              height={800}
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <span className="absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/20" />
          </button>
        ))}
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio image viewer"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <span className="text-xl leading-none">{"\u00D7"}</span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              show(-1)
            }}
            aria-label="Previous"
            className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary md:left-8"
          >
            <span className="text-xl leading-none">{"\u2039"}</span>
          </button>

          <div
            className="relative max-h-[85vh] w-auto max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={gallery[active].src}
              alt={gallery[active].alt}
              width={1200}
              height={1600}
              className="max-h-[85vh] w-auto rounded-sm border border-border object-contain"
              priority
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              show(1)
            }}
            aria-label="Next"
            className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary md:right-8"
          >
            <span className="text-xl leading-none">{"\u203A"}</span>
          </button>
        </div>
      ) : null}
    </section>
  )
}
