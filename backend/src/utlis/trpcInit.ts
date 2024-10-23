import { initTRPC } from "@trpc/server"

const errorFormatter = ({ shape, error }: { shape: any; error: any }) => {
  console.error("[tRPC Error]:", {
    code: error.code,
    message: error.message,
    path: error.path,
    stack: error.stack,
    data: error.data,
  })

  return {
    ...shape,
    data: {
      ...shape.data,
      message: error.message,
      code: error.code,
    },
  }
}

export const t = initTRPC.create({
  errorFormatter: ({ shape, error }) => {
    return errorFormatter({ shape, error })
  },
})
