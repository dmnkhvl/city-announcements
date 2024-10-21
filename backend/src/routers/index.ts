import { t } from "../utlis/trpcInit"
import announcementRouter from "./announcement"

export const appRouter = t.router({
  announcement: announcementRouter,
})

export type AppRouter = typeof appRouter
