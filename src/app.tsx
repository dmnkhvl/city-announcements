import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./routes/root";
import Announcements from "./components/Announcements";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "announcements",
        element: <Announcements />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
