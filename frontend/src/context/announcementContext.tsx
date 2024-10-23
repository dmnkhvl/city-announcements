import { createContext, useContext, ReactNode } from "react"
import { trpc } from "../trpc"
import { Announcement } from "../types"

type AnnouncementContextType = {
  count: number | null
  announcements: Announcement[] | null
  invalidateAll: () => void
}

const AnnouncementContext = createContext<AnnouncementContextType>({
  count: null,
  announcements: null,
  invalidateAll: () => {},
})

export const AnnouncementProvider = ({ children }: { children: ReactNode }) => {
  const utils = trpc.useUtils()

  const { data: countData } = trpc.announcement.count.useQuery(undefined, {
    staleTime: Infinity,
    initialData: () => {
      const cached = localStorage.getItem("announcement-count")
      return cached ? { count: JSON.parse(cached) } : undefined
    },
    onSuccess: (data) => {
      localStorage.setItem("announcement-count", JSON.stringify(data.count))
    },
  })

  const { data: announcements } = trpc.announcement.list.useQuery(
    { page: 1, limit: 10 },
    {
      staleTime: Infinity,
      initialData: () => {
        const cached = localStorage.getItem("announcements-list")
        return cached ? JSON.parse(cached) : undefined
      },
      onSuccess: (data) => {
        localStorage.setItem("announcements-list", JSON.stringify(data))
      },
    }
  )

  const invalidateAll = () => {
    localStorage.removeItem("announcement-count")
    localStorage.removeItem("announcements-list")
    utils.announcement.list.invalidate()
    utils.announcement.count.invalidate()
    utils.announcement.getById.invalidate()
  }

  return (
    <AnnouncementContext.Provider
      value={{
        count: countData?.count ?? null,
        announcements: announcements ?? null,
        invalidateAll,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  )
}

export const useAnnouncements = () => useContext(AnnouncementContext)
