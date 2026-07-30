import { projects, profile } from "@/lib/data"
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { GithubIcon, TechBadge } from "@/components/icons"
import { ProjectCarousel } from "@/components/project-carousel"

export function ProjectsSection() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-border/80 py-12 md:py-16">
      <SectionHeading title="Productos y Proyectos" />

      <div className="mt-8 grid grid-cols-1 gap-8">
        {projects.map((project) => {
          const projectImages =
            project.images && project.images.length > 0
              ? project.images
              : project.image
              ? [project.image]
              : []

          return (
            <div
              key={project.title}
              className="group relative flex flex-col justify-between rounded-xl border border-border bg-card p-6 transition-colors hover:border-brand/40 md:p-8"
            >
              <div>
                {/* Badge & Year */}
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center rounded-md border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/50 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-300">
                    {project.badge}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    {project.year}
                  </span>
                </div>

                {/* Project Carousel / Image Preview */}
                <div className="mt-5">
                  <ProjectCarousel images={projectImages} title={project.title} />
                </div>

                {/* Title & Subtitle */}
                <h3 className="mt-5 text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-brand">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-muted-foreground">{project.subtitle}</p>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                  {project.description}
                </p>

                {/* Bullet highlights */}
                <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span className="leading-relaxed">{h}</span>
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
                      className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-xs font-medium text-white shadow-2xs transition-colors hover:bg-brand/90"
                    >
                      Visitar Proyecto
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>

                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary px-3.5 py-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary/80"
                      >
                        <Code2 className="h-3.5 w-3.5 text-muted-foreground" />
                        Código fuente
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* GitHub Callout Banner */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-border bg-card p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-secondary p-2.5 text-foreground">
            <GithubIcon className="h-5 w-5 text-brand" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground">Código &amp; Documentación en GitHub</h4>
            <p className="text-xs text-muted-foreground">Explora mis repositorios e implementaciones públicas.</p>
          </div>
        </div>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary/80 shrink-0"
        >
          <span>Ver GitHub</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  )
}
