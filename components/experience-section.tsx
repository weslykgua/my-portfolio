import { experiences } from "@/lib/data"
import { SectionHeading } from "@/components/section-heading"
import { TechBadge } from "@/components/icons"
import { Briefcase, Calendar, ExternalLink } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-border py-16 md:py-24">
      <SectionHeading index="01" title="Experiencia profesional" />

      <div className="mt-10 space-y-12">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="group relative rounded-xl border border-border/60 bg-card/40 p-6 transition-all hover:border-brand/40 hover:bg-card/80 hover:shadow-md md:p-8"
          >
            {/* Header info */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-brand" />
                  <h3 className="text-xl font-bold tracking-tight">{exp.role}</h3>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-2 font-mono text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{exp.company}</span>
                  <span>•</span>
                  <span>{exp.type}</span>
                  {exp.product && (
                    <>
                      <span>•</span>
                      <span>Producto:</span>
                      <a
                        href={exp.productUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-medium text-brand hover:underline"
                      >
                        {exp.product}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </>
                  )}
                </div>
              </div>

              <div className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>{exp.period}</span>
              </div>
            </div>

            {exp.description && (
              <p className="mt-4 text-sm font-medium text-foreground/90">{exp.description}</p>
            )}

            {/* Bullets */}
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {exp.highlights.map((highlight, hIdx) => (
                <li key={hIdx} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Tech Badges */}
            <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-border/40">
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
