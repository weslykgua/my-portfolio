import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { profile } from "@/lib/data"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <ArchitectureSection />
        <SkillsSection />
        <EducationSection />
        <AboutSection />
        <ContactSection />
      </main>
      <footer className="border-t border-border mt-16 bg-card/30">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span>&copy; {new Date().getFullYear()} {profile.name}</span>
            <span>•</span>
            <span>{profile.location}</span>
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            Portafolio Profesional - Full Stack Developer
          </p>
        </div>
      </footer>
    </div>
  )
}
