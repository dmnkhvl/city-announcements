import { Announcement, AnnouncementCategory } from "../types"

export const initialAnnouncements: Announcement[] = [
  {
    id: 1,
    title: "New Community Event",
    publicationDate: "2023-09-15T04:38:00",
    content: "",
    lastUpdate: "2023-10-01T14:20:00",
    categories: [AnnouncementCategory.COMMUNITY_EVENTS, AnnouncementCategory.CULTURE],
  },
  {
    id: 2,
    title: "Basketball tournament",
    content: "",
    publicationDate: "2023-09-20T10:15:00",
    lastUpdate: "2023-10-05T09:45:00",
    categories: [AnnouncementCategory.HEALTH, AnnouncementCategory.CULTURE],
  },
  {
    id: 3,
    title: "Crime & Safety Updates",
    content: "",
    publicationDate: "2023-09-20T10:15:00",
    lastUpdate: "2023-10-05T09:45:00",
    categories: [AnnouncementCategory.CRIME_SAFETY, AnnouncementCategory.EMERGENCIES],
  },
]
