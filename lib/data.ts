import type { Profile, Experience, Project, SkillCategory, Education } from "@/lib/types"

export const profile: Profile = {
  name: "Wesly Alexander Cagua Romero",
  shortName: "Wesly Cagua",
  headline: "Full Stack Developer | Vue 3 · TypeScript · Node.js · React · Next.js · Web3 · Fintech",
  role: "Ingeniero en Informática & Full Stack Developer",
  location: "Santiago, Región Metropolitana, Chile",
  tagline: "Construyo software escalable y de alto impacto con código limpio, arquitectura sólida y mejora continua.",
  summary:
    "Ingeniero en Informática y Full Stack Developer especializado en desarrollo web escalable y plataformas Fintech/Web3. Con experiencia en producción utilizando Vue 3, TypeScript, Node.js, React y Next.js, integrando REST APIs y metodologías Agile para productos digitales de alto rendimiento.",
  email: "weslykgua@gmail.com",
  phone: "+56 9 2941 4929",
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "B2 - Avanzado (Certificado Duoc UC, Dic. 2023)" },
  ],
  links: {
    github: "https://github.com/weslykgua",
    linkedin: "https://linkedin.com/in/wcagua",
  },
}

export const experiences: Experience[] = [
  {
    role: "Desarrollador Full Stack",
    company: "T5F SpA",
    period: "Abril 2024 – Presente",
    type: "Remoto",
    description:
      "Desarrollo Full Stack en la arquitectura y evolución de plataformas financieras, integrando servicios Web3 y sistemas transaccionales con foco en rendimiento y UX.",
    highlights: [
      "Desarrollo e integración de arquitecturas multichain (redes EVM y Solana) consumiendo REST APIs y protocolos Web3.",
      "Implementación de lógica transaccional de precisión decimal para cálculos financieros y gestión de balances.",
      "Construcción de módulos frontend escalables y reutilizables con Vue 3, TypeScript y gestión de estado con Pinia.",
      "Optimización de experiencia de usuario (UX/UI), rendimiento frontend y entregas continuas bajo metodologías Agile.",
    ],
    skills: [
      "Vue 3",
      "TypeScript",
      "Node.js",
      "JavaScript",
      "Pinia",
      "Vite",
      "Web3.js",
      "WalletConnect",
      "REST APIs",
      "Bootstrap 5",
      "Git",
      "GitLab",
      "Agile",
    ],
  },
  {
    role: "Práctica Profesional (Desarrollador Full Stack)",
    company: "T5F SpA",
    period: "Enero 2024 – Marzo 2024",
    type: "Remoto",
    description:
      "Desarrollo frontend y backend de componentes transaccionales e integración de servicios REST para la plataforma web.",
    highlights: [
      "Desarrollo de módulos de pago digital y flujos transaccionales web responsivos.",
      "Implementación de herramientas dinámicas para supervisión e inspección de servicios en la plataforma.",
      "Mejora de la experiencia de usuario con gestión eficiente de sesiones y manejo centralizado de errores HTTP.",
      "Integración continua de funcionalidades clave a producción bajo marco metodológico Agile.",
    ],
    skills: ["Vue 3", "TypeScript", "Node.js", "REST APIs", "Bootstrap 5", "GitLab", "Agile"],
  },
]

