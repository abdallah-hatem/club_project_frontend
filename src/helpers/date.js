export const formatDate = (dateString) => {
  const date = new Date(dateString)
  const day = date.getDate().toString().padStart(2, "0")
  const month = (date.getMonth() + 1).toString().padStart(2, "0")
  const year = date.getFullYear()

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
