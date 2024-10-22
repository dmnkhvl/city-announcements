import fastify from "fastify"
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify"
import { appRouter } from "./routers"
import fastifyCors from "@fastify/cors"

const isDevelopment = process.env.NODE_ENV === "development"

const server = fastify({
  maxParamLength: 5000,
  logger: isDevelopment
    ? {
        level: "debug",
        transport: {
          target: "pino-pretty",
        },
      }
    : true,
})

server.register(fastifyCors, {
  origin: (origin, cb) => {
    if (isDevelopment) {
      cb(null, true)
      return
    }

    const productionUrl = process.env.FRONTEND_URL
    if (!origin || origin === productionUrl) {
      cb(null, true)
      return
    }

    cb(new Error("Not allowed by CORS"), false)
  },
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
    await server.listen({ port: 3000, host: "0.0.0.0" })
    console.log("Server is running on http://localhost:3000")
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
