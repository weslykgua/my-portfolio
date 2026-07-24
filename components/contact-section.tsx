"use client"

import { useState } from "react"
import { profile } from "@/lib/data"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { SectionHeading } from "@/components/section-heading"
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border py-16 md:py-24">
      <SectionHeading index="07" title="Contacto" />

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <h3 className="text-pretty text-3xl font-extrabold tracking-tight md:text-4xl">
            Construyamos soluciones de alto impacto juntos.
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Estoy disponible para proyectos Full Stack, desarrollo de plataformas web y móviles escalables, fintech, Web3 o asesorías técnicas. La forma más rápida de contactarme es por email o teléfono.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary">
                <Mail className="h-5 w-5 text-brand" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-mono text-muted-foreground uppercase">Email</p>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${profile.email}?subject=Contacto%20desde%20Portafolio%20Web`}
                    className="font-medium text-foreground hover:text-brand transition-colors"
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
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                  {copied && <span className="font-mono text-xs text-green-500">¡Copiado!</span>}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary">
                <Phone className="h-5 w-5 text-brand" />
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground uppercase">Teléfono / WhatsApp</p>
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                  className="font-medium text-foreground hover:text-brand transition-colors"
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
                <p className="text-xs font-mono text-muted-foreground uppercase">Ubicación</p>
                <p className="font-medium text-foreground">{profile.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Card */}
        <div className="flex flex-col justify-between rounded-xl border border-border/80 bg-card p-6 shadow-sm md:p-8">
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-brand">
              Redes profesionales
            </h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Revisa mi código en GitHub o conectemos profesionalmente en LinkedIn:
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
                    <p className="font-mono text-xs text-muted-foreground">linkedin.com/in/wcagua</p>
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
                    <p className="font-mono text-xs text-muted-foreground">github.com/weslykgua</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row gap-3">
            <a
              href={`mailto:${profile.email}?subject=Contacto%20desde%20Portafolio%20Web`}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-medium text-primary-foreground shadow transition-opacity hover:opacity-90 active:scale-95 cursor-pointer"
            >
              Enviar correo electrónico
              <Mail className="h-4 w-4" />
            </a>

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent("Contacto desde Portafolio Web")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary/80 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              Abrir Gmail Web
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
