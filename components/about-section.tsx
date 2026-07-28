import { personalAbout } from "@/lib/data"
import { SectionHeading } from "@/components/section-heading"
import { BookOpen, Code2, Dumbbell, TrendingUp } from "lucide-react"

const coreInterests = [
  { label: "Fitness & Entrenamiento", icon: Dumbbell },
  { label: "Filosofía Clásica & Historia", icon: BookOpen },
  { label: "Mejora Continua (Kaizen)", icon: TrendingUp },
  { label: "Tecnología & Software", icon: Code2 },
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border/80 py-12 md:py-16">
      <SectionHeading title="Sobre mí" />

      <div className="mt-8 max-w-3xl space-y-6">
        {/* Narrative Paragraphs */}
        <div className="space-y-4 text-base leading-relaxed text-foreground/80 md:text-lg">
          {personalAbout.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* Core Interests Badges */}
        <div className="pt-4 border-t border-border/60">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Intereses &amp; Filosofía Personal
          </h3>

          <div className="flex flex-wrap gap-2.5">
            {coreInterests.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2 text-xs font-medium text-foreground transition-colors hover:border-brand/40"
                >
                  <Icon className="h-3.5 w-3.5 text-brand" />
                  <span>{item.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}


