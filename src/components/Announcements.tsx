import React from "react";
import { Announcement, AnnouncementCategory } from "../types/announcement";

const announcements: Announcement[] = [
  {
    id: 1,
    title: "New Community Event",
    publicationDate: "2023-09-15",
    lastUpdate: "2023-10-01",
    categories: [
      AnnouncementCategory.COMMUNITY_EVENTS,
      AnnouncementCategory.CULTURE,
    ],
  },
  {
    id: 2,
    title: "Crime & Safety Updates",
    publicationDate: "2023-09-20",
    lastUpdate: "2023-10-05",
    categories: [
      AnnouncementCategory.CRIME_SAFETY,
      AnnouncementCategory.EMERGENCIES,
    ],
  },
  {
    id: 3,
    title: "Discounts & Benefits for Families",
    publicationDate: "2023-10-01",
    lastUpdate: "2023-10-07",
    categories: [
      AnnouncementCategory.DISCOUNTS_BENEFITS,
      AnnouncementCategory.KIDS_FAMILY,
    ],
  },
];

const Announcements: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Announcements</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Publication Date</th>
            <th className="border px-4 py-2">Last Update</th>
            <th className="border px-4 py-2">Categories</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {announcements.map((announcement) => (
            <tr key={announcement.id}>
              <td className="border px-4 py-2">{announcement.id}</td>
              <td className="border px-4 py-2">{announcement.title}</td>
              <td className="border px-4 py-2">
                {announcement.publicationDate}
              </td>
              <td className="border px-4 py-2">{announcement.lastUpdate}</td>
              <td className="border px-4 py-2">
                {announcement.categories.join(", ")}
              </td>
              <td className="border px-4 py-2 text-blue-500 cursor-pointer">
                Edit
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Announcements;
