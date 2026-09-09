import { Reveal } from "@/components/reveal"

export function SectionHeading({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow?: string
  title: string
  align?: "center" | "left"
}) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left"
  return (
    <Reveal className={`flex flex-col ${alignClass}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl font-bold tracking-[0.04em] text-foreground sm:text-4xl">
        {title}
      </h2>
      <span
        className={`mt-4 block h-0.5 w-14 bg-primary ${align === "center" ? "" : ""}`}
      />
    </Reveal>
  )
}
