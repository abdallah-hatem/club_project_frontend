import { Card } from "antd"
import React from "react"

export default function ResrvationCard({ title, courtName, from, to }) {
  return (
    <Card className="shadow-lg w-[300px]" title={title + " Reservation"}>
      <p className="mb-2 text-xl font-semibold">{courtName}</p>
      <div className="flex ">
        <p className="text-base">{from}</p>
        <p className="mx-2">-</p>
        <p className="text-base">{to}</p>
      </div>
    </Card>
  )
}
