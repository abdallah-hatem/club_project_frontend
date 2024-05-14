import React, { useEffect } from "react"
import GET_USER_BY_ID from "../../apis/users/getUserById"

export default function Reservations() {
  const user = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    GET_USER_BY_ID(user?.id).then((res) => console.log(res, "res"))
  }, [])

  return <div>Reservations</div>
}
