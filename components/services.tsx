import { Reveal } from "@/components/reveal"
import { services, site } from "@/lib/site"
import { SectionHeading } from "@/components/section-heading"

export function Services() {
  return (
    <section
      id="services"
      className="border-y border-border bg-card py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeading eyebrow="The Menu" title="Services & Pricing" />

        <ul className="mt-14 grid gap-3 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal as="li" key={service.name} delay={i * 60}>
              <div className="group flex items-center justify-between gap-4 rounded-sm border border-border bg-background px-6 py-5 transition-colors hover:border-primary">
                <span className="text-sm font-semibold text-foreground sm:text-base">
                  {service.name}
                </span>
                <span className="font-serif text-lg font-bold text-primary sm:text-xl">
                  {service.price}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>

        <div className="mt-14 flex flex-col items-center gap-3 text-center">
          <a
            href={site.booksy}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-primary bg-primary px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-transparent hover:text-primary"
          >
            Schedule an Appointment
          </a>
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            House calls available across the city
          </p>
        </div>
      </div>
    </section>
  )
}
