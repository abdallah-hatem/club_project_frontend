import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import GET_NEWS_BY_ID from "../../apis/news/getNewsById"
import { scrollToTop } from "../../helpers/scrollToTop"

export default function NewsDetails() {
  const [data, setData] = useState({})

  const { id } = useParams()

  useEffect(() => {
    scrollToTop()
    GET_NEWS_BY_ID(id).then((res) => setData(res?.result))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-[500px] object-cover object-center"
        src={data.imageUrl}
        alt="News"
      />
      <div className="p-6">
        <h1 className="text-3xl font-semibold text-gray-800">{data.title}</h1>
        <p className="text-gray-600 text-sm mt-2">{data.date}</p>
        <p className="text-gray-700 mt-4">{data.description}</p>
      </div>
    </div>
  )
}
