import { AnnouncementCategory } from "../types"

export function getAnnouncementCategoryOptions() {
  return Object.values(AnnouncementCategory).map((category) => ({
    value: category,
    label: category,
  }))
}
