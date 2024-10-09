import React from "react"
import { announcements } from "../data/announcements"
import dayjs from "dayjs"
import { Link } from "react-router-dom"
import { MdModeEdit } from "react-icons/md"

const Announcements: React.FC = () => {
  const sortedAnnouncements = announcements.sort((a, b) => {
    return new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime()
  })

  return (
    <div className="py-12 px-10 w-full ">
      <h1 className="pageTitle">Announcements</h1>
      <table className="min-w-full mt-10">
        <thead>
          <tr>
            <th className="tableText">Title</th>
            <th className="tableText">Publication Date</th>
            <th className="tableText">Last Update</th>
            <th className="tableText">Categories</th>
            <th className="tableText" />
          </tr>
        </thead>
        <tbody>
          {sortedAnnouncements.map((announcement) => (
            <tr key={announcement.id}>
              <td className="tableText">{announcement.title}</td>
              <td className="tableText">
                {dayjs(announcement.publicationDate).format("MMM D, YYYY HH:mm")}
              </td>
              <td className="tableText">{dayjs(announcement.lastUpdate).format("MMM D, YYYY")}</td>
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

export default Announcements
