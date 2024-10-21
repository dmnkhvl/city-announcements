import fastify from "fastify"
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify"
import { appRouter } from "./routers"
import fastifyCors from "@fastify/cors"

const server = fastify({
  maxParamLength: 5000,
  logger: {
    level: "debug",
    transport: {
      target: "pino-pretty",
    },
  },
})

server.register(fastifyCors, {
  origin: "http://localhost:5173",
  credentials: true,
})

server.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  trpcOptions: {
    router: appRouter,
    onError: (opts: any) => {
      const { error, type, path, input, ctx, req } = opts
      server.log.error(
        {
          type,
          path,
          input,
          error: error.message,
          stack: error.stack,
        },
        "tRPC Error"
      )
    },
  },
})

const start = async () => {
  try {
    await server.listen({ port: 3000 })
    console.log("Server is running on http://localhost:3000")
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
