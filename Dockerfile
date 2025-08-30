FROM node:20-alpine

WORKDIR /app

# Build arguments for environment variables
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy application files
COPY . .

# Set build-time environment variables (use defaults if not provided)
ENV NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL:-https://placeholder.supabase.co}
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=${NEXT_PUBLIC_SUPABASE_ANON_KEY:-placeholder}

# Build the Next.js application
RUN npm run build

# Expose port 80 (Caprover default)
EXPOSE 80

# Set environment variables
ENV PORT=80
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
# Force Next.js to recognize all routes
ENV NEXT_TELEMETRY_DISABLED=1

# Start the application
CMD ["npm", "start"]