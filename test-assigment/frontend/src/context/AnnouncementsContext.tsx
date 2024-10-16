import React, { createContext, useContext, useEffect, useState } from "react"
import { Announcement } from "../types"
import { initialAnnouncements } from "../data/initialAnnouncements"

const AnnouncementsContext = createContext<{
  announcements: Announcement[]
  updateAnnouncement: (updatedAnnouncement: Announcement) => void
  getAnnouncementById: (id: number) => Announcement | undefined
}>({
  announcements: [],
  updateAnnouncement: () => {},
  getAnnouncementById: () => undefined,
})

export const AnnouncementsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [announcements, setAnnouncements] = useState<Announcement[]>(() => {
    const savedAnnouncements = localStorage.getItem("announcements")
    return savedAnnouncements ? JSON.parse(savedAnnouncements) : initialAnnouncements
  })

  useEffect(() => {
    localStorage.setItem("announcements", JSON.stringify(announcements))
  }, [announcements])

  const updateAnnouncement = (updatedAnnouncement: Announcement) => {
    setAnnouncements((prev) =>
      prev.map((announcement) =>
        announcement.id === updatedAnnouncement.id ? updatedAnnouncement : announcement
      )
    )
  }

  const getAnnouncementById = (id: number) => {
    return announcements.find((announcement) => announcement.id === id)
  }

  return (
    <AnnouncementsContext.Provider
      value={{ announcements, updateAnnouncement, getAnnouncementById }}
    >
      {children}
    </AnnouncementsContext.Provider>
  )
}

export const useAnnouncements = () => useContext(AnnouncementsContext)
