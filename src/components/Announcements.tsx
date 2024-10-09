import React from "react";
import { Announcement, AnnouncementCategory } from "../types/announcement";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

const announcements: Announcement[] = [
  {
    id: 1,
    title: "New Community Event",
    publicationDate: "2023-09-15T04:38:00",
    lastUpdate: "2023-10-01T14:20:00",
    categories: [
      AnnouncementCategory.COMMUNITY_EVENTS,
      AnnouncementCategory.CULTURE,
    ],
  },
  {
    id: 2,
    title: "Crime & Safety Updates",
    publicationDate: "2023-09-20T10:15:00",
    lastUpdate: "2023-10-05T09:45:00",
    categories: [
      AnnouncementCategory.CRIME_SAFETY,
      AnnouncementCategory.EMERGENCIES,
    ],
  },
  {
    id: 3,
    title: "Discounts & Benefits for Families",
    publicationDate: "2023-10-01T16:30:00",
    lastUpdate: "2023-10-07T11:50:00",
    categories: [
      AnnouncementCategory.DISCOUNTS_BENEFITS,
      AnnouncementCategory.KIDS_FAMILY,
    ],
  },
];

type TableHeaderProps = {
  children?: React.ReactNode;
};

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return <th className="border-y px-4 py-4 text-left">{children}</th>;
};

const Announcements: React.FC = () => {
  return (
    <div className="py-12 px-10 w-full bg-blue-50">
      <h1 className="text-2xl font-bold mb-4">Announcements</h1>
      <table className="min-w-full mt-10">
        <thead>
          <tr>
            <TableHeader>Title</TableHeader>
            <TableHeader>Publication Date</TableHeader>
            <TableHeader>Last Update</TableHeader>
            <TableHeader>Categories</TableHeader>
            <TableHeader></TableHeader>
          </tr>
        </thead>
        <tbody>
          {announcements.map((announcement) => (
            <tr key={announcement.id}>
              <td className="border-y px-4 py-4">{announcement.title}</td>
              <td className="border-y px-4 py-4">
                {dayjs(announcement.publicationDate).format(
                  "MMM D, YYYY HH:mm",
                )}
              </td>
              <td className="border-y px-4 py-4">
                {dayjs(announcement.lastUpdate).format("MMM D, YYYY")}
              </td>
              <td className="border-y px-4 py-4">
                {announcement.categories.join(", ")}
              </td>
              <td className="border-y px-4 py-2 text-blue-500 cursor-pointer">
                <Link to={`${announcement.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Announcements;
