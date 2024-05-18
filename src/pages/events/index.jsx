import React, { useEffect, useState } from "react"
import { Card } from "antd"
import GET_EVENTS from "../../apis/events/getEvents"
import { useNavigate } from "react-router-dom"
export default function Events() {
  const [events, setEvents] = useState([])

  const router = useNavigate()

  useEffect(() => {
    GET_EVENTS().then((res) => setEvents(res.result))
  }, [])

  return (
    <div className="min-h-screen py-8 px-4 sm:px-8 lg:px-16 xl:px-32">
      <h1 className="text-3xl font-bold text-center mb-8">Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((el) => (
          <Card
            key={el.id}
            className="overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300s"
            onClick={() => router(`/event/${el.id}`)}
          >
            <img
              src={el.imageUrl}
              alt="el"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-500 mb-2">{el.date}</p>
              <p className="text-gray-800">{el.title}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
