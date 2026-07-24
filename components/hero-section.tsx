"use client"

import React from "react"
import { profile } from "@/lib/data"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { getGmailUrl, scrollToSection } from "@/lib/utils"
import { ArrowUpRight, Globe, Mail, MapPin, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section id="top" className="pt-16 pb-14 md:pt-24 md:pb-20">
      {/* Availability Status */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
          </span>
          Disponible para trabajar
        </div>

        <div className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-brand" />
          <span>{profile.location}</span>
        </div>
      </div>

      {/* Name and Headline */}
      <h1 className="mt-6 text-pretty text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
        {profile.name}
      </h1>

      <p className="mt-3 font-mono text-base font-semibold text-brand md:text-lg">
        {profile.headline}
      </p>

      {/* Hero short quote tagline */}
      <blockquote className="mt-6 border-l-2 border-brand pl-4 font-serif text-lg italic text-foreground/90 md:text-xl">
        &ldquo;{profile.tagline}&rdquo;
      </blockquote>

      {/* Summary */}
      <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
        {profile.summary}
      </p>

      {/* Languages & Quick Badges */}
      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="font-mono text-xs font-medium uppercase text-muted-foreground">
          Idiomas:
        </span>
        {profile.languages.map((lang) => (
          <span
            key={lang.name}
            className="inline-flex items-center gap-1 rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-mono text-xs text-foreground"
          >
            <Globe className="h-3 w-3 text-muted-foreground" />
            <strong className="font-semibold">{lang.name}:</strong> {lang.level}
          </span>
        ))}
      </div>

      {/* Actions & Socials */}
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#experience"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("#experience")
          }}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:opacity-90 active:scale-95"
        >
          Ver experiencia
          <ArrowUpRight className="h-4 w-4" />
        </a>

        <a
          href={getGmailUrl(profile.email)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-secondary hover:text-brand cursor-pointer active:scale-95"
        >
          <Mail className="h-4 w-4 text-brand" />
          {profile.email}
        </a>

        <a
          href={`tel:${profile.phone.replace(/\s+/g, "")}`}
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-secondary hover:text-brand active:scale-95"
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
            className="rounded-lg border border-border p-2.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground active:scale-95"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de GitHub"
            className="rounded-lg border border-border p-2.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground active:scale-95"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
