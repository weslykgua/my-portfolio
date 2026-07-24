import React from "react"
import { SectionHeading } from "@/components/section-heading"
import { ArrowRight, Cpu, Database, Globe, Layers, Server, ShieldCheck, Smartphone, Zap } from "lucide-react"

export function ArchitectureSection() {
  return (
    <section id="architecture" className="scroll-mt-20 border-t border-border py-16 md:py-24">
      <SectionHeading index="03" title="Arquitectura de Sistemas" />

      <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground text-sm sm:text-base">
        Diseño y participo en arquitecturas Full Stack preparadas para escalar: desde integración multichain en Web3 hasta ecosistemas monorepo móviles con comunicación en tiempo real.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Fintech Multichain Architecture Diagram */}
        <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 font-mono text-xs font-semibold text-purple-400">
                <Zap className="h-3.5 w-3.5" /> Fintech &amp; Web3
              </span>
              <span className="font-mono text-xs text-muted-foreground">CLP Coin (CLPC)</span>
            </div>

            <h3 className="mt-4 text-xl font-bold text-foreground">
              Arquitectura Multichain &amp; Precisión Financiera
            </h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Integración de wallets Web3 con precisión matemática decimal en 5 redes EVM y red Solana.
            </p>

            {/* Visual Flow Pipeline */}
            <div className="mt-6 space-y-3">
              {/* Flow step 1 */}
              <div className="rounded-xl border border-border/60 bg-secondary/30 p-3.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-foreground">
                  <Smartphone className="h-4 w-4 text-brand" />
                  <span>Frontend Client Layer</span>
                </div>
                <p className="mt-1 font-mono text-xs text-muted-foreground pl-6">
                  Vue 3 · TypeScript · Pinia · Big.js (Cálculos de balance de precisión)
                </p>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center py-0.5">
                <ArrowRight className="h-4 w-4 text-muted-foreground rotate-90" />
              </div>

              {/* Flow step 2 */}
              <div className="rounded-xl border border-border/60 bg-secondary/30 p-3.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-foreground">
                  <Globe className="h-4 w-4 text-purple-400" />
                  <span>Web3 Integration &amp; Protocols</span>
                </div>
                <p className="mt-1 font-mono text-xs text-muted-foreground pl-6">
                  Web3.js · WalletConnect · Event Listeners
                </p>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center py-0.5">
                <ArrowRight className="h-4 w-4 text-muted-foreground rotate-90" />
              </div>

              {/* Flow step 3 */}
              <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-3.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-300">
                  <Layers className="h-4 w-4 text-purple-400" />
                  <span>Multichain Blockchain Infra</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5 pl-6">
                  {["Ethereum", "Polygon", "BNB Chain", "Optimism", "Arbitrum", "Solana"].map((chain) => (
                    <span key={chain} className="rounded-md border border-purple-500/20 bg-purple-500/10 px-2 py-0.5 font-mono text-[10px] text-purple-300">
                      {chain}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Stack Monorepo Architecture Diagram */}
        <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 font-mono text-xs font-semibold text-blue-400">
                <Server className="h-3.5 w-3.5" /> Full Stack Monorepo
              </span>
              <span className="font-mono text-xs text-muted-foreground">Forgy Platform</span>
            </div>

            <h3 className="mt-4 text-xl font-bold text-foreground">
              App Móvil, APIs REST &amp; WebSockets
            </h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Ecosistema completo con motor de recomendación heurístico, persistencia relacional y WebSockets.
            </p>

            {/* Visual Flow Pipeline */}
            <div className="mt-6 space-y-3">
              {/* Flow step 1 */}
              <div className="rounded-xl border border-border/60 bg-secondary/30 p-3.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-foreground">
                  <Smartphone className="h-4 w-4 text-blue-400" />
                  <span>Hybrid Mobile App</span>
                </div>
                <p className="mt-1 font-mono text-xs text-muted-foreground pl-6">
                  Ionic Framework · Vue 3 · Capacitor (iOS / Android)
                </p>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center py-0.5">
                <ArrowRight className="h-4 w-4 text-muted-foreground rotate-90" />
              </div>

              {/* Flow step 2 */}
              <div className="rounded-xl border border-border/60 bg-secondary/30 p-3.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-foreground">
                  <Cpu className="h-4 w-4 text-emerald-400" />
                  <span>Node.js / Express Server &amp; Real-time</span>
                </div>
                <p className="mt-1 font-mono text-xs text-muted-foreground pl-6">
                  API REST · Socket.io (WebSockets) · Motor Heurístico TypeScript
                </p>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center py-0.5">
                <ArrowRight className="h-4 w-4 text-muted-foreground rotate-90" />
              </div>

              {/* Flow step 3 */}
              <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-3.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-300">
                  <Database className="h-4 w-4 text-blue-400" />
                  <span>Relational Database &amp; Infra</span>
                </div>
                <p className="mt-1 font-mono text-xs text-muted-foreground pl-6">
                  PostgreSQL · Prisma ORM · Docker · Railway / Vercel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
