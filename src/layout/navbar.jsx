import { Button, Avatar } from "antd"
import { UserOutlined } from "@ant-design/icons"
import React from "react"
import { useNavigate } from "react-router-dom"
import { isUserLoggedIn } from "../helpers/user"

export default function Navbar() {
  const router = useNavigate()

  const links = [
    { id: 1, text: "Home", url: "/" },
    { id: 2, text: "Reservations", url: "/reservations" },
    { id: 3, text: "Sports", url: "/sports" },
    { id: 4, text: "Events", url: "/events" },
    { id: 5, text: "contact us", url: "/contact-us" },
    { id: 6, text: "FAQs", url: "/faqs" },
  ]

  return (
    <nav className="bg-white p-4 px-[100px] flex justify-between items-center h-[80px] border-b-2">
      <div className="flex items-center">
        <img
          src="https://seeklogo.com/images/N/new-radiant-sc-logo-1C47B40595-seeklogo.com.png"
          alt="Logo"
          className="h-16 cursor-pointer"
          onClick={() => router("/")}
        />
      </div>
      <div className="flex space-x-4 items-center">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            className={`hover:text-gray-300 ${
              link.url === window.location.pathname && "text-red-500"
            }`}
            onClick={() => router(link.url)}
          >
            {link.text}
          </a>
        ))}
      </div>
      <div className="flex space-x-4 items-center">
        <Avatar
          className="cursor-pointer"
          onClick={() => router("/details")}
          icon={<UserOutlined />}
        />
        {isUserLoggedIn() ? (
          <Button
            className="bg-red-500 text-white border-0"
            onClick={() => {
              localStorage.removeItem("token")
              localStorage.removeItem("user")
              localStorage.removeItem("signup")
              router("/login")
            }}
          >
            Logout
          </Button>
        ) : (
          <Button
            className="bg-blue-500 text-white border-0"
            onClick={() => {
              router("/login")
            }}
          >
            Login
          </Button>
        )}
      </div>
    </nav>
  )
}
