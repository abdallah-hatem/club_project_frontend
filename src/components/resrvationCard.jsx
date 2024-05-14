import { Card } from "antd"
import React from "react"
import { formatDate } from "../helpers/date"

export default function ResrvationCard({
  title,
  courtName,
  selectedTimes,
  date,
}) {
  return (
    <Card className="shadow-lg" title={title + " Reservation"}>
      <p className="mb-2 text-xl font-semibold">{courtName}</p>
      <p className="mt-4 text-base">
        Date:
        <span className="text-gray-500 ml-2">{formatDate(date)}</span>
      </p>
      <div className="grid grid-cols-3 mt-5">
        {selectedTimes.split(",").map((time, index) => (
          <p
            key={index}
            className="m-1 px-2 py-1 border border-gray-400 text-center rounded-md"
          >
            {time}
          </p>
        ))}
      </div>
    </Card>
  )
}
