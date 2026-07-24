import { projects, profile } from "@/lib/data"
import { ArrowUpRight, Code2, ExternalLink, Sparkles } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { GithubIcon, TechBadge } from "@/components/icons"

export function ProjectsSection() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-border py-16 md:py-24">
      <SectionHeading index="02" title="Proyectos destacados" />

      <div className="mt-10 grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative flex flex-col justify-between rounded-xl border border-border/80 bg-card p-6 transition-all hover:border-brand/40 hover:shadow-lg md:p-8"
          >
            <div>
              {/* Badge & Year */}
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 font-mono text-xs font-semibold text-brand">
                  <Sparkles className="h-3 w-3" />
                  {project.badge}
                </span>
                <span className="font-mono text-xs font-medium text-muted-foreground">
                  {project.year}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground group-hover:text-brand transition-colors">
                {project.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{project.subtitle}</p>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Bullet highlights */}
              <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-border/60 pt-6">
              {/* Tags with tech badges */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <TechBadge key={tag} name={tag} />
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex items-center justify-between pt-2">
                <div className="flex items-center gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground shadow transition-opacity hover:opacity-90 active:scale-95"
                  >
                    Visitar Proyecto
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary px-3.5 py-2 text-xs font-medium text-secondary-foreground transition-colors hover:bg-secondary/80 active:scale-95"
                    >
                      <Code2 className="h-3.5 w-3.5" />
                      Código fuente
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Callout Banner */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-border bg-secondary/30 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-primary p-2.5 text-primary-foreground">
            <GithubIcon className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground">Código &amp; Documentación en GitHub</h4>
            <p className="text-xs text-muted-foreground">Explora mis repositorios, arquitecturas e implementaciones públicas.</p>
          </div>
        </div>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90 active:scale-95 shrink-0"
        >
          <span>Ver GitHub</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  )
}
