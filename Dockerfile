# Build Stage
FROM node:20-alpine AS builder

WORKDIR /app

# Kopiere package files
COPY package*.json ./

# Installiere Dependencies
RUN npm ci

# Kopiere Source Code
COPY . .

# Build the Next.js app
RUN npm run build

# Production Stage
FROM node:20-alpine AS runner

WORKDIR /app

# Erstelle einen non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Kopiere die standalone Next.js app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# WICHTIG: Kopiere public Ordner mit allen Bildern
COPY --from=builder /app/public ./public

# Erstelle uploads Ordner für zukünftige Bilder
RUN mkdir -p /app/public/uploads && \
    chown -R nextjs:nodejs /app

# Wechsle zum non-root user
USER nextjs

# Exponiere Port 3000
EXPOSE 3000

# Setze Umgebungsvariablen
ENV PORT=3000
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0

# Starte die App mit explizitem Hostname
CMD ["node", "server.js"]