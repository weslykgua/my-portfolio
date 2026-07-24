import type { Profile, Experience, Project, SkillCategory, Education } from "@/lib/types"

export const profile: Profile = {
  name: "Wesly Alexander Cagua Romero",
  shortName: "Wesly Cagua",
  headline: "Desarrollador Full Stack | Node.js · TypeScript · Vue 3",
  role: "Ingeniero en Informática & Full Stack Developer",
  location: "Santiago, Región Metropolitana, Chile",
  tagline: "Construyo productos fintech y Web3 en producción con Vue 3, TypeScript y Node.js.",
  summary:
    "Ingeniero en Informática y Desarrollador Full Stack con más de 2 años de experiencia construyendo aplicaciones web y móviles escalables. Especializado en Vue 3, TypeScript y Node.js, con experiencia real en producción desarrollando plataformas fintech y Web3. Actualmente ampliando mi stack hacia React y Next.js, este mismo portafolio está construido con Next.js 16, React 19 y Tailwind CSS v4.",
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
    product: "CLP Coin (CLPC)",
    productUrl: "https://clpc.cash",
    description:
      "Desarrollador Full Stack especializado en Vue 3, TypeScript, Node.js y tecnologías Web3, participando en el diseño, desarrollo y evolución de plataformas financieras basadas en blockchain. He contribuido al desarrollo de CLP Coin (CLPC), una stablecoin respaldada 1:1 por el Peso Chileno, construyendo soluciones escalables que integran infraestructura blockchain con procesos financieros tradicionales.",
    highlights: [
      "Diseñé e implementé funcionalidades para una arquitectura multichain, integrando redes EVM (Ethereum, Polygon, BNB Smart Chain, Optimism y Arbitrum) y Solana mediante Web3.js y WalletConnect.",
      "Implementé Big.js para garantizar precisión en operaciones financieras y cálculos de balances, evitando errores derivados de la aritmética de punto flotante.",
      "Diseñé componentes reutilizables y una arquitectura frontend modular basada en Vue 3, TypeScript y Pinia, facilitando la escalabilidad y el mantenimiento de la aplicación.",
      "Optimicé la experiencia de usuario mediante Infinite Scroll, mejoras de rendimiento y resolución de incidencias complejas relacionadas con MetaMask, WalletConnect y eventos blockchain.",
      "Participé activamente en revisiones técnicas, definición de soluciones, mejora continua y desarrollo colaborativo bajo metodologías Agile.",
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
      "Big.js",
      "Figma",
      "Axios",
      "REST APIs",
      "Bootstrap 5",
      "Git",
      "GitLab",
      "Agile",
    ],
  },
  {
    role: "Práctica Profesional - Desarrollador Full Stack",
    company: "T5F SpA",
    period: "Enero 2024 – Marzo 2024",
    type: "Remoto",
    product: "CLP Coin (CLPC)",
    productUrl: "https://clpc.cash",
    highlights: [
      "Integré 12 Merge Requests a producción en 3 meses, contribuyendo a funcionalidades críticas desde el primer mes.",
      "Desarrollé la interfaz de operaciones Point of Sale (PoS) del token CLPC.",
      "Implementé un sistema automatizado para visualizar la versión de los smart contracts, eliminando configuraciones manuales.",
      "Mejoré la experiencia de usuario con un nuevo sistema de gestión de cookies y manejo dinámico de errores HTTP.",
    ],
    skills: ["Vue 3", "TypeScript", "Node.js", "REST APIs", "Bootstrap 5", "GitLab"],
  },
]

