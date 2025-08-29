# Build Stage
FROM node:20-alpine AS builder

WORKDIR /app

# Kopiere package files
COPY package*.json ./

# Installiere Dependencies
RUN npm ci

# Kopiere Source Code
COPY . .

# Build the Next.js app mit standalone output
RUN npm run build

# Production Stage
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Erstelle einen non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Kopiere nur die benötigten Files vom Builder
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Erstelle uploads Ordner für zukünftige Bilder
RUN mkdir -p /app/public/uploads && \
    chown -R nextjs:nodejs /app/public/uploads

# Wechsle zum non-root user
USER nextjs

# Exponiere Port 3000
EXPOSE 3000

# Setze Umgebungsvariablen
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Health Check für Caprover
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1); });" || exit 1

# Starte den standalone server
CMD ["node", "server.js"]