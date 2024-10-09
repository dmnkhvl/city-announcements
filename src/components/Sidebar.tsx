import clsx from "clsx"
import { FaBullhorn, FaHome } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"
import { useAnnouncements } from "../context/AnnouncementsContext"

type MenuItemProps = {
  label: string
  href: string
  icon?: React.ReactNode
  rightEnd?: React.ReactNode
}

const MenuItem: React.FC<MenuItemProps> = ({ href, label, icon, rightEnd }) => {
  const location = useLocation()
  const currentRoute = location.pathname

  const isItemSelected = () => {
    if (href === "/") {
      if (currentRoute === "/") {
        return true
      } else {
        return false
      }
    } else {
      return currentRoute.startsWith(href)
    }
  }

  return (
    <li>
      <Link
        to={href}
        className={clsx(
          isItemSelected() ? "bg-tertiary text-secondary" : "hover:bg-secondary",
          "border border-white/10 rounded-lg w-full flex justify-between items-center px-4"
        )}
      >
        <div className="flex items-center gap-x-2">
          {icon}
          <p className="py-2">{label}</p>
        </div>
        {rightEnd}
      </Link>
    </li>
  )
}

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
