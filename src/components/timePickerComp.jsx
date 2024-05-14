import React from "react"
import { TimePicker, Space } from "antd"
// import moment from "moment"

const TimePickerComp = ({ disabledRanges, onChange, ...rest }) => {
  // Function to disable time ranges
  const disabledDateTime = (current) => {
    if (!disabledRanges || disabledRanges.length === 0) {
      return {}
    }

    const currentHour = current.hour()
    const currentMinute = current.minute()

    // Iterate through each disabled range
    for (let i = 0; i < disabledRanges.length; i++) {
      const [startHour, startMinute, endHour, endMinute] = disabledRanges[i]
      if (
        (currentHour > startHour ||
          (currentHour === startHour && currentMinute >= startMinute)) &&
        (currentHour < endHour ||
          (currentHour === endHour && currentMinute < endMinute))
      ) {
        return {
          disabledHours: () => [],
          disabledMinutes: () => [],
        }
      }
    }
    return {}
  }

  return (
    <Space direction="vertical">
      <TimePicker
        {...rest}
        onChange={onChange}
        disabledTime={disabledDateTime}
        format="HH:mm"
      />
    </Space>
  )
}

export default TimePickerComp
