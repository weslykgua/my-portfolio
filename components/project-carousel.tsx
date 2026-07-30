"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Pause,
  Play,
  X,
  ImageIcon,
} from "lucide-react"

interface ProjectCarouselProps {
  images: string[]
  title: string
  autoPlayInterval?: number
}

export function ProjectCarousel({
  images,
  title,
  autoPlayInterval = 4000,
}: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  
  // Touch swipe state
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const minSwipeDistance = 50

  const total = images.length

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total)
  }, [total])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total)
  }, [total])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play effect
  useEffect(() => {
    if (total <= 1 || isPaused || isHovered || isLightboxOpen) return

    const timer = setInterval(() => {
      nextSlide()
    }, autoPlayInterval)

    return () => clearInterval(timer)
  }, [total, isPaused, isHovered, isLightboxOpen, autoPlayInterval, nextSlide])

  // Keyboard navigation when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLightboxOpen) {
        if (e.key === "Escape") setIsLightboxOpen(false)
        if (e.key === "ArrowLeft") prevSlide()
        if (e.key === "ArrowRight") nextSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isLightboxOpen, prevSlide, nextSlide])

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsHovered(true)
    touchStartX.current = e.targetTouches[0].clientX
    touchEndX.current = null
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    setIsHovered(false)
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  if (!images || images.length === 0) {
    return (
      <div className="flex aspect-[16/9] w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border/80 bg-secondary/20 p-4 text-center">
        <div className="rounded-full border border-border bg-card p-3 text-muted-foreground shadow-2xs">
          <ImageIcon className="h-5 w-5 text-brand" />
        </div>
        <div className="text-xs">
          <p className="font-semibold text-foreground">Vista previa del proyecto</p>
          <p className="mt-0.5 text-[11px] text-muted-foreground">Sin capturas de pantalla</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div
        className="group/carousel relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-border bg-secondary/30 select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides Track */}
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, idx) => (
            <div
              key={src + idx}
              className="relative h-full w-full shrink-0 cursor-pointer"
              onClick={() => setIsLightboxOpen(true)}
            >
              <Image
                src={src}
                alt={`Captura ${idx + 1} de ${title}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                priority={idx === 0}
                className="object-cover object-top transition-transform duration-300 group-hover/carousel:scale-[1.01]"
              />
            </div>
          ))}
        </div>

        {/* Top Controls Bar */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none z-10">
          <div className="pointer-events-auto flex items-center gap-1.5 rounded-full bg-background/80 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur-md border border-border/50 shadow-sm">
            <span>
              {currentIndex + 1} / {total}
            </span>
          </div>

          <div className="pointer-events-auto flex items-center gap-1.5">
            {total > 1 && (
              <button
                type="button"
                onClick={() => setIsPaused((prev) => !prev)}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-md border border-border/50 shadow-sm transition-transform hover:scale-105 hover:bg-background active:scale-95 cursor-pointer"
                title={isPaused ? "Reanudar auto-reproducción" : "Pausar auto-reproducción"}
                aria-label={isPaused ? "Reanudar" : "Pausar"}
              >
                {isPaused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
              </button>
            )}

            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-md border border-border/50 shadow-sm transition-transform hover:scale-105 hover:bg-background active:scale-95 cursor-pointer"
              title="Ver en pantalla completa"
              aria-label="Pantalla completa"
            >
              <Maximize2 className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                prevSlide()
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-md border border-border/60 shadow-md transition-all opacity-0 group-hover/carousel:opacity-100 hover:bg-background hover:scale-110 active:scale-95 z-10 cursor-pointer"
              aria-label="Anterior captura"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                nextSlide()
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-md border border-border/60 shadow-md transition-all opacity-0 group-hover/carousel:opacity-100 hover:bg-background hover:scale-110 active:scale-95 z-10 cursor-pointer"
              aria-label="Siguiente captura"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Indicators Dots */}
        {total > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-background/70 px-3 py-1.5 backdrop-blur-md border border-border/40 shadow-sm z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  goToSlide(idx)
                }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? "w-5 bg-brand"
                    : "w-2 bg-foreground/30 hover:bg-foreground/60"
                }`}
                aria-label={`Ir a diapositiva ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox / Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative flex max-h-[90vh] max-w-[95vw] flex-col items-center overflow-hidden rounded-xl bg-card border border-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="flex w-full items-center justify-between border-b border-border px-4 py-3 bg-secondary/50">
              <div className="text-sm font-semibold text-foreground flex items-center gap-2">
                <span>{title}</span>
                <span className="text-xs font-normal text-muted-foreground">
                  ({currentIndex + 1} de {total})
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="rounded-lg p-1 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="relative aspect-[16/9] w-[90vw] max-w-5xl overflow-hidden bg-black/40">
              <Image
                src={images[currentIndex]}
                alt={`Captura modal ${currentIndex + 1} de ${title}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />

              {total > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-md border border-border shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-md border border-border shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                    aria-label="Siguiente"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
