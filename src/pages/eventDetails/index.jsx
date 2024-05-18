/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react"
import GET_EVENT_BY_ID from "../../apis/events/getEventById"
import { useParams } from "react-router-dom"

export default function EventDetails() {
  const [data, setData] = useState({})

  const { id } = useParams()

  useEffect(() => {
    GET_EVENT_BY_ID(id).then((res) => setData(res?.result))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-lg">
        <img src={data?.imageUrl} className="w-full h-[500px] object-cover" />

        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            {data?.title}
          </h1>
          <p className="text-md text-gray-500 mb-6">{data?.date}</p>
          <p className="text-lg text-gray-700 ">{data?.description}</p>
        </div>
      </div>
    </div>
  )
}
