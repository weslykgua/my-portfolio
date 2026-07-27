import { skillCategories } from "@/lib/data"
import { SectionHeading } from "@/components/section-heading"
import { TechBadge } from "@/components/icons"

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border py-16 md:py-24">
      <SectionHeading index="03" title="Stack técnico y habilidades" />

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border border-border/80 bg-card p-6 shadow-sm transition-all hover:border-brand/30 hover:shadow-md"
          >
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-brand">
              {group.title}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
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
