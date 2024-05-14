import { isDatePassed } from "./date"

export const isUserLoggedIn = () => {
  if (localStorage.getItem("token")) return true

  return false
}

export const isSubscribed = () => {
  const user = JSON.parse(localStorage.getItem("user"))

  return !isDatePassed(user?.subscribtion_end_date)
}
