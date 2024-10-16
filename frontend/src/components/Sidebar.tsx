import { FaBullhorn, FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useAnnouncements } from "../context/AnnouncementsContext"
import { MenuItem } from "./MenuItem"

const Sidebar: React.FC = () => {
  const { announcements } = useAnnouncements()

  return (
    <div className="h-dvh w-80 border-r">
      <header className="p-4 border-y h-18">
        <Link to={"/"} className="flex items-center gap-x-2">
          <div className="rounded-lg w-9 h-9 border font-bold flex justify-center items-center">
            <img src="/sf-logo.png" width={24} height={24} />
          </div>
          <h1 className="font-semibold text-xl">San Francisco </h1>
        </Link>
      </header>
      <menu className="p-4 w-80 gap-y-1.5 flex flex-col">
        <MenuItem label="Home" href="/" icon={<FaHome size={16} />} />
        <MenuItem
          label="Announcements"
          href="/announcements"
          icon={<FaBullhorn size={16} />}
          rightEnd={<p>{announcements.length}</p>}
        />
      </menu>
    </div>
  )
}

export default Sidebar
