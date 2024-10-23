FROM oven/bun:1
WORKDIR /app

COPY package.json bun.lockb ./
COPY prisma ./prisma/

RUN bun install
RUN bunx prisma generate --schema=./prisma/schema.prisma

COPY . .

ENV NODE_ENV production
ENV FRONTEND_URL="https://city-announcements.vercel.app"
EXPOSE 3000

CMD bunx prisma generate && bun run start