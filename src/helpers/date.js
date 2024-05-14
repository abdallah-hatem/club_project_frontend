import moment from "moment"

export const formatDate = (dateString, reverse) => {
  const date = new Date(dateString)
  const day = date.getDate().toString().padStart(2, "0")
  const month = (date.getMonth() + 1).toString().padStart(2, "0")
  const year = date.getFullYear()

  if (reverse === "reverse") return `${year}-${month}-${day}`

  return `${day}-${month}-${year}`
}

export function isDatePassed(dateString) {
  // Parse the input date string
  const inputDate = new Date(dateString)

  // Get the current date
  const currentDate = new Date()

  // Compare the input date with the current date
  if (inputDate < currentDate) {
    return true // The input date is in the past
  } else {
    return false // The input date is not in the past
  }
}

export function addMinutesToDate(initialDate, minutes) {
  // Add minutes to the initial date
  const updatedDate = new Date(initialDate.getTime() + minutes * 60000)

  // Convert the updated date back to a string in the specified format
  const updatedDateString = updatedDate.toISOString()

  return updatedDateString
}

export const getTime = (dateTimeString) => {
  const date = new Date(dateTimeString)
  const hours = date.getHours()
  const minutes = date.getMinutes()

  // Convert hours to 12-hour format
  const hours12 = hours % 12 || 12

  // Add leading zeros to minutes if necessary
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

  // Determine if it's AM or PM
  const period = hours < 12 ? "AM" : "PM"

  return `${hours12}:${formattedMinutes} ${period}`
}

export const convertToISOFormat = (dateString) => {
  const formattedDate = moment(dateString).subtract(1, "day").toISOString()
  return formattedDate
}
