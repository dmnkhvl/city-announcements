import { TRPCError } from "@trpc/server"

export const errorHandler = (error: unknown) => {
  if (error instanceof TRPCError) {
    throw error
  }

  console.error("Unhandled error:", error)
  throw new TRPCError({
    code: "INTERNAL_SERVER_ERROR",
    message: "An unexpected error occurred",
  })
}
