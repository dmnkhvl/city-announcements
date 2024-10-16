import { initTRPC } from "@trpc/server"
import { z } from "zod"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const t = initTRPC.create()

export const appRouter = t.router({
  createAnnouncement: t.procedure
    .input(
      z.object({
        title: z.string().min(1, "Title is required"),
        categories: z.array(z.string()).min(1, "At least one category is required"),
      })
    )
    .mutation(async ({ input }) => {
      const { title, categories } = input
      const announcement = await prisma.announcement.create({
        data: {
          title,
          categories,
        },
      })
      return announcement
    }),

  getAnnouncements: t.procedure
    .input(
      z.object({
        page: z.number().default(1),
        limit: z.number().default(10),
      })
    )
    .query(async ({ input }) => {
      const { page, limit } = input
      const skip = (page - 1) * limit
      const announcements = await prisma.announcement.findMany({
        skip,
        take: limit,
        orderBy: { publicationDate: "desc" },
      })
      return announcements
    }),

  updateAnnouncement: t.procedure
    .input(
      z.object({
        id: z.number(),
        title: z.string().optional(),
        categories: z.array(z.string()).optional(),
      })
    )
    .mutation(async ({ input }) => {
      const { id, title, categories } = input
      const updatedAnnouncement = await prisma.announcement.update({
        where: { id },
        data: {
          title,
          categories,
        },
      })
      return updatedAnnouncement
    }),
})

export type AppRouter = typeof appRouter
