import { education } from "@/lib/data"
import { SectionHeading } from "@/components/section-heading"
import { Award, BookOpen, GraduationCap } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-20 border-t border-border/80 py-12 md:py-16">
      <SectionHeading title="Educación y certificaciones" />

      <div className="mt-8 space-y-8">
        {/* Degree Banner */}
        <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-brand/40 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-brand" />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Título profesional
                </span>
              </div>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm font-semibold text-brand">
                {education.institution} · {education.location}
              </p>
            </div>
            <div className="inline-flex shrink-0 items-center justify-center rounded-lg border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-foreground">
              Periodo: {education.period}
            </div>
          </div>

          <div className="mt-6 border-t border-border/60 pt-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <BookOpen className="h-4 w-4 text-brand" />
              <span>Áreas de especialización universitaria:</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {education.featuredCourses.map((course) => (
                <span
                  key={course}
                  className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs text-foreground font-medium"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Award className="h-5 w-5 text-brand" />
            <h3 className="text-xl font-bold tracking-tight text-foreground">
              Certificaciones oficiales ({education.certifications.length})
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {education.certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-col justify-between rounded-xl border border-border bg-card p-4 transition-colors hover:border-brand/40"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-semibold text-brand">{cert.issuer}</span>
                    <span className="rounded bg-secondary px-2 py-0.5">{cert.date}</span>
                  </div>
                  <h4 className="mt-2 text-sm font-bold tracking-tight text-foreground">
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

