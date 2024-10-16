import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

export default function RootLayout() {
  return (
    <main className="bg-primary text-primary flex h-full w-full">
      <Sidebar />
      <Outlet />
    </main>
  )
}
