# Dockerfile simplificado para Next.js
FROM node:18-alpine

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci --only=production

# Copiar código fuente
COPY . .

# Generar archivo .env básico
RUN echo "NEXT_PUBLIC_SITE_URL=http://localhost:3000" > .env

# Build de la aplicación
RUN npm run build

# Exponer puerto
EXPOSE 3000

# Variables de entorno
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Comando para ejecutar
CMD ["npm", "start"] 