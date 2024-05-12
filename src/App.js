import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./layout/navbar"
import Footer from "./layout/footer"
import Home from "./pages/home"
import Reservations from "./pages/reservations"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/reservations",
      element: <Reservations />,
    },
  ])

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
