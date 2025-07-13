import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ángel Salinas - Desarrollador Backend & Automatización con IA',
  description: 'Ingeniero en software especializado en desarrollo backend, automatización e inteligencia artificial aplicada. Transformando ideas en soluciones útiles, funcionales y elegantes.',
  keywords: ['desarrollador', 'backend', 'automatización', 'inteligencia artificial', 'python', 'fastapi', 'tensorflow'],
  authors: [{ name: 'Ángel Salinas' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 