FROM oven/bun:1
WORKDIR /app

COPY . .

RUN bun install

RUN bunx prisma generate
ENV NODE_ENV production
EXPOSE 3000
CMD ["bun", "run", "start"]