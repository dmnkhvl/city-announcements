export enum AnnouncementCategory {
  COMMUNITY_EVENTS = "Community events",
  CRIME_SAFETY = "Crime & Safety",
  CULTURE = "Culture",
  DISCOUNTS_BENEFITS = "Discounts & Benefits",
  EMERGENCIES = "Emergencies",
  FOR_SENIORS = "For Seniors",
  HEALTH = "Health",
  KIDS_FAMILY = "Kids & Family",
}

export type Announcement = {
  id: number;
  title: string;
  publicationDate: string;
  lastUpdate: string;
  categories: AnnouncementCategory[];
};
