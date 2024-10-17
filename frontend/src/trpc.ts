import { createTRPCReact } from "@trpc/react-query"
import { httpBatchLink } from "@trpc/client"
import { AppRouter } from "../../backend/src/router"
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server"

export const trpc = createTRPCReact<AppRouter>()
const TRPC_API_URL = import.meta.env.VITE_TRPC_API_URL

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: TRPC_API_URL,
    }),
  ],
})

export type RouterInput = inferRouterInputs<AppRouter>
export type RouterOutput = inferRouterOutputs<AppRouter>
