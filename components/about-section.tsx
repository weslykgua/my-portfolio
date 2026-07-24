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
    <section id="about" className="scroll-mt-20 border-t border-border py-16 md:py-24">
      <SectionHeading index="06" title="Sobre mí" />

      <div className="mt-10 max-w-3xl space-y-6">
        {/* Narrative Paragraphs */}
        <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground text-base sm:text-lg">
          {personalAbout.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* Core Interests Badges */}
        <div className="pt-4 border-t border-border/60">
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-brand mb-4">
            Intereses &amp; Filosofía Personal
          </h3>

          <div className="flex flex-wrap gap-3">
            {coreInterests.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2.5 rounded-xl border border-border/80 bg-card px-4 py-2.5 text-xs font-semibold text-foreground shadow-2xs transition-all hover:border-brand/40 hover:bg-secondary/50"
                >
                  <div className="rounded-lg bg-brand/10 p-1.5 text-brand">
                    <Icon className="h-4 w-4" />
                  </div>
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
