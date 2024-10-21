import { z } from "zod"

export const AnnouncementSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string().optional(),
  categories: z.array(z.string()),
  publicationDate: z.string(),
  lastUpdated: z.date().optional(),
})

export type Announcement = z.infer<typeof AnnouncementSchema>
