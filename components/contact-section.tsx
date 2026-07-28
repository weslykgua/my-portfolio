"use client"

import { useState } from "react"
import { profile } from "@/lib/data"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { SectionHeading } from "@/components/section-heading"
import { getGmailUrl } from "@/lib/utils"
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border/80 py-12 md:py-16">
      <SectionHeading title="Contacto" />

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            ¿Trabajamos juntos?
          </h3>
          <p className="mt-3 text-base leading-relaxed text-foreground/80">
            Estoy disponible para proyectos Full Stack, desarrollo de plataformas web y móviles escalables, fintech, Web3 o asesorías técnicas.
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary">
                <Mail className="h-5 w-5 text-brand" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email</p>
                <div className="flex items-center gap-2">
                  <a
                    href={getGmailUrl(profile.email)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground hover:text-brand transition-colors text-sm sm:text-base"
                  >
                    {profile.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    type="button"
                    title="Copiar email"
                    className="rounded p-1 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                  {copied && <span className="text-xs font-medium text-emerald-500">¡Copiado!</span>}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary">
                <Phone className="h-5 w-5 text-brand" />
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Teléfono / WhatsApp</p>
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                  className="font-medium text-foreground hover:text-brand transition-colors text-sm sm:text-base"
                >
                  {profile.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary">
                <MapPin className="h-5 w-5 text-brand" />
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Ubicación</p>
                <p className="font-medium text-foreground text-sm sm:text-base">{profile.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Card */}
        <div className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 md:p-8">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Redes profesionales
            </h4>
            <p className="mt-2 text-sm text-foreground/80">
              Explora mis repositorios en GitHub o conectemos en LinkedIn:
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:border-brand/40 hover:bg-secondary/50"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="h-5 w-5 text-brand" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">LinkedIn</p>
                    <p className="text-xs text-muted-foreground">linkedin.com/in/wcagua</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </a>

              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:border-brand/40 hover:bg-secondary/50"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="h-5 w-5 text-brand" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">GitHub</p>
                    <p className="text-xs text-muted-foreground">github.com/weslykgua</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </a>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <a
              href={getGmailUrl(profile.email)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand py-2.5 text-sm font-medium text-white shadow-2xs transition-colors hover:bg-brand/90 cursor-pointer"
            >
              Enviar correo electrónico
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

