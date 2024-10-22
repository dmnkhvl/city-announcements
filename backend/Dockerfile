FROM oven/bun:1
WORKDIR /app

# Copy package files first
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy Prisma schema
COPY prisma ./prisma/

# Generate Prisma client
RUN bunx prisma generate

# Copy the rest of the application
COPY . .

ENV NODE_ENV production
EXPOSE 3000

# Ensure Prisma client is generated before starting
CMD ["sh", "-c", "bunx prisma generate && bun run start"]