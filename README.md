# 🚀 Wesly Cagua — Portafolio Profesional Full Stack

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js_3-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

Portafolio web profesional de alto rendimiento desarrollado por **Wesly Alexander Cagua Romero** (Ingeniero en Informática y Desarrollador Full Stack). 

La plataforma presenta una arquitectura moderna basada en componentes cliente/servidor, generación estática (SSG) ultrarrápida, sistema de diseño responsivo accesible y alternador de modo oscuro/claro interactivo.

---

## ✨ Características Principales

- ⚡ **Rendimiento Estático (SSG):** Construido sobre **Next.js 16 (App Router & Turbopack)** y **React 19**, compilando páginas pre-renderizadas estáticamente en menos de 2 segundos.
- 🎨 **Modo Oscuro & Claro Animado:** Interruptor interactivo de Sol/Luna con animación bidireccional continua, transiciones de color de 300ms y detección automática de preferencia de sistema (`prefers-color-scheme`) persistido en `localStorage`.
- 🧩 **Arquitectura Modular & Tipado Estricto:** Tipos de datos desacoplados en `lib/types.ts` e información centralizada en `lib/data.ts`.
- 🏷️ **Badges e Iconos Inteligentes:** Renderizado dinámico de logos vectoriales (Vue 3, React, Node.js, TypeScript, PostgreSQL, Docker, Figma, Git, Web3, etc.) para cada tecnología.
- 📬 **Redirección de Correo Garantizada:** Integración directa con Gmail Web y clientes de correo locales para asegurar la composición de mensajes desde cualquier dispositivo o navegador.
- 📱 **Diseño 100% Responsivo:** Adaptado a pantallas móviles, tablets y escritorio con navegación fluida por *smooth scrolling*.
- 🔍 **Optimización SEO:** Metadatos dinámicos, jerarquía semántica HTML5 y favicon vectorial SVG personalizado.

---

## 🛠️ Stack Técnico

| Categoría | Tecnología / Herramienta |
|---|---|
| **Framework Web** | Next.js 16 (App Router, Turbopack) |
| **Biblioteca UI** | React 19 |
| **Lenguaje** | TypeScript 5.7 |
| **Estilos** | Tailwind CSS v4, tw-animate-css |
| **Iconografía** | SVGs personalizados & Lucide React |
| **Gestor de paquetes** | PNPM |

---

## 📁 Estructura del Proyecto

```text
portfolio/
├── app/
│   ├── globals.css         # Estilos globales y tokens de Tailwind CSS v4
│   ├── layout.tsx          # Layout raíz, tipografía Geist y metadatos SEO
│   └── page.tsx            # Página principal integrada
├── components/
│   ├── about-section.tsx   # Sección personal, intereses y estilo de vida
│   ├── contact-section.tsx # Sección de contacto con botón directo a email
│   ├── education-section.tsx # Título universitario y certificaciones Duoc UC
│   ├── experience-section.tsx# Timeline de experiencia profesional (T5F SpA / CLPC)
│   ├── hero-section.tsx    # Presentación principal, headline y botones de acción
│   ├── icons.tsx           # Registro unificado de SVGs y TechBadges inteligentes
│   ├── projects-section.tsx# Tarjetas de proyectos (CLP Coin, Forgy, Portafolio)
│   ├── section-heading.tsx # Encabezados de sección numerados
│   ├── site-header.tsx     # Header pegajoso con navegación y switch de tema
│   ├── skills-section.tsx  # Categorías del stack técnico con logos inteligentes
│   └── theme-toggle.tsx    # Switch interactivo animado Sol / Luna
├── lib/
│   ├── data.ts             # Información y contenido del portafolio
│   ├── types.ts            # Definición de interfaces TypeScript
│   └── utils.ts            # Funciones de utilidad (clsx / tailwind-merge)
├── public/
│   └── icon.svg            # Favicon SVG personalizado
├── next.config.mjs         # Configuración de Next.js
└── package.json            # Dependencias del proyecto
```

---

## 🚀 Instalación y Ejecución Local

### Prerrequisitos
- Node.js 18+ o superior
- PNPM (o NPM / Yarn)

### 1. Clonar el repositorio
```bash
git clone https://github.com/weslykgua/portfolio.git
cd portfolio
```

### 2. Instalar dependencias
```bash
pnpm install
```

### 3. Ejecutar servidor de desarrollo
```bash
pnpm dev
```
Abre tu navegador e ingresa a `http://localhost:3000`.

### 4. Crear build de producción
```bash
pnpm build
pnpm start
```

---

## 👤 Autor

**Wesly Alexander Cagua Romero**  
*Desarrollador Full Stack | Node.js · TypeScript · Vue 3*

- **LinkedIn:** [linkedin.com/in/wcagua](https://linkedin.com/in/wcagua)
- **GitHub:** [github.com/weslykgua](https://github.com/weslykgua)
- **Email:** [weslykgua@gmail.com](mailto:weslykgua@gmail.com)
- **Teléfono:** +56 9 2941 4929
