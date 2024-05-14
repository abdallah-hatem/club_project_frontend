import React, { useEffect } from "react"
import { Form, Input, Button, message } from "antd"
import { isSubscribed } from "../../helpers/user"

import GET_USER_BY_ID from "../../apis/users/getUserById"
import UPDATE_USER from "../../apis/users/updateUser"
import { addMinutesToDate } from "../../helpers/date"

export default function Details() {
  const user = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    GET_USER_BY_ID(user?.id).then((res) => console.log(res, "res"))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlePayment = (values) => {
    const paymentAmount = values.paymentAmount
    message.success(`Payment successful. Amount: $${paymentAmount}`)

    UPDATE_USER(user?.id, {
      subscribtion_end_date: addMinutesToDate(new Date(), 15),
    })
      .then((res) =>
        localStorage.setItem("user", JSON.stringify(res.updatedUser))
      )
      .finally(() => window.location.reload())
  }

  const ammount = 15000

  return (
    <div className="container mx-auto flex flex-col items-center mt-10 min-h-screen">
      <h1 className="text-2xl mb-10">Hello {user?.name}</h1>

      <h1 className="text-2xl mb-4">
        {!isSubscribed()
          ? `Your subscription is over. you need to pay ${ammount}$`
          : "Your subscription is active."}
      </h1>

      {!isSubscribed() && (
        <div className="w-full max-w-md mt-11">
          <Form
            name="paymentForm"
            initialValues={{ paymentAmount: "" }}
            onFinish={handlePayment}
          >
            <Form.Item
              name="paymentAmount"
              rules={[
                {
                  required: true,
                  message: "Please enter the payment amount",
                  pattern: /^15000$/,
                },
              ]}
            >
              <Input
                type="number"
                placeholder="Enter payment amount"
                className="w-full"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
                Pay
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </div>
  )
}
