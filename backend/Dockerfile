FROM oven/bun:1

WORKDIR /app

# Copy everything needed for Prisma first
COPY package.json bun.lockb ./
COPY prisma ./prisma

# Install and generate Prisma
RUN bun install
RUN bunx prisma generate

# Now copy the rest
COPY . .

ENV NODE_ENV production
EXPOSE 3000

CMD ["bun", "run", "start"]