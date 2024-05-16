import React from "react"
import { Card } from "antd"
export default function Events() {
  const events = [
    {
      id: 1,
      date: "May 20, 2024",
      image:
        "https://images.unsplash.com/photo-1563841930606-67e2bce48b78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultrices quam. Sed nec enim nec nunc dapibus tincidunt.",
    },
    {
      id: 2,
      date: "June 5, 2024",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus vitae urna aliquam, pharetra odio sit amet, tincidunt velit.",
    },
    {
      id: 3,
      date: "July 10, 2024",
      image:
        "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Quisque ultrices ex vel turpis consequat, nec lacinia eros aliquam. Proin at lectus vel dui tempus tincidunt. ",
    },
  ]

  return (
    <div className="min-h-screen py-8 px-4 sm:px-8 lg:px-16 xl:px-32">
      <h1 className="text-3xl font-bold text-center mb-8">Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card key={event.id} className="overflow-hidden">
            <img
              src={event.image}
              alt="Event"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-500 mb-2">{event.date}</p>
              <p className="text-gray-800">{event.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
