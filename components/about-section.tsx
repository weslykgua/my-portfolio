import { personalAbout } from "@/lib/data"
import { SectionHeading } from "@/components/section-heading"
import { Bike, Compass, Dumbbell, Plane } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-16 md:py-24">
      <SectionHeading index="05" title="Sobre mí" />

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          {personalAbout.map((paragraph, i) => (
            <p key={i} className="text-pretty leading-relaxed text-muted-foreground text-base">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="rounded-xl border border-border/80 bg-card p-6 shadow-sm space-y-4">
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-brand">
            Intereses y estilo de vida
          </h3>

          <ul className="space-y-3 text-sm text-foreground/90 font-medium">
            <li className="flex items-center gap-3">
              <div className="rounded-md bg-brand/10 p-2 text-brand">
                <Bike className="h-4 w-4" />
              </div>
              <span>Ciclismo como medio de transporte</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="rounded-md bg-brand/10 p-2 text-brand">
                <Dumbbell className="h-4 w-4" />
              </div>
              <span>Entrenamiento en el gimnasio</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="rounded-md bg-brand/10 p-2 text-brand">
                <Compass className="h-4 w-4" />
              </div>
              <span>Trekking y naturaleza</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="rounded-md bg-brand/10 p-2 text-brand">
                <Plane className="h-4 w-4" />
              </div>
              <span>Viajes y descubrir nuevos lugares</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
