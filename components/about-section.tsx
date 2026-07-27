import { personalAbout } from "@/lib/data"
import { SectionHeading } from "@/components/section-heading"
import { BookOpen, Code2, Dumbbell, TrendingUp, CheckCircle2 } from "lucide-react"

const coreInterests = [
  { label: "Fitness & Entrenamiento", icon: Dumbbell },
  { label: "Filosofía Clásica & Historia", icon: BookOpen },
  { label: "Mejora Continua (Kaizen)", icon: TrendingUp },
  { label: "Tecnología & Software", icon: Code2 },
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-12 md:py-16">
      <SectionHeading index="01" title="Sobre mí" />

      <div className="mt-10 max-w-3xl space-y-6">
        {/* Narrative Highlights */}
        <div className="space-y-3">
          {personalAbout.map((paragraph, i) => (
            <div key={i} className="flex items-start gap-3 rounded-lg border border-border/60 bg-card/40 p-4 transition-colors hover:bg-card/70">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-brand mt-0.5" />
              <p className="text-sm sm:text-base leading-relaxed text-foreground/90 font-medium">
                {paragraph}
              </p>
            </div>
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

