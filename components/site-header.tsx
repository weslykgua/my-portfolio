"use client"

import React from "react"
import { profile } from "@/lib/data"
import { ThemeToggle } from "@/components/theme-toggle"
import { Mail } from "lucide-react"

const nav = [
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Educación", href: "#education" },
  { label: "Sobre mí", href: "#about" },
  { label: "Contacto", href: "#contact" },
]

export function SiteHeader() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const targetId = href.replace("#", "")
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  const openEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent("Contacto desde Portafolio Web")}`
    window.open(gmailUrl, "_blank")
    window.location.href = `mailto:${profile.email}?subject=Contacto%20desde%20Portafolio%20Web`
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 sm:px-6 py-3.5">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="group font-mono text-sm font-medium tracking-tight transition-transform active:scale-95 duration-150 shrink-0"
        >
          <span className="text-foreground transition-colors group-hover:text-brand">
            {profile.shortName.toLowerCase().replace(" ", "")}
          </span>
          <span className="text-brand">.dev</span>
        </a>

        {/* Navigation Menu */}
        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="inline-block whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-all duration-150 hover:bg-secondary/60 hover:text-foreground active:scale-95"
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

          <button
            onClick={openEmail}
            type="button"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3.5 py-1.5 text-xs font-medium text-primary-foreground shadow-xs transition-all duration-150 hover:opacity-90 active:scale-95 whitespace-nowrap cursor-pointer"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Contacto</span>
          </button>
        </div>
      </div>
    </header>
  )
}
