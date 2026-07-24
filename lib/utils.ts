import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function openEmailClient(email: string, subject: string = "Contacto desde Portafolio Web") {
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`
  const a = document.createElement("a")
  a.href = mailtoUrl
  a.click()
}


export function scrollToSection(id: string) {
  const targetId = id.startsWith("#") ? id.slice(1) : id
  const element = document.getElementById(targetId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

