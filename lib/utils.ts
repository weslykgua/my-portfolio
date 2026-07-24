import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getGmailUrl(email: string, subject: string = "Contacto desde Portafolio Web") {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`
}



export function scrollToSection(id: string) {
  const targetId = id.startsWith("#") ? id.slice(1) : id
  const element = document.getElementById(targetId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

