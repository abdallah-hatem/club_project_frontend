import "./App.css"
import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import Navbar from "./layout/navbar"
import Footer from "./layout/footer"
import Home from "./pages/home"
import Reservations from "./pages/reservations"
import Login from "./pages/login"
import { isSubscribed, isUserLoggedIn } from "./helpers/user"

import ErrorPage from "./pages/404"
import Details from "./pages/details"

function App() {
  const PrivateRoutes = () => {
    return isUserLoggedIn() ? <Outlet /> : <Navigate to="/login" />
  }

  const SubscribersRoutes = () => {
    return isSubscribed() ? <Outlet /> : <Navigate to="/details" />
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />

          {/* cant access these routes if subscribed */}
          <Route element={<SubscribersRoutes />}>
            <Route path="/reservations" element={<Reservations />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
