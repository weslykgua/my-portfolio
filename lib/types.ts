export type Language = {
  name: string
  level: string
}

export type SocialLinks = {
  github: string
  linkedin: string
}

export type Profile = {
  name: string
  shortName: string
  headline: string
  role: string
  location: string
  tagline: string
  summary: string
  email: string
  phone: string
  languages: Language[]
  links: SocialLinks
}

export type Experience = {
  role: string
  company: string
  period: string
  type: string
  product?: string
  productUrl?: string
  description?: string
  highlights: string[]
  skills: string[]
}

export type Project = {
  title: string
  subtitle: string
  badge: string
  description: string
  year: string
  highlights: string[]
  tags: string[]
  link: string
  repo?: string
  image?: string
  images?: string[]
}

export type SkillCategory = {
  title: string
  items: string[]
}

export type Certification = {
  name: string
  issuer: string
  date: string
}

export type Education = {
  degree: string
  institution: string
  period: string
  location: string
  featuredCourses: string[]
  certifications: Certification[]
}
