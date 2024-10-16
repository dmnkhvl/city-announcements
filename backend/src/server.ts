import { fastifyTRPCPlugin, type FastifyTRPCPluginOptions } from "@trpc/server/adapters/fastify"
import fastify from "fastify"
import { appRouter, type AppRouter } from "./router"

const PORT = 3000

const server = fastify({
  maxParamLength: 5000,
})

server.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  trpcOptions: {
    router: appRouter,
    onError({ path, error }) {
      console.error(`Error in tRPC handler on path '${path}':`, error)
    },
  } satisfies FastifyTRPCPluginOptions<AppRouter>["trpcOptions"],
})
;(async () => {
  try {
    await server.listen({ port: PORT })
    console.log(`Server is running on http://localhost:${PORT}`)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
})()
