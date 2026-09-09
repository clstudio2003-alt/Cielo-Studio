import Image from "next/image"
import { Reveal } from "@/components/reveal"

const highlights = [
  { value: "6+ Years", label: "Licensed Experience" },
  { value: "Fades & Shears", label: "Master Craftsman" },
  { value: "Designs", label: "Creative Taper Work" },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-md border border-border shadow-2xl shadow-black/50">
            <Image
              src="/profile.jpg"
              alt="Barber Chino, licensed Chicago barber and owner of Cielo Studio"
              width={900}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="absolute -bottom-4 -right-4 -z-10 hidden h-32 w-32 border-b-2 border-r-2 border-primary md:block" />
        </Reveal>

        <Reveal delay={120}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Meet the Barber
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight tracking-[0.03em] text-foreground sm:text-4xl">
            Barber Chino
          </h2>
          <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              A licensed barber based in Chicago with over six years of
              professional experience. Whether you&apos;re after a precise modern
              cut, a masterful fade, creative taper designs, or skilled shear
              work — the goal is always the same: a style built to fit you
              perfectly.
            </p>
            <p>
              Beyond the clippers, I&apos;m a fan of music, sports, shows, and
              movies. For me, barbering isn&apos;t just about cutting hair — it&apos;s
              the whole experience. The conversation and the bonds made in the
              chair are what keep me perfecting the craft.
            </p>
          </div>

          <dl className="mt-9 grid grid-cols-3 gap-4 border-t border-border pt-7">
            {highlights.map((h) => (
              <div key={h.value}>
                <dt className="font-serif text-lg font-bold text-foreground">
                  {h.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.1em] text-muted-foreground">
                  {h.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
