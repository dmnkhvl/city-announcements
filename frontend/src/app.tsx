import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/global.css"
import "./styles/colors.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./routes/root"
import Announcement from "./routes/announcement"
import Announcements from "./routes/announcements"
import { trpc, trpcClient } from "./trpc"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AnnouncementProvider } from "./context/announcementContext"

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

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <AnnouncementProvider>
          <RouterProvider router={router} />
        </AnnouncementProvider>
      </QueryClientProvider>
    </trpc.Provider>
  </StrictMode>
)
