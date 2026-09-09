import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

export function Studio() {
  return (
    <section
      id="studio"
      className="border-y border-border bg-card py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <SectionHeading eyebrow="The Space" title="Inside Cielo Studio" />
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            A private, premium barbering experience designed for comfort and
            precision — no crowds, no rush. Just you, the chair, and the craft.
          </p>
        </Reveal>
        <Reveal delay={180} className="mt-10">
          <div className="overflow-hidden rounded-md border border-border shadow-2xl shadow-black/50">
            <Image
              src="/studio.jpg"
              alt="The interior of Cielo Studio, Barber Chino's private Chicago barbershop"
              width={1600}
              height={1000}
              className="max-h-[520px] w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