export const projects: Project[] = [
  {
    title: "CLP Coin (CLPC)",
    subtitle: "Plataforma Fintech & Web3 con Stablecoin en pesos chilenos",
    badge: "Producción",
    image: "",
    description:
      "Plataforma fintech multichain para gestión de wallets digitales, transferencias financieras precisas y conexión con contratos inteligentes.",
    year: "2024 - Presente",
    highlights: [
      "Integración multichain compatible con redes EVM y Solana mediante Web3.js y WalletConnect.",
      "Lógica de precisión decimal estricta con Big.js para transacciones y balances financieros.",
      "Componentes frontend reutilizables desarrollados en Vue 3 y TypeScript con consumo de REST APIs.",
    ],
    tags: [
      "Vue 3",
      "TypeScript",
      "Node.js",
      "Pinia",
      "Vite",
      "Web3.js",
      "WalletConnect",
      "REST APIs",
      "Fintech",
    ],
    link: "https://clpc.cash",
  },
  {
    title: "Forgy Platform",
    subtitle: "Ecosistema Full Stack Monorepo (Proyecto de Título DUOC UC)",
    badge: "Trabajo de Título 2026",
    image: "",
    description:
      "Plataforma web y móvil para planificación de rutinas y seguimiento con motor de recomendaciones y comunicación en tiempo real.",
    year: "2026",
    highlights: [
      "Arquitectura Full Stack Monorepo: API REST (Node.js/Express) + App móvil híbrida (Ionic, Vue 3, Capacitor).",
      "Modelo relacional con PostgreSQL y Prisma ORM, combinando comunicación en tiempo real vía Socket.io.",
      "Autenticación segura (JWT, Helmet) y contenedores Docker desplegados en Railway y Vercel.",
    ],
    tags: [
      "Node.js",
      "Express",
      "TypeScript",
      "Vue 3",
      "Ionic Framework",
      "Capacitor",
      "Prisma ORM",
      "PostgreSQL",
      "Docker",
      "Socket.io",
      "REST APIs",
    ],
    link: "https://forgy-mobile-app.vercel.app",
    repo: "https://github.com/weslykgua/forgy_platform",
  },
  {
    title: "Portafolio Profesional Full Stack",
    subtitle: "Plataforma web personal optimizada para SEO y rendimiento",
    badge: "Proyecto Personal 2026",
    image: "",
    description:
      "Aplicación web desarrollada con Next.js 16 y React 19, con diseño modular, interfaz responsiva y optimización para ATS y reclutadores.",
    year: "2026",
    highlights: [
      "Construido con Next.js 16 (App Router, Turbopack) y React 19 para generación estática ultrarrápida.",
      "Diseño responsivo con Tailwind CSS v4, componentes accesibles y soporte para modo oscuro/claro.",
      "Navegación optimizada mediante smooth scrolling y estructura semántica SEO.",
    ],
    tags: [
      "React 19",
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS v4",
      "Lucide React",
      "Turbopack",
      "Full Stack",
    ],
    link: "#top",
    repo: "https://github.com/weslykgua",
  },
]

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    items: [
      "Vue 3",
      "React 19",
      "Next.js 16",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS v4",
      "Figma",
      "Ionic Framework",
      "Capacitor",
      "Pinia",
      "Bootstrap 5",
      "Vite",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Socket.io (WebSockets)"],
  },
  {
    title: "IA & Productividad",
    items: [
      "LLM-assisted dev",
      "Revisión de código con IA",
      "Exploración de arquitectura",
      "Python (POO, Análisis de datos)",
      "Metodologías Agile (Scrum / Kanban)",
    ],
  },
  {
    title: "Bases de datos",
    items: ["PostgreSQL", "Prisma ORM", "MongoDB / NoSQL", "Modelado relacional", "Indexación"],
  },
  {
    title: "Web3",
    items: [
      "Web3.js",
      "WalletConnect",
      "Wallet Standard",
      "Big.js",
      "Multichain EVM",
    ],
  },
  {
    title: "DevOps",
    items: [
      "Docker",
      "Docker Compose",
      "CI/CD",
      "Railway",
      "Vercel",
      "Git / GitHub / GitLab",
      "Jest",
      "Postman",
    ],
  },
  {
    title: "Seguridad",
    items: ["JWT", "Bcrypt", "Helmet", "Rate Limiting"],
  },
]

export const education: Education = {
  degree: "Ingeniería en Informática",
  institution: "DUOC UC",
  period: "2022 – 2026",
  location: "Santiago de Chile",
  featuredCourses: [
    "Diseño y Gestión de Requisitos",
    "Calidad de Software",
    "Gestión de Proyectos Informáticos",
    "Arquitectura de Software",
    "Seguridad en Sistemas Computacionales",
    "Big Data / Minería de Datos",
    "Integración de Plataformas",
    "BPM (Business Process Management)",
  ],
  certifications: [
    {
      name: "Internacional en Inglés Avanzado (B2)",
      issuer: "Duoc UC",
      date: "Dic. 2023",
    },
    {
      name: "Inteligencia de Negocios",
      issuer: "Duoc UC",
      date: "Dic. 2025",
    },
    {
      name: "Gestión de Proyectos Informáticos",
      issuer: "Duoc UC",
      date: "Jul. 2025",
    },
    {
      name: "Arquitectura de Software",
      issuer: "Duoc UC",
      date: "Dic. 2024",
    },
    {
      name: "Calidad de Software",
      issuer: "Duoc UC",
      date: "Jul. 2024",
    },
    {
      name: "Análisis y Planificación de Requerimientos Informáticos",
      issuer: "Duoc UC",
      date: "Jul. 2024",
    },
    {
      name: "Análisis y Desarrollo de Modelos de Datos",
      issuer: "Duoc UC",
      date: "Dic. 2023",
    },
    {
      name: "Programación de Software",
      issuer: "Duoc UC",
      date: "Dic. 2022",
    },
  ],
}

export const personalAbout: string[] = [
  "Ingeniero en Informática y Full Stack Developer especializado en desarrollo web escalable y soluciones Fintech/Web3.",
  "Con experiencia práctica en Vue 3, TypeScript, Node.js, React y Next.js, integrando REST APIs y metodologías Agile para construir productos digitales eficientes y mantenibles.",
  "Enfoque de trabajo orientado a resultados: iteración continua, código limpio y optimización constante según necesidades reales de producción.",
]

