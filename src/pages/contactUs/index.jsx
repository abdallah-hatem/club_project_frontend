import React, { useEffect, useState } from "react"

import GET_CONTACTS from "../../apis/contactUs/getContactUs"
import { Button, Form, Input, message } from "antd"

export default function ContactUs() {
  const [data, setData] = useState()

  useEffect(() => {
    GET_CONTACTS().then((res) => setData(res.result[0]))
  }, [])

  const onFinish = (values) => {
    console.log("Received values:", values)
    message.success("Message sent successfully")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[500px]">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-600">
            We're here to help. Contact us using the form below.
          </p>
        </div>
        <div className="mb-6 text-center">
          <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
          <p className="text-gray-600 mb-1">Phone: {data?.phone_number}</p>
          <p className="text-gray-600 mb-1">Email: {data?.email}</p>
          <p className="text-gray-600 mb-1">Address: {data?.description}</p>
          {/* <p className="text-gray-600">
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p> */}
        </div>
        <Form name="contact-form" onFinish={onFinish} layout="vertical">
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[
              {
                required: true,
                message: "Please input your message!",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
