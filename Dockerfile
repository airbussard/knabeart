# Build Stage
FROM node:20-alpine AS builder

WORKDIR /app

# Kopiere package files
COPY package*.json ./

# Installiere Dependencies
RUN npm ci

# Kopiere Source Code
COPY . .

# Build the Next.js app (ohne Turbopack für Production)
RUN npm run build

# Production Stage
FROM node:20-alpine AS runner

WORKDIR /app

# Erstelle einen non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Kopiere nur die benötigten Files vom Builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Erstelle uploads Ordner für Bilder
RUN mkdir -p /app/public/uploads
RUN chown -R nextjs:nodejs /app/public/uploads

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV NODE_ENV production

CMD ["node", "server.js"]