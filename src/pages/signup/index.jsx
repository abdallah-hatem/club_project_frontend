import React from "react"
import { Card, Form, Input, Button, message } from "antd"

import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import SIGNUP from "../../apis/auth/signup"

export default function Signup() {
  const router = useNavigate()

  const onFinish = (values) => {
    SIGNUP(values).then((res) => {
      console.log(res, "ressss")
      if (!res?.user) return message.error("Error while signing up")

      localStorage.setItem("token", res.jwt)

      message.success("Successfully signed up, please login")
      router("/login")
    })
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Card title="Sign Up" style={{ width: 400 }}>
        <Form
          name="signupForm"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your Name!",
              },
            ]}
          >
            <Input placeholder="Name" />
          </Form.Item>

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

          <Form.Item
            name="address"
            rules={[
              {
                required: true,
                message: "Please input your Address!",
              },
            ]}
          >
            <Input placeholder="Address" />
          </Form.Item>

          <Form.Item
            name="id_card"
            rules={[
              {
                required: true,
                message: "Please input your ID Card!",
              },
            ]}
          >
            <Input placeholder="ID Card" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <div>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </div>
      </Card>
    </div>
  )
}
