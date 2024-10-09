import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import { announcements } from "../data/announcements"

const getAnnouncements = () => {
  return announcements
}

export async function loader() {
  const announcements = getAnnouncements()
  return { announcements }
}

export default function RootLayout() {
  return (
    <main className="bg-primary text-primary flex h-full w-full">
      <Sidebar />
      <Outlet />
    </main>
  )
}
