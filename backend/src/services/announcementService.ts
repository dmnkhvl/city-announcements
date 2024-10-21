import { TRPCError } from "@trpc/server"
import prisma from "../config/database"
import type { Announcement } from "../models/announcement"

export const AnnouncementService = {
  async create(data: Pick<Announcement, "title" | "categories">) {
    return prisma.announcement.create({ data })
  },

  async getById(id: number) {
    const announcement = await prisma.announcement.findUnique({ where: { id } })
    if (!announcement) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Announcement not found",
      })
    }
    return announcement
  },

  async list({ page, limit }: { page: number; limit: number }) {
    const skip = (page - 1) * limit
    return prisma.announcement.findMany({
      skip,
      take: limit,
      orderBy: { lastUpdated: "desc" },
    })
  },

  async count() {
    return prisma.announcement.count()
  },

  async update(data: Announcement) {
    try {
      const { id, publicationDate, ...updateData } = data
      const result = await prisma.announcement.update({
        where: { id },
        data: {
          ...updateData,
        },
      })
      return result
    } catch (error) {
      throw error
    }
  },
}
