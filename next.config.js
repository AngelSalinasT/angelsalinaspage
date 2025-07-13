/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para Docker
  output: 'standalone',
  // Configuración para producción
  experimental: {
    // Optimizaciones para producción
  }
}

module.exports = nextConfig 