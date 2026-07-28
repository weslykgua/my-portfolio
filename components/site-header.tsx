"use client"

import React from "react"
import { profile } from "@/lib/data"
import { ThemeToggle } from "@/components/theme-toggle"
import { getGmailUrl, scrollToSection } from "@/lib/utils"
import { Home, Mail } from "lucide-react"

const nav = [
  { label: "Sobre mí", href: "#about" },
  { label: "Experiencia", href: "#experience" },
  { label: "Stack", href: "#skills" },
  { label: "Proyectos", href: "#work" },
  { label: "Educación", href: "#education" },
  { label: "Contacto", href: "#contact" },
]

export function SiteHeader() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      scrollToSection(href)
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo / Inicio */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-2.5 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-brand/40 hover:bg-secondary shrink-0"
          aria-label="Ir al inicio"
        >
          <Home className="h-3.5 w-3.5 text-brand" />
          <span>Inicio</span>
        </a>

        {/* Navigation Menu */}
        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="inline-block whitespace-nowrap rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions: Theme Toggle & Direct Mailto Contact Button */}
        <div className="flex items-center gap-3 shrink-0">
          <ThemeToggle />

          <a
            href={getGmailUrl(profile.email)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-3.5 py-1.5 text-xs font-medium text-white shadow-2xs transition-colors hover:bg-brand/90 whitespace-nowrap cursor-pointer"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Contacto</span>
          </a>
        </div>
      </div>
    </header>
  )
}

