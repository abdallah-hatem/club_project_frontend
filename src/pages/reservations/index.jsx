import React, { useEffect, useState } from "react"
import GET_USER_BY_ID from "../../apis/users/getUserById"
import ResrvationCard from "../../components/resrvationCard"
import { getTime } from "../../helpers/date"

export default function Reservations() {
  const user = JSON.parse(localStorage.getItem("user"))

  const [data, setData] = useState()

  useEffect(() => {
    GET_USER_BY_ID(user?.id).then((res) => setData(res.user.reservations))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="min-h-screen px-[100px]">
      <h1 className="text-2xl mb-4 mt-5">Your Reservations</h1>
      <div className="grid grid-cols-4 gap-4">
        {data &&
          data.map((el) => (
            <ResrvationCard
              title={el.activity.name}
              from={getTime(el.from)}
              to={getTime(el.to)}
              courtName={el.fields.name}
            />
          ))}
      </div>
    </div>
  )
}
