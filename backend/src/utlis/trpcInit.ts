import { initTRPC } from "@trpc/server"
import { errorHandler } from "../middleware/errorHandler"

const t = initTRPC.create({
  errorFormatter: ({ shape, error }) => {
    errorHandler(error)
    return shape
  },
})

export { t }
