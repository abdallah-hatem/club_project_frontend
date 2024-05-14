import { Button } from "antd"
import React from "react"
import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const router = useNavigate()

  const links = [
    { id: 1, text: "Reservations", url: "/reservations" },
    { id: 2, text: "Details", url: "/details" },
    { id: 3, text: "News", url: "#" },
  ]

  return (
    <nav className="bg-gray-800 p-4 px-[100px] flex justify-between items-center h-[80px]">
      <div className="flex items-center">
        <img
          src="https://www.alahlyegypt.com/assets/images/new-logo.png"
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
            className="text-white hover:text-gray-300"
          >
            {link.text}
          </a>
        ))}
      </div>
      <Button
        className="bg-red-500 text-white border-0"
        onClick={() => {
          localStorage.removeItem("token")
          router("/login")
        }}
      >
        Logout
      </Button>
    </nav>
  )
}
