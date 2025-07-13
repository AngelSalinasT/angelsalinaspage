# 🚀 Guía de Despliegue en EC2

## Prerrequisitos

- Ubuntu EC2 con Docker instalado
- Puerto 3000 abierto en el Security Group
- Acceso SSH a la instancia

## Instalación de Docker (si no está instalado)

```bash
# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Agregar usuario al grupo docker
sudo usermod -aG docker $USER

# Reiniciar sesión o ejecutar:
newgrp docker
```

## Despliegue

### Opción 1: Usando el script automático

```bash
# Dar permisos de ejecución
chmod +x deploy.sh

# Ejecutar despliegue
./deploy.sh
```

### Opción 2: Usando Docker Compose

```bash
# Construir y ejecutar
docker-compose up -d --build

# Ver logs
docker-compose logs -f
```

### Opción 3: Comandos manuales

```bash
# Construir imagen
docker build -t angel-portfolio:latest .

# Ejecutar contenedor
docker run -d \
  --name angel-portfolio \
  -p 3000:3000 \
  --restart unless-stopped \
  -e NODE_ENV=production \
  angel-portfolio:latest
```

## Verificación

```bash
# Verificar que el contenedor esté ejecutándose
docker ps

# Ver logs
docker logs angel-portfolio

# Probar la aplicación
curl http://localhost:3000
```

## Comandos útiles

```bash
# Detener contenedor
docker stop angel-portfolio

# Iniciar contenedor
docker start angel-portfolio

# Reiniciar contenedor
docker restart angel-portfolio

# Ver logs en tiempo real
docker logs -f angel-portfolio

# Entrar al contenedor
docker exec -it angel-portfolio sh

# Eliminar contenedor
docker rm -f angel-portfolio
```

## Configuración de Nginx (Opcional)

Si quieres usar un dominio personalizado:

```bash
# Instalar Nginx
sudo apt install nginx -y

# Crear configuración
sudo nano /etc/nginx/sites-available/portfolio
```

Contenido del archivo:
```nginx
server {
    listen 80;
    server_name tu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Habilitar sitio
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## Variables de entorno

Si necesitas configurar variables de entorno para el formulario de contacto:

```bash
# Crear archivo .env en el servidor
nano .env
```

```env
EMAIL_USER=tu-email@zoho.com
EMAIL_PASS=tu-contraseña-de-aplicación
EMAIL_HOST=smtp.zoho.com
EMAIL_PORT=587
```

## Actualizaciones

Para actualizar la aplicación:

```bash
# Obtener cambios del repositorio
git pull origin main

# Reconstruir y reiniciar
./deploy.sh
```

## Troubleshooting

### Puerto ocupado
```bash
# Ver qué está usando el puerto 3000
sudo netstat -tulpn | grep :3000

# Matar proceso si es necesario
sudo kill -9 <PID>
```

### Problemas de permisos
```bash
# Dar permisos al directorio
sudo chown -R $USER:$USER /ruta/al/proyecto
```

### Logs de errores
```bash
# Ver logs detallados
docker logs angel-portfolio --tail 100
``` 