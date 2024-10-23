import dayjs from "dayjs"
import { Link } from "react-router-dom"
import { MdModeEdit } from "react-icons/md"
import { useAnnouncements } from "../context/announcementContext"

export default function AnnouncementsPage() {
  const { announcements } = useAnnouncements()

  return (
    <div className="py-12 px-10 w-full">
      <h1 className="pageTitle">Announcements</h1>
      <table className="min-w-full mt-10">
        <thead>
          <tr>
            <th className="tableText min-w-[240px] w-[740px]">Title</th>
            <th className="tableText min-w-[200px] w-[250px]">Publication Date</th>
            <th className="tableText min-w-[200px] w-[250px]">Last Update</th>
            <th className="tableText min-w-[250px] w-[500px]">Categories</th>
            <th className="tableText w-[100px]" />
          </tr>
        </thead>
        <tbody>
          {announcements?.map((announcement) => (
            <tr key={announcement.id}>
              <td className="tableText">{announcement.title}</td>
              <td className="tableText">
                {dayjs(announcement.publicationDate).isValid()
                  ? dayjs(announcement.publicationDate).format("MMM D, YYYY HH:mm")
                  : "Invalid date"}
              </td>
              <td className="tableText">
                {dayjs(announcement.lastUpdate).isValid()
                  ? dayjs(announcement.lastUpdate).format("MMM D, YYYY")
                  : "Invalid date"}
              </td>
              <td className="tableText">{announcement.categories.join(", ")}</td>
              <td className="tableText py-2 cursor-pointer">
                <Link to={`${announcement.id}`}>
                  <MdModeEdit size={20} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
