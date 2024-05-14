import React from "react"
import { Card, Form, Input, Button, message } from "antd"

import LOGIN from "../../apis/auth/login"
import { useNavigate } from "react-router-dom"
import { isDatePassed } from "../../helpers/date"

export default function Login() {
  const router = useNavigate()

  const onFinish = (values) => {
    LOGIN(values).then((res) => {
      if (!res?.jwt) return message.error("Login failed")

      if (res.jwt) {
        // if (isDatePassed(res?.user.subscribtion_end_date))
        //   return message.error("Your subscribtion is expired! please renew")

        localStorage.setItem("token", res.jwt)
        localStorage.setItem("user", JSON.stringify(res.user))
        router("/")
      }
    })
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Card title="Login" style={{ width: 400 }}>
        <Form
          name="loginForm"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
                type: "email",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
