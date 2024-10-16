import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/global.css"
import "./styles/colors.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./routes/root"
import Announcement from "./routes/announcement"
import Announcements from "./routes/announcements"
import { AnnouncementsProvider } from "./context/AnnouncementsContext"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "announcements",
        element: <Announcements />,
      },
      {
        path: "announcements/:announcementId",
        element: <Announcement />,
      },
    ],
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AnnouncementsProvider>
      <RouterProvider router={router} />
    </AnnouncementsProvider>
  </StrictMode>
)
