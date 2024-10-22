FROM oven/bun:1

WORKDIR /app

COPY prisma ./prisma/

ARG NODE_ENV=production

COPY .env.${NODE_ENV} .env


COPY package.json bun.lockb ./
RUN bun install


RUN bunx prisma generate


COPY . .


ENV NODE_ENV ${NODE_ENV}


EXPOSE 3000


CMD ["bun", "run", "start"]