import React from "react"
import { useNavigate } from "react-router-dom"

const NewsCard = ({ imageUrl, date, title, id }) => {
  const router = useNavigate()
  return (
    <div
      className="relative max-w-lg h-[300px] rounded overflow-hidden shadow-lg cursor-pointer"
      onClick={() => router(`/news/${id}`)}
    >
      <img
        className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
        src={imageUrl}
        alt="News"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
        <p className="text-white text-sm">{date}</p>
        <p className="text-white text-lg font-semibold">{title}</p>
      </div>
    </div>
  )
}

export default NewsCard
