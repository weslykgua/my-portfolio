import { personalAbout } from "@/lib/data"
import { SectionHeading } from "@/components/section-heading"
import {
  Bike,
  BookOpen,
  CheckCircle,
  Code2,
  Compass,
  Dumbbell,
  Landmark,
  Lightbulb,
  PlayCircle,
  RefreshCw,
  Target,
  TrendingUp,
  Utensils,
} from "lucide-react"

const interests = [
  { label: "Gimnasio & Sobrecarga Progresiva", icon: Dumbbell },
  { label: "La Odisea & Filosofía", icon: BookOpen },
  { label: "Filosofía Kaizen (PDCA)", icon: TrendingUp },
  { label: "Soluciones de Impacto Humano", icon: Lightbulb },
  { label: "Mitología Griega & Nórdica", icon: Landmark },
  { label: "Comida Saludable & Salud Mental", icon: Utensils },
  { label: "Ciclismo Urbano & Naturaleza", icon: Bike },
]

const kaizenSteps = [
  {
    step: "Plan (Planificar)",
    icon: Target,
    color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    desc: "Detectar necesidades reales, fijar metas claras y diseñar soluciones optimizadas.",
  },
  {
    step: "Do (Hacer)",
    icon: PlayCircle,
    color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    desc: "Implementar en entornos de prueba o pilotos para validar hipótesis técnicas.",
  },
  {
    step: "Check (Verificar)",
    icon: CheckCircle,
    color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    desc: "Analizar datos métricos y asegurar que la experiencia humana sea cercana y valiosa.",
  },
  {
    step: "Act (Actuar)",
    icon: RefreshCw,
    color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    desc: "Ajustar, personalizar y estandarizar el proceso para garantizar calidad continua.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-16 md:py-24">
      <SectionHeading index="05" title="Sobre mí" />

      <div className="mt-10 max-w-3xl space-y-8">
        {/* Narrative Paragraphs */}
        <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground text-base sm:text-lg">
          {personalAbout.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* Kaizen PDCA Section */}
        <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm md:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-brand/10 p-2.5 text-brand">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                Lema de Vida &amp; Filosofía de Trabajo: Kaizen (PDCA)
              </h3>
              <p className="font-mono text-xs text-muted-foreground">
                Mejora continua incremental en el software y en el desarrollo personal
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {kaizenSteps.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.step}
                  className="rounded-xl border border-border/60 bg-secondary/30 p-4 space-y-2 transition-all hover:bg-secondary/60"
                >
                  <div className="flex items-center gap-2">
                    <div className={`rounded-lg border px-2 py-1 text-xs font-mono font-bold ${item.color} flex items-center gap-1.5`}>
                      <Icon className="h-3.5 w-3.5" />
                      <span>{item.step}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Interests Badges */}
        <div className="pt-2">
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-brand mb-4">
            Intereses y Principios
          </h3>

          <div className="flex flex-wrap gap-2.5">
            {interests.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-card px-3.5 py-2 text-xs font-semibold text-foreground shadow-2xs transition-all hover:border-brand/40 hover:bg-secondary/50"
                >
                  <div className="rounded-md bg-brand/10 p-1 text-brand">
                    <Icon className="h-3.5 w-3.5" />
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
