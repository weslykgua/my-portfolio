import React from "react"

export function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function TechIcon({ name, className = "h-3.5 w-3.5" }: { name: string; className?: string }) {
  const n = name.toLowerCase().trim()

  if (n.includes("figma")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 12A3 3 0 1 1 9 9a3 3 0 0 1 3 3z" fill="#1ABCFE" />
        <path d="M6 18a3 3 0 0 1 3-3h3v3a3 3 0 0 1-6 0z" fill="#0ACF83" />
        <path d="M6 6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3z" fill="#F24E1E" />
        <path d="M12 3h3a3 3 0 0 1 0 6h-3V3z" fill="#FF7262" />
        <path d="M15 15a3 3 0 1 1 0-6h-3v3a3 3 0 0 1 3 3z" fill="#A259FF" />
      </svg>
    )
  }

  if (n.includes("vue")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M2 3h3.5L12 15l6.5-12H22L12 21 2 3z" fill="#41B883" />
        <path d="M6.5 3h3.5L12 8.5 14 3h3.5L12 12 6.5 3z" fill="#35495E" />
      </svg>
    )
  }

  if (n.includes("react")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      </svg>
    )
  }

  if (n.includes("next")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 16V8l8 9.5V8" />
      </svg>
    )
  }

  if (n.includes("typescript") || n === "ts") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="20" height="20" x="2" y="2" rx="4" fill="#3178C6" />
        <path d="M11.5 15.5c-.8.5-1.8.7-2.7.4-1-.3-1.6-1.1-1.6-2.2v-4.2h2.2v3.8c0 .6.4 1 1 1s1-.4 1-1V9.5h2.2v6h-2.1zM15 15.2c.5.3 1.2.4 1.8.4.9 0 1.5-.4 1.5-1 0-.5-.4-.8-1.2-1.1l-.8-.3c-1.3-.5-2-1.3-2-2.4 0-1.6 1.4-2.6 3.4-2.6 1 0 1.9.2 2.5.6l-.7 1.5c-.5-.3-1.2-.5-1.8-.5-.8 0-1.3.3-1.3.8 0 .4.3.7 1.1 1l.8.3c1.5.5 2.1 1.4 2.1 2.5 0 1.7-1.4 2.7-3.7 2.7-1.1 0-2.2-.3-2.9-.8l.7-1.6z" fill="#FFF" />
      </svg>
    )
  }

  if (n.includes("javascript") || n === "js") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="20" height="20" x="2" y="2" rx="4" fill="#F7DF1E" />
        <path d="M12.5 16.5c.6.4 1.4.6 2.1.6 1 0 1.6-.4 1.6-1.1 0-.7-.5-1-1.4-1.4l-.6-.2c-1.6-.6-2.6-1.5-2.6-3 0-1.8 1.4-3.1 3.8-3.1 1.2 0 2.2.3 2.9.8l-.8 1.7c-.6-.4-1.3-.6-2.1-.6-.9 0-1.4.4-1.4 1 0 .6.4.9 1.4 1.3l.6.2c1.8.7 2.7 1.6 2.7 3.2 0 2-1.5 3.3-4.1 3.3-1.3 0-2.6-.4-3.4-1l.7-1.7zm-6.2.2c.6.4 1.3.6 2 .6.9 0 1.4-.4 1.4-1.4v-7.2h2.2v7.3c0 2.2-1.3 3.3-3.4 3.3-1.3 0-2.4-.4-3.1-1l.9-1.6z" fill="#000" />
      </svg>
    )
  }

  if (n.includes("node")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2z" fill="#5FA04E" />
        <path d="M12 4.5l7 3.9v7.8l-7 3.9-7-3.9V8.4l7-3.9z" fill="#333" />
      </svg>
    )
  }

  if (n.includes("python")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M11.8 2c-5.2 0-4.9 2.3-4.9 2.3l.1 2.3h5V8H4.7S2 7.7 2 13c0 5.2 2.3 5 2.3 5h1.4v-2c0-2.3 1.9-4.2 4.2-4.2h5c2.3 0 4.2-1.9 4.2-4.2V4.3S19.4 2 11.8 2zm-2.7 1.6c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" fill="#3776AB" />
        <path d="M12.2 22c5.2 0 4.9-2.3 4.9-2.3l-.1-2.3h-5V16h7.3s2.7.3 2.7-5c0-5.2-2.3-5-2.3-5h-1.4v2c0 2.3-1.9 4.2-4.2 4.2h-5c-2.3 0-4.2 1.9-4.2 4.2v5.5s-.3 2.3 7.3 2.3zm2.7-1.6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="#FFD43B" />
      </svg>
    )
  }

  if (n.includes("postgres")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14.5c-2.5 0-4-1.5-4-3.5s1.5-3.5 4-3.5 4 1.5 4 3.5-1.5 3.5-4 3.5z" fill="#336791" />
      </svg>
    )
  }

  if (n.includes("mongo")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2s-5 6.5-5 11c0 3.5 2.5 6 5 6s5-2.5 5-6c0-4.5-5-11-5-11z" fill="#47A248" />
      </svg>
    )
  }

  if (n.includes("prisma")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#2D3748" strokeWidth="2">
        <path d="M4 20l8-16 8 16H4z" />
        <path d="M12 4v16" />
      </svg>
    )
  }

  if (n.includes("docker")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M13.9 11h2.2v2.2h-2.2V11zm-3.2 0h2.2v2.2h-2.2V11zm-3.2 0h2.2v2.2H7.5V11zm-3.2 0h2.2v2.2H4.3V11zm9.6-3.2h2.2v2.2h-2.2V7.8zm-3.2 0h2.2v2.2h-2.2V7.8zm-3.2 0h2.2v2.2H7.5V7.8zm6.4-3.3h2.2v2.2h-2.2V4.5zM2 14.5C2 17.5 4.5 20 12 20s10-2.5 10-5.5c-1 0-2.5.5-4 0-1.5-.5-2-2-4-2s-3.5 1-6 1-4.5-.5-6-1z" fill="#2496ED" />
      </svg>
    )
  }

  if (n.includes("git")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M21.7 10.4L13.6 2.3c-.4-.4-1-.4-1.4 0L9.4 5.1l2.5 2.5c.3-.1.7 0 .9.3.3.3.4.8.2 1.2l2.4 2.4c.4-.2.9-.1 1.2.2.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0-.3-.3-.4-.8-.2-1.2l-2.3-2.3v3.7c.1.1.2.3.2.4 0 .6-.4 1-1 1s-1-.4-1-1c0-.4.2-.8.6-.9V8.8c-.4-.1-.6-.5-.6-.9 0-.3.1-.7.4-.9L9.4 4.5 2.3 11.6c-.4.4-.4 1 0 1.4l8.1 8.1c.4.4 1 .4 1.4 0l9.9-9.9c.4-.4.4-1 0-1.4z" fill="#F05032" />
      </svg>
    )
  }

  if (n.includes("web3") || n.includes("solana") || n.includes("wallet") || n.includes("blockchain")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    )
  }

  if (n.includes("tailwind")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6 1 2.3 1.7C13.7 12 15 13.3 18 13.3c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-1-2.3-1.7C16.3 7.3 15 6 12 6zm-6 6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6 1 2.3 1.7C7.7 18 9 19.3 12 19.3c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-1-2.3-1.7C10.3 13.3 9 12 6 12z" fill="#38BDF8" />
      </svg>
    )
  }

  if (n.includes("bootstrap")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="20" height="20" x="2" y="2" rx="4" fill="#7952B3" />
        <path d="M8 6h4.5c1.8 0 3 1 3 2.3 0 1-.6 1.8-1.5 2.1 1.2.3 2 1.2 2 2.4 0 1.6-1.3 2.7-3.3 2.7H8V6zm2.2 1.8v2.6h2c.8 0 1.3-.4 1.3-1.3 0-.8-.5-1.3-1.3-1.3h-2zm0 4.4v3h2.3c.9 0 1.5-.5 1.5-1.5 0-1-.6-1.5-1.5-1.5h-2.3z" fill="#FFF" />
      </svg>
    )
  }

  if (n.includes("vite")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M21.5 3.5L12.5 21 2.5 3.5l19 0z" fill="#646CFF" />
        <path d="M12.5 21L7 10h10l-4.5 11z" fill="#BD34FE" />
      </svg>
    )
  }

  if (n.includes("express")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 12h16M12 4v16" />
      </svg>
    )
  }

  if (n.includes("jest")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#C21325" />
        <path d="M8 8h8v8H8z" fill="#FFF" />
      </svg>
    )
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

export function TechBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-border/80 bg-secondary/50 px-2.5 py-1 font-mono text-xs text-foreground transition-colors hover:border-brand/40 hover:bg-secondary">
      <TechIcon name={name} className="h-3.5 w-3.5 shrink-0" />
      <span>{name}</span>
    </span>
  )
}
