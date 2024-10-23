import fastify from "fastify"
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify"
import { appRouter } from "./routers"
import fastifyCors from "@fastify/cors"
import { PrismaClient } from "@prisma/client"

console.log("Current working directory:", process.cwd())
console.log("Files in current directory:", require("fs").readdirSync("."))
console.log("NODE_ENV:", process.env.NODE_ENV)
console.log("DATABASE_URL:", process.env.DATABASE_URL?.slice(0, 10) + "...")

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
})

async function testConnection() {
  try {
    await prisma.$connect()
    console.log("Successfully connected to database")
  } catch (error) {
    console.error("Failed to connect to database:", error)
    process.exit(1)
  }
}

testConnection()

const isDevelopment = process.env.NODE_ENV === "development"
const productionUrl = process.env.FRONTEND_URL

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
    if (!origin) {
      cb(null, true)
      return
    }

    if (isDevelopment) {
      cb(null, true)
      return
    }

    try {
      const allowedOrigin = new URL(productionUrl as string)
      const incomingOrigin = new URL(origin)

      if (allowedOrigin.host === incomingOrigin.host) {
        cb(null, true)
        return
      }

      cb(new Error("Not allowed by CORS"), false)
    } catch (err) {
      cb(new Error("Invalid origin"), false)
    }
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
