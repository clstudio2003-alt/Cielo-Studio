import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { hours, site } from "@/lib/site"

export function Location() {
  return (
    <section id="location" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading eyebrow="Plan Your Visit" title="Hours & Location" />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-md border border-border bg-card p-8 md:p-10">
            <h3 className="font-serif text-xl font-bold tracking-[0.06em] text-primary">
              Business Hours
            </h3>
            <ul className="mt-6 divide-y divide-border/70">
              {hours.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  <span className="font-medium text-foreground">{h.day}</span>
                  <span
                    className={
                      "closed" in h && h.closed
                        ? "font-semibold uppercase tracking-wide text-destructive"
                        : "text-muted-foreground"
                    }
                  >
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex h-full flex-col rounded-md border border-border bg-card p-8 md:p-10">
            <h3 className="font-serif text-xl font-bold tracking-[0.06em] text-primary">
              Location & Booking
            </h3>

            <div className="mt-6 space-y-5 text-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Address
                </p>
                <p className="mt-1 text-foreground">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Phone / Text
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-1 inline-block text-primary transition-colors hover:text-foreground"
                >
                  {site.phone}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Appointments
                </p>
                <p className="mt-1 text-foreground">
                  Appointments only. Book directly through Booksy, or call and
                  text to reserve your session.
                </p>
              </div>
            </div>

            <div className="mt-6 border-l-2 border-primary bg-primary/10 p-4 text-sm text-foreground">
              <span className="font-semibold">Parking:</span> Public paid street
              parking is available directly out front.
            </div>

            <a
              href={site.booksy}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 rounded-sm border border-primary bg-primary px-6 py-3.5 text-center text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-transparent hover:text-primary"
            >
              Book via Booksy
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
