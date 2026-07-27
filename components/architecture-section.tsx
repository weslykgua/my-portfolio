import React from "react"
import { SectionHeading } from "@/components/section-heading"
import { ArrowRight, Globe, Layers, Smartphone, Zap } from "lucide-react"

export function ArchitectureSection() {
  return (
    <section id="architecture" className="scroll-mt-20 border-t border-border py-16 md:py-24">
      <SectionHeading index="05" title="Arquitectura Técnica" />

      <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground text-sm sm:text-base">
        Diseño e implementación de arquitectura Full Stack multichain en Web3: integración de wallets, consumo de REST APIs y precisión matemática decimal estricta en producción.
      </p>

      <div className="mt-10 max-w-3xl">
        {/* Fintech Multichain Architecture Diagram */}
        <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm flex flex-col justify-between md:p-8">
          <div>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 font-mono text-xs font-semibold text-purple-400">
                <Zap className="h-3.5 w-3.5" /> Fintech &amp; Web3
              </span>
              <span className="font-mono text-xs text-muted-foreground">CLP Coin (CLPC)</span>
            </div>

            <h3 className="mt-4 text-xl font-bold text-foreground sm:text-2xl">
              Arquitectura Multichain &amp; Precisión Financiera
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Integración de wallets Web3 con precisión matemática decimal en 5 redes EVM y red Solana.
            </p>

            {/* Visual Flow Pipeline */}
            <div className="mt-6 space-y-3">
              {/* Flow step 1 */}
              <div className="rounded-xl border border-border/60 bg-secondary/30 p-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-foreground">
                  <Smartphone className="h-4 w-4 text-brand" />
                  <span>Frontend Client Layer</span>
                </div>
                <p className="mt-1 font-mono text-xs text-muted-foreground pl-6">
                  Vue 3 · TypeScript · Pinia · Big.js (Cálculos de balance de precisión decimal)
                </p>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center py-0.5">
                <ArrowRight className="h-4 w-4 text-muted-foreground rotate-90" />
              </div>

              {/* Flow step 2 */}
              <div className="rounded-xl border border-border/60 bg-secondary/30 p-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-foreground">
                  <Globe className="h-4 w-4 text-purple-400" />
                  <span>Web3 Integration &amp; REST APIs</span>
                </div>
                <p className="mt-1 font-mono text-xs text-muted-foreground pl-6">
                  Web3.js · WalletConnect · Event Listeners · Axios REST Client
                </p>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center py-0.5">
                <ArrowRight className="h-4 w-4 text-muted-foreground rotate-90" />
              </div>

              {/* Flow step 3 */}
              <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-purple-300">
                  <Layers className="h-4 w-4 text-purple-400" />
                  <span>Multichain Blockchain Infra</span>
                </div>
                <div className="mt-2.5 flex flex-wrap gap-1.5 pl-6">
                  {["Ethereum", "Polygon", "BNB Chain", "Optimism", "Arbitrum", "Solana"].map((chain) => (
                    <span key={chain} className="rounded-md border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 font-mono text-xs text-purple-300">
                      {chain}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

