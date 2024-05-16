import React, { useEffect, useState } from "react"
import { DatePicker, Select, Button, Form, message } from "antd"
import moment from "moment"
import dayjs from "dayjs"
import { formatDate } from "../../../helpers/date"

import ADD_RESERVATION from "../../../apis/reservations/addReservations"
import { scrollToTop } from "../../../helpers/scrollToTop"

const { Option } = Select

const ChooseTime = ({
  setSelectedDate,
  setSelectedField,
  fields,
  bookedTimes,
  selectedActivityId,
  userId,
}) => {
  const [selDate, setselDate] = useState()
  const [selField, setSelField] = useState()

  const [form] = Form.useForm()

  useEffect(() => {
    selDate && selField && form.setFieldsValue({ timeRange: null })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selDate, selField])

  const onFinish = (values) => {
    const { timeRange, court } = values

    let data = {
      selectedTimes: timeRange.join(","),
      field_id: court,
      date: selDate && selDate + "T21:00:00.000Z",
      activity_id: selectedActivityId,
      user_id: userId,
    }

    ADD_RESERVATION(data).then(() => {
      message.success("Reservation created")
      setTimeout(() => {
        scrollToTop()
        window.location.reload()
      }, 10)
    })
  }

  const generateTimeOptions = (disabledTimes) => {
    const options = []
    let currentTime = moment()
    if (moment(selDate).day() === moment().day()) {
      currentTime = moment().minute(Math.ceil(currentTime.minute() / 30) * 30)
    } else {
      currentTime = moment().startOf("day")
    }
    const endTime = moment().endOf("day")

    while (currentTime.isSameOrBefore(endTime)) {
      const time = currentTime.format("h:mm A")
      const isDisabled = disabledTimes.includes(time)
      options.push({ time, isDisabled })
      currentTime.add(30, "minutes")
    }

    return options
  }

  const timeOptions = generateTimeOptions(bookedTimes?.flat() ?? [])
  const dateFormat = "YYYY-MM-DD"

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg">
      <Form onFinish={onFinish} form={form}>
        {/* choose day */}
        <Form.Item
          name="date"
          className="mb-4"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <DatePicker
            placeholder="Choose Day"
            minDate={dayjs(formatDate(new Date(), "reverse"), dateFormat)}
            className="w-full"
            onChange={(date, dateString) => {
              setSelectedDate(dateString)
              setselDate(dateString)
            }}
          />
        </Form.Item>

        {/* choose court */}
        <Form.Item
          name="court"
          className="mb-4"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Select
            placeholder="Choose Court"
            className="w-full"
            onChange={(e) => {
              setSelectedField(e)
              setSelField(e)
            }}
          >
            {fields?.map((field) => (
              <Option key={field.id} value={field.id}>
                {field.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        {/* choose time */}
        <Form.Item
          name="timeRange"
          className="mb-4"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Select
            placeholder="Choose Time"
            className="w-full"
            mode="multiple"
            disabled={!selField || !selDate}
          >
            {timeOptions.map((option, index) => (
              <Option
                key={index}
                value={option.time}
                disabled={option.isDisabled}
              >
                {option.time}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <div className="text-center">
          <Button type="primary" htmlType="submit">
            Reserve
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default ChooseTime
