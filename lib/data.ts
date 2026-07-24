import type { Profile, Experience, Project, SkillCategory, Education } from "@/lib/types"

export const profile: Profile = {
  name: "Wesly Alexander Cagua Romero",
  shortName: "Wesly Cagua",
  headline: "Full Stack Developer | Fintech · Vue 3 · Node.js · TypeScript · Web3",
  role: "Ingeniero en Informática & Full Stack Developer",
  location: "Santiago, Región Metropolitana, Chile",
  tagline: "Construyo software con la meta de aprender algo nuevo en cada proyecto y siempre seguir mejorando.",
  summary:
    "Ingeniero en Informática con experiencia en producción desarrollando plataformas financieras escalables, con especial enfoque en tecnologías Web3. Especializado en Vue 3, TypeScript y Node.js. Actualmente ampliando mi stack hacia React y Next.js 16.",
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
      "Participé en el desarrollo de funcionalidades para una arquitectura multichain, integrando redes EVM (Ethereum, Polygon, BNB Smart Chain, Optimism y Arbitrum) y Solana mediante Web3.js y WalletConnect.",
      "Implementé Big.js para garantizar precisión en operaciones financieras y cálculos de balances, evitando errores derivados de la aritmética de punto flotante.",
      "Desarrollé componentes reutilizables y contribuí a una arquitectura frontend modular basada en Vue 3, TypeScript y Pinia, facilitando la escalabilidad y el mantenimiento de la aplicación.",
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
    subtitle: "Plataforma Fintech con Stablecoin respaldada 1:1 por Peso Chileno",
    badge: "Producción",
    description:
      "Stablecoin fintech orientada a la digitalización del peso chileno. Plataforma multichain con gestión de wallets digitales, transferencias financieras precisas y conexión directa con contratos inteligentes.",
    year: "2024 - Presente",
    highlights: [
      "Desarrollo e integración de módulos nuevos y visor/lector de PDF óptimo para la plataforma",
      "Resolución de incidencias complejas y corrección de errores de conexión en MetaMask y WalletConnect",
      "Cálculo financiero de precisión decimal estricta con Big.js para operaciones de balance",
      "Optimización de la experiencia de usuario (UX), componentes reutilizables y recursos gráficos",
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
    subtitle: "Proyecto de Título (Capstone) · DUOC UC",
    badge: "Trabajo de Título 2026",
    description:
      "Ecosistema full-stack desarrollado y evaluado como Trabajo de Título (Capstone) para la carrera de Ingeniería en Informática en DUOC UC. Plataforma completa para planificación de rutinas, registro de sesiones y análisis de progreso físico con un motor de recomendaciones personalizadas.",
    year: "2026",
    highlights: [
      "Arquitectura Monorepo Full Stack: API REST (Node.js/Express) + App móvil híbrida (Ionic, Vue 3, Capacitor)",
      "Motor de recomendaciones basado en reglas y métricas de entrenamiento en TypeScript (volumen, frecuencia e hidratación)",
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
    title: "DevOps & CI/CD",
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
    title: "Seguridad",
    items: ["JWT", "Bcrypt", "Helmet", "Rate Limiting"],
  },
  {
    title: "IA & Productividad",
    items: [
      "LLM-assisted dev",
      "Revisión de código asistida por IA",
      "Exploración de arquitectura",
      "Python (POO, Análisis de Datos)",
      "Metodologías Ágiles (Scrum / Kanban)",
    ],
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
  "Ingeniero en Informática de 23 años y Full Stack Developer. Me apasiona participar en el desarrollo de soluciones técnicas que simplifiquen procesos complejos, aportando valor real a los usuarios.",
  "Me gusta iterar: probar, medir resultados reales y ajustar según lo que funciona. Es la misma lógica que aplico en el código y en cómo persigo mis propios objetivos, avanzar con ajustes constantes en vez de esperar la versión perfecta."
]
