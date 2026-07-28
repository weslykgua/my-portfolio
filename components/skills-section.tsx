import { skillCategories } from "@/lib/data"
import { SectionHeading } from "@/components/section-heading"
import { TechBadge } from "@/components/icons"

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border/80 py-12 md:py-16">
      <SectionHeading title="Stack técnico y habilidades" />

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-brand/40"
          >
            <h3 className="text-sm font-semibold text-foreground mb-3 border-b border-border/60 pb-2">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <TechBadge key={item} name={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

