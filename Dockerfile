FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy application files
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 80 (Caprover default)
EXPOSE 80

# Set environment variables
ENV PORT=80
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0

# Start the application
CMD ["npm", "start"]