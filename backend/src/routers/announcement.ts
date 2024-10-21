import { z } from "zod"
import { AnnouncementService } from "../services/announcementService"
import { AnnouncementSchema } from "../models/announcement"
import { t } from "../utlis/trpcInit"

const announcementRouter = t.router({
  getById: t.procedure
    .input(z.object({ id: z.number() }))
    .query(({ input }) => AnnouncementService.getById(input.id)),

  list: t.procedure
    .input(
      z.object({
        page: z.number().default(1),
        limit: z.number().default(10),
      })
    )
    .query(({ input }) => AnnouncementService.list(input)),

  count: t.procedure.query(async () => {
    const count = await AnnouncementService.count()
    return {
      count,
    }
  }),

  update: t.procedure
    .input(AnnouncementSchema)
    .mutation(({ input }) => AnnouncementService.update(input)),
})

export default announcementRouter
