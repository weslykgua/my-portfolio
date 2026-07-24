import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Wesly Cagua | Desarrollador Full Stack - Vue 3, TypeScript, Node.js',
  description:
    'Portafolio profesional de Wesly Alexander Cagua Romero, Ingeniero en Informática y Desarrollador Full Stack con experiencia en producción en plataformas Fintech, Web3, Vue 3, TypeScript y Node.js.',
  keywords: [
    'Wesly Cagua',
    'Wesly Alexander Cagua Romero',
    'Full Stack Developer',
    'Desarrollador Full Stack',
    'Vue 3',
    'TypeScript',
    'Node.js',
    'Fintech',
    'Web3',
    'Chile',
    'Santiago',
    'CLP Coin',
    'Forgy Platform',
    'Ingeniero en Informática'
  ],
  authors: [{ name: 'Wesly Alexander Cagua Romero', url: 'https://github.com/weslykgua' }],
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
