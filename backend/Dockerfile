FROM oven/bun:1

WORKDIR /app

# Copy package.json first
COPY package.json .

# Install dependencies
RUN bun install

# Copy the rest of the application
COPY prisma ./prisma
COPY src ./src
COPY tsconfig.json .

# Generate Prisma client
RUN bunx prisma generate

ENV NODE_ENV production
EXPOSE 3000

CMD ["bun", "run", "start"]