export const projects: Project[] = [
  {
    title: "CLP Coin (CLPC)",
    subtitle: "Plataforma Fintech & Stablecoin backed 1:1 por CLP",
    badge: "Producción",
    description:
      "Stablecoin fintech orientada a la digitalización del peso chileno. Plataforma multichain (5 EVM + Solana) con gestión de wallets digitales, transferencias financieras precisas y conexión directa con contratos inteligentes.",
    year: "2024 - Presente",
    highlights: [
      "Arquitectura multichain en 5 redes EVM y Solana",
      "Cálculo financiero de precisión decimal con Big.js",
      "Integración de billeteras digitales: MetaMask y WalletConnect",
    ],
    tags: [
      "Vue 3",
      "TypeScript",
      "Node.js",
      "Pinia",
      "Vite",
      "Web3.js",
      "WalletConnect",
      "Big.js",
      "REST APIs",
    ],
    link: "https://clpc.cash",
  },
  {
    title: "Forgy Platform",
    subtitle: "Plataforma de gestión de entrenamientos y nutrición fitness",
    badge: "Proyecto Destacado 2026",
    description:
      "Ecosistema full-stack para planificación de rutinas, registro de sesiones y análisis de progreso físico con un motor heurístico de recomendaciones personalizadas.",
    year: "2026",
    highlights: [
      "Arquitectura Monorepo Full Stack: API REST (Node.js/Express) + App móvil híbrida (Ionic, Vue 3, Capacitor)",
      "Motor heurístico de recomendaciones en TypeScript que analiza volumen, frecuencia, hábitos de sueño e hidratación",
      "Modelo relacional en PostgreSQL con Prisma ORM y comunicación en tiempo real con WebSockets (Socket.io)",
      "Autenticación segura (JWT, Bcrypt, Helmet, Rate limiting) y pruebas unitarias con Jest",
      "Despliegue automatizado con Docker en Railway (backend) y Vercel (frontend)",
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
      "JWT",
      "Jest",
      "Railway",
      "Vercel",
    ],
    link: "https://forgy-mobile-app.vercel.app",
    repo: "https://github.com/weslykgua/forgy_platform",
  },
  {
    title: "Portafolio Profesional Full Stack",
    subtitle: "Plataforma web personal de presentación profesional y proyectos",
    badge: "Proyecto Personal 2026",
    description:
      "Aplicación web moderna desarrollada con el stack más reciente de React y Next.js. Diseñada con enfoque en rendimiento estático (SSG), arquitectura modular de componentes cliente/servidor, diseño responsivo y optimización SEO.",
    year: "2026",
    highlights: [
      "Desarrollado con Next.js 16 (App Router, Turbopack) y React 19 para generación estática de alto rendimiento",
      "Estilizado responsivo y accesible con Tailwind CSS v4, componentes modulares y modo oscuro/claro",
      "Navegación fluida con smooth scrolling y micro-interacciones táctiles",
    ],
    tags: [
      "React 19",
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS v4",
      "Lucide React",
      "Turbopack",
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
    items: ["Node.js", "Express", "APIs REST", "Socket.io (WebSockets)"],
  },
  {
    title: "Bases de datos",
    items: ["PostgreSQL", "Prisma ORM", "MongoDB / NoSQL", "Modelado relacional", "Indexación"],
  },
  {
    title: "Testing & DevOps",
    items: [
      "Jest",
      "Docker",
      "Docker Compose",
      "Kubernetes (Fundamentos)",
      "Railway",
      "Vercel",
      "Git / GitHub / GitLab",
      "Postman",
      "CI/CD",
    ],
  },
  {
    title: "Web3 / Blockchain",
    items: [
      "Web3.js",
      "WalletConnect",
      "Wallet Standard",
      "Big.js",
      "Multichain EVM",
    ],
  },
  {
    title: "Seguridad & Otros",
    items: [
      "JWT",
      "Bcrypt",
      "Helmet",
      "Rate Limiting",
      "Python (POO, Análisis de Datos, ML)",
      "Metodologías Ágiles (Scrum / Kanban)",
      "IA como Herramienta (Claude, ChatGPT)",
    ],
  },
]

export const education: Education = {
  degree: "Ingeniería en Informática (Computer Science)",
  institution: "DUOC UC",
  period: "2022 – 2026",
  location: "Santiago de Chile",
  featuredCourses: [
    "Arquitectura y Calidad de Software",
    "Análisis y Desarrollo de Modelos de Datos",
    "Inteligencia de Negocios",
    "Gestión de Proyectos Informáticos",
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
  "Tengo 23 años y soy Ingeniero en Informática y Desarrollador Full Stack. Me proyecto profesionalmente como alguien capaz de proponer ideas innovadoras y desarrollar soluciones técnicas que ayuden a las personas, simplifiquen procesos complejos y generen un impacto positivo real.",
  "Mi filosofía diaria se basa en la sobrecarga progresiva y la disciplina constante: me apasiona entrenar en el gimnasio para fortalecer mi estado físico y mental, enfocándome en avanzar día a día superando mis marcas con mayores pesos.",
  "Disfruto profundamente de la lectura clásica y la filosofía, siendo La Odisea de Homero una de mis obras favoritas. Me apasiona estudiar la historia antigua y la mitología nórdica para extraer lecciones sobre resiliencia, estrategia y liderazgo aplicables al día a día.",
  "Mi lema de vida y trabajo es la metodología Kaizen (mejora continua) mediante el ciclo PDCA (Plan, Do, Check, Act): identificar oportunidades, implementar soluciones, analizar datos reales con feedback humano y estandarizar procesos optimizados de alta calidad."
]
