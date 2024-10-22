FROM oven/bun:1

WORKDIR /app

# Copy package files
COPY package.json .
COPY bun.lockb .

# Copy source files
COPY prisma ./prisma
COPY src ./src
COPY tsconfig.json .

# Install dependencies and generate Prisma client
RUN bun install
RUN bunx prisma generate

ENV NODE_ENV production
EXPOSE 3000

CMD ["bun", "run", "start"]