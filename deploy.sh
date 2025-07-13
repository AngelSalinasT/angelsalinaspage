#!/bin/bash

echo "🚀 Iniciando despliegue del portafolio..."

# Detener contenedor existente si existe
echo "📦 Deteniendo contenedor existente..."
sudo docker stop angel-portfolio 2>/dev/null || true
sudo docker rm angel-portfolio 2>/dev/null || true

# Eliminar imagen anterior
echo "🗑️ Eliminando imagen anterior..."
sudo docker rmi angel-portfolio:latest 2>/dev/null || true

# Construir nueva imagen
echo "🔨 Construyendo nueva imagen Docker..."
sudo docker build -t angel-portfolio:latest .

# Ejecutar contenedor
echo "▶️ Iniciando contenedor..."
sudo docker run -d \
  --name angel-portfolio \
  -p 3000:3000 \
  --restart unless-stopped \
  -e NODE_ENV=production \
  -e NEXT_TELEMETRY_DISABLED=1 \
  angel-portfolio:latest

# Verificar que el contenedor esté ejecutándose
echo "✅ Verificando estado del contenedor..."
sleep 5
sudo docker ps | grep angel-portfolio

echo "🎉 ¡Despliegue completado!"
echo "🌐 Tu portafolio está disponible en: http://tu-ip-ec2:3000"
echo "📊 Para ver logs: sudo docker logs angel-portfolio"
echo "🛑 Para detener: sudo docker stop angel-portfolio" 