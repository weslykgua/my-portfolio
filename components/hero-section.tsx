"use client"

import React from "react"
import { profile } from "@/lib/data"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { getGmailUrl, scrollToSection } from "@/lib/utils"
import { ArrowUpRight, Globe, Mail, MapPin, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section id="top" className="pt-12 pb-12 md:pt-20 md:pb-16">
      {/* Availability Status */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Disponible para trabajar
        </div>

        <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-brand" />
          <span>{profile.location}</span>
        </div>
      </div>

      {/* Name and Headline */}
      <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
        {profile.name}
      </h1>

      <p className="mt-3 text-lg font-medium text-brand md:text-xl">
        {profile.headline}
      </p>

      {/* Hero short quote tagline */}
      <blockquote className="mt-5 border-l-2 border-brand/80 pl-4 text-base italic text-muted-foreground md:text-lg">
        &ldquo;{profile.tagline}&rdquo;
      </blockquote>

      {/* Summary */}
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">
        {profile.summary}
      </p>

      {/* Languages */}
      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Idiomas:
        </span>
        {profile.languages.map((lang) => (
          <span
            key={lang.name}
            className="inline-flex items-center gap-1 rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs text-foreground font-medium"
          >
            <Globe className="h-3 w-3 text-muted-foreground" />
            <span>{lang.name}:</span> <span className="text-muted-foreground">{lang.level}</span>
          </span>
        ))}
      </div>

      {/* Actions & Socials */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#experience"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("#experience")
          }}
          className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white shadow-xs transition-colors hover:bg-brand/90"
        >
          Ver experiencia
          <ArrowUpRight className="h-4 w-4" />
        </a>

        <a
          href={getGmailUrl(profile.email)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground shadow-xs transition-colors hover:bg-secondary hover:text-brand cursor-pointer"
        >
          <Mail className="h-4 w-4 text-brand" />
          {profile.email}
        </a>

        <a
          href={`tel:${profile.phone.replace(/\s+/g, "")}`}
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground shadow-xs transition-colors hover:bg-secondary hover:text-brand"
        >
          <Phone className="h-4 w-4 text-brand" />
          {profile.phone}
        </a>

        <div className="flex items-center gap-2 pl-2">
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de LinkedIn"
            className="rounded-lg border border-border bg-card p-2.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de GitHub"
            className="rounded-lg border border-border bg-card p-2.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

