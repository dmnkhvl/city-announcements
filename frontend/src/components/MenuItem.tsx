import clsx from "clsx"
import { Link, useLocation } from "react-router-dom"

type MenuItemProps = {
  label: string
  href: string
  icon?: React.ReactNode
  rightEnd?: React.ReactNode
}

export const MenuItem: React.FC<MenuItemProps> = ({ href, label, icon, rightEnd }) => {
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
