import { Announcement, AnnouncementCategory } from "../types/announcement"

export const announcements: Announcement[] = [
  {
    id: 1,
    title: "New Community Event",
    publicationDate: "2023-09-15T04:38:00",
    lastUpdate: "2023-10-01T14:20:00",
    categories: [AnnouncementCategory.COMMUNITY_EVENTS, AnnouncementCategory.CULTURE],
  },
  {
    id: 2,
    title: "Crime & Safety Updates",
    publicationDate: "2023-09-20T10:15:00",
    lastUpdate: "2023-10-05T09:45:00",
    categories: [AnnouncementCategory.CRIME_SAFETY, AnnouncementCategory.EMERGENCIES],
  },
  {
    id: 3,
    title: "Discounts & Benefits for Families",
    publicationDate: "2023-10-01T16:30:00",
    lastUpdate: "2023-10-07T11:50:00",
    categories: [AnnouncementCategory.DISCOUNTS_BENEFITS, AnnouncementCategory.KIDS_FAMILY],
  },
]
