FROM oven/bun:1.0.2
WORKDIR /opt/app

COPY --from=node:18 /usr/local/bin/node /usr/local/bin/node
COPY ./packages ./packages
COPY ./package.json ./
COPY ./bun.lockb ./

RUN bun install

RUN bunx prisma generate