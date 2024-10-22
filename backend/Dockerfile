FROM oven/bun:1
WORKDIR /app

COPY prisma ./prisma/
COPY .env .env

COPY package.json bun.lockb ./
RUN bun install


RUN bunx prisma generate


COPY . .


ENV NODE_ENV production
EXPOSE 3000


CMD ["bun", "run", "start"]