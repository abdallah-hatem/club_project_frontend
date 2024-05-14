import React from "react"

const NewsCard = ({ imageUrl, date, title }) => {
  return (
    <div className="relative max-w-lg h-[300px] rounded overflow-hidden shadow-lg">
      <img className="w-full h-full object-cover" src={imageUrl} alt="News" />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
        <p className="text-white text-sm">{date}</p>
        <p className="text-white text-lg font-semibold">{title}</p>
      </div>
    </div>
  )
}

export default NewsCard
