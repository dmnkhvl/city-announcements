import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./routes/root";
import Announcements from "./components/Announcements";
import Announcement from "./components/Announcement";

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
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
