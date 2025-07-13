# 🎨 Portafolio Personal

Un portafolio web moderno y elegante construido con Next.js, Tailwind CSS y Framer Motion.

## ✨ Características

- **Diseño Minimalista**: Interfaz limpia y moderna inspirada en sitios como bohler.dev
- **Animaciones Suaves**: Transiciones fluidas usando Framer Motion
- **Totalmente Responsivo**: Optimizado para todos los dispositivos
- **SEO Optimizado**: Metadatos y estructura semántica
- **Rendimiento Optimizado**: Carga rápida y eficiente

## 🚀 Tecnologías

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos
- **Inter & Space Grotesk** - Tipografías

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/portafolio.git
cd portafolio
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🎯 Personalización

### Información Personal
Edita los siguientes archivos para personalizar tu información:

- `src/app/layout.tsx` - Metadatos del sitio
- `src/components/Hero.tsx` - Nombre y título profesional
- `src/components/About.tsx` - Descripción personal y habilidades
- `src/components/Projects.tsx` - Tus proyectos
- `src/components/Experience.tsx` - Experiencia laboral
- `src/components/Contact.tsx` - Información de contacto

### Colores y Estilos
Los colores y estilos se pueden personalizar en:
- `tailwind.config.ts` - Configuración de Tailwind
- `src/app/globals.css` - Estilos globales

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Hero.tsx
    ├── About.tsx
    ├── Projects.tsx
    ├── Experience.tsx
    └── Contact.tsx
```

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente que es un proyecto Next.js
3. El sitio se desplegará automáticamente

### Otros Proveedores
El proyecto se puede desplegar en cualquier proveedor que soporte Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 📝 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Ejecutar ESLint

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

Hecho con ❤️ usando Next.js y Framer Motion 