import { Outlet } from "react-router-dom"
import Menu from "../components/Menu"

export default function RootLayout() {
  return (
    <main className="bg-primary text-primary flex h-full w-full">
      <Menu />
      <Outlet />
    </main>
  )
}
