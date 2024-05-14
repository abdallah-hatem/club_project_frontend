import React, { useEffect, useState } from "react"
import { Select, Button, Form, message } from "antd"

import GET_ACTIVITIES from "../../../apis/activities/getActivities"

const { Option } = Select

const ChooseActivity = ({ next, setSelectedActivityId }) => {
  const [data, setData] = useState()

  const handleSubmit = (values) => {
    if (!values?.activity) return message.error("Please choose an activity")

    console.log(values, "Form submitted!")

    setSelectedActivityId(values.activity)

    next()
  }

  useEffect(() => {
    GET_ACTIVITIES().then((res) => setData(res.result))
  }, [])

  return (
    <Form
      onFinish={handleSubmit}
      className="max-w-md mx-auto h-[300px] flex justify-center items-center"
      layout="inline"
    >
      <Form.Item name="activity" className="w-[260px]">
        <Select placeholder="Choose Activity" className="w-2/3 mr-4">
          {data?.map((item) => (
            <Option key={item.id} value={item.id}>
              {item.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
      {/* <Form.Item className="w-1/3"> */}
      {/* <Button type="primary" htmlType="submit" className="w-full">
        Submit
      </Button> */}
      {/* </Form.Item> */}
    </Form>
  )
}

export default ChooseActivity
