import { z } from "zod"

export const AnnouncementSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string().optional(),
  categories: z.array(z.string()),
  publicationDate: z
    .union([z.string(), z.date()])
    .transform((val) => (typeof val === "string" ? new Date(val) : val)),
  lastUpdated: z.date().optional(),
})

export type Announcement = z.infer<typeof AnnouncementSchema>
