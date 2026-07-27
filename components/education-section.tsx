import { education } from "@/lib/data"
import { SectionHeading } from "@/components/section-heading"
import { Award, BookOpen, GraduationCap } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-20 border-t border-border py-16 md:py-24">
      <SectionHeading index="05" title="Educación y certificaciones" />

      <div className="mt-10 space-y-10">
        {/* Degree Banner */}
        <div className="rounded-xl border border-border/80 bg-card p-6 shadow-sm md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-brand" />
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Título profesional
                </span>
              </div>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                {education.degree}
              </h3>
              <p className="mt-1 font-mono text-sm font-semibold text-brand">
                {education.institution} · {education.location}
              </p>
            </div>
            <div className="inline-flex shrink-0 items-center justify-center rounded-lg border border-brand/30 bg-brand/10 px-4 py-2 font-mono text-sm font-semibold text-brand">
              Periodo: {education.period}
            </div>
          </div>

          <div className="mt-6 border-t border-border/60 pt-4">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <BookOpen className="h-4 w-4 text-brand" />
              <span>Áreas de especialización universitaria:</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {education.featuredCourses.map((course) => (
                <span
                  key={course}
                  className="rounded-md border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-foreground font-medium"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Award className="h-5 w-5 text-brand" />
            <h3 className="text-xl font-bold tracking-tight text-foreground">
              Certificaciones oficiales ({education.certifications.length})
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {education.certifications.map((cert) => (
              <div
                key={cert.name}
                className="group flex flex-col justify-between rounded-xl border border-border/80 bg-card p-5 transition-all hover:border-brand/40 hover:bg-card/80 hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                    <span className="font-semibold text-brand">{cert.issuer}</span>
                    <span className="rounded bg-secondary/80 px-2 py-0.5">{cert.date}</span>
                  </div>
                  <h4 className="mt-3 text-base font-bold tracking-tight text-foreground group-hover:text-brand transition-colors">
                    {cert.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
