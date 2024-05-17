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
import Signup from "./pages/signup"
import Events from "./pages/events"
import ContactUS from "./pages/contactUs"
import Sports from "./pages/sports"
import Faqs from "./pages/faqs"

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

          <Route path="/contact-us" element={<ContactUS />} />

          {/* cant access these routes if not subscribed */}
          <Route element={<SubscribersRoutes />}>
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/events" element={<Events />} />
            <Route path="/sports" element={<Sports />} />
          </Route>
        </Route>

        <Route path="/details" element={<Details />} />

        <Route path="/faqs" element={<Faqs />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
