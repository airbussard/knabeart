#!/bin/bash

# Docker Cleanup Script für Caprover Server
# Dieses Script muss auf dem Server ausgeführt werden

echo "🧹 Starte Docker Cleanup..."

# Stoppe alle Container die nicht laufen
echo "Entferne gestoppte Container..."
docker container prune -f

# Entferne ungenutzte Images
echo "Entferne ungenutzte Images..."
docker image prune -a -f

# Entferne Build Cache
echo "Entferne Build Cache..."
docker builder prune -a -f

# Entferne ungenutzte Volumes
echo "Entferne ungenutzte Volumes..."
docker volume prune -f

# Entferne ungenutzte Netzwerke
echo "Entferne ungenutzte Netzwerke..."
docker network prune -f

# Zeige Speicherplatz nach Cleanup
echo "📊 Speicherplatz nach Cleanup:"
df -h /
docker system df

echo "✅ Docker Cleanup abgeschlossen!"