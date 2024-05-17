import React from "react"
import { Card, Form, Input, Button, message } from "antd"

import LOGIN from "../../apis/auth/login"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
  const router = useNavigate()

  const onFinish = (values) => {
    const { email, password } = values

    let data = {
      email,
      password,
    }

    if (!email.includes("@")) data = { membership_id: email, password }

    LOGIN(data).then((res) => {
      if (!res?.jwt) return message.error("Login failed")

      // if (isDatePassed(res?.user.subscribtion_end_date))
      //   return message.error("Your subscribtion is expired! please renew")

      localStorage.setItem("token", res.jwt)
      localStorage.setItem("user", JSON.stringify(res.user))
      router("/")
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
                message: "Please input your Email! or membership ID",
                // type: "email",
              },
            ]}
          >
            <Input placeholder="Email or membership ID" />
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

        <div>
          Dont have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            Sign Up
          </Link>
        </div>
      </Card>
    </div>
  )
}
