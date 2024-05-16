import React, { useEffect } from "react"
import { Form, Input, Button, message, Card } from "antd"
import { isSubscribed } from "../../helpers/user"

import GET_USER_BY_ID from "../../apis/users/getUserById"
import UPDATE_USER from "../../apis/users/updateUser"
import { addMinutesToDate } from "../../helpers/date"
import { formatDate } from "../../helpers/date"

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

      <Card className="w-full sm:w-3/4 lg:w-1/2 xl:w-[700px] p-8 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Profile</h1>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-lg font-semibold">Name</h2>
            <p className="text-gray-600">{user?.name}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Email</h2>
            <p className="text-gray-600">{user?.email}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Membership ID</h2>
            <p className="text-gray-600">{user?.membership_id}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Subscription End Date</h2>
            <p className="text-gray-600">
              {formatDate(user?.subscribtion_end_date)}
            </p>
          </div>
        </div>
      </Card>

      <h1 className="text-2xl mb-4 mt-[100px]">
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
