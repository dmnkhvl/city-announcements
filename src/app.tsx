import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/global.css"
import "./styles/colors.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout, { loader as rootLoader } from "./routes/root"
import Announcement from "./routes/announcement"
import Announcements from "./routes/announcements"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: rootLoader,
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
    <RouterProvider router={router} />
  </StrictMode>
)
