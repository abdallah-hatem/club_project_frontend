import React from "react"

export default function Navbar() {
  const links = [
    { id: 1, text: "Link 1", url: "#" },
    { id: 2, text: "Link 2", url: "#" },
    { id: 3, text: "Link 3", url: "#" },
  ]

  return (
    <nav className="bg-gray-800 p-4 px-[100px] flex justify-between items-center h-[80px]">
      <div className="flex items-center">
        <img
          src="https://www.alahlyegypt.com/assets/images/new-logo.png"
          alt="Logo"
          className="h-16"
        />
      </div>
      <div className="flex space-x-4">
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
    </nav>
  )
}
