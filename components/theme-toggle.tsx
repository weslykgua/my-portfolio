"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(false)
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme === "dark") {
      setIsDark(true)
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
    } else if (storedTheme === "light") {
      setIsDark(false)
      document.documentElement.classList.remove("dark")
      document.documentElement.classList.add("light")
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setIsDark(prefersDark)
      if (prefersDark) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.add("light")
      }
    }
  }, [])

  const toggleTheme = () => {
    const nextDark = !isDark
    setIsDark(nextDark)
    if (nextDark) {
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      document.documentElement.classList.add("light")
      localStorage.setItem("theme", "light")
    }
  }

  if (!mounted) {
    return <div className="h-9 w-9 rounded-lg border border-border bg-secondary/50" />
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Cambiar tema de color"
      title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background p-2 text-foreground shadow-xs transition-all hover:bg-secondary hover:text-brand active:scale-95 cursor-pointer"
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-amber-400 transition-transform duration-200 hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 text-foreground/80 transition-transform duration-200 hover:-rotate-12" />
      )}
    </button>
  )
}

