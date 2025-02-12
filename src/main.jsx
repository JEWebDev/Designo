import { StrictMode } from "react"
import { createBrowserRouter, RouterProvider } from "react-router"
import { createRoot } from "react-dom/client"

import { HomePage } from "./pages/HomePage.jsx"
import { AboutPage } from "./pages/AboutPage.jsx"
import { LocationsPage } from "./pages/LocationsPage.jsx"
import { ContactPage } from "./pages/ContactPage.jsx"
import { WebDesignPage } from "./pages/WebDesignPage.jsx"
import { AppDesignPage } from "./pages/AppDesignPage.jsx"
import { GraphicDesignPage } from "./pages/GraphicDesignPage.jsx"

import "./App.css"
const root = document.getElementById("root")

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <h1>404 Not Found</h1>,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/locations",
    element: <LocationsPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/web-design",
    element: <WebDesignPage />,
  },
  {
    path: "/app-design",
    element: <AppDesignPage />,
  },
  {
    path: "/graphic-design",
    element: <GraphicDesignPage />,
  },
])

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
