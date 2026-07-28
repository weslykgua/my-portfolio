import { experiences } from "@/lib/data"
import { SectionHeading } from "@/components/section-heading"
import { TechBadge } from "@/components/icons"
import { Calendar } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-border/80 py-12 md:py-16">
      <SectionHeading title="Experiencia laboral" />

      <div className="mt-8 space-y-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-brand/40 md:p-8"
          >
            {/* Header info */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  {exp.company} <span className="text-muted-foreground font-normal">—</span> {exp.role}
                </h3>
                <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded-md bg-secondary px-2 py-0.5 font-medium text-foreground">{exp.type}</span>
                </div>
              </div>

              <div className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground font-medium">
                <Calendar className="h-3.5 w-3.5 text-brand" />
                <span>{exp.period}</span>
              </div>
            </div>

            {exp.description && (
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                {exp.description}
              </p>
            )}

            {/* Bullets */}
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              {exp.highlights.map((highlight, hIdx) => (
                <li key={hIdx} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Tech Badges */}
            <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-border/60">
              {exp.skills.map((skill) => (
                <TechBadge key={skill} name={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


