import React, { useEffect, useState } from "react"
import { Form, Input, Button, message, Card } from "antd"
import {
  isSubscribed,
  isUserLoggedIn,
  isUserSignedUp,
} from "../../helpers/user"

import GET_USER_BY_ID from "../../apis/users/getUserById"
import UPDATE_USER from "../../apis/users/updateUser"
import { addMinutesToDate } from "../../helpers/date"
import { formatDate } from "../../helpers/date"

export default function Details() {
  const user = JSON.parse(localStorage.getItem("user"))

  const [selectedPlan, setSelectedPlan] = useState("basic")
  const [selecetedCost, setSelecetedCost] = useState(100000)

  useEffect(() => {
    GET_USER_BY_ID(user?.id).then((res) => console.log(res, "res"))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlePayment = (values) => {
    const paymentAmount = values.paymentAmount
    message.success(`Payment successful. Amount: $${paymentAmount}`)

    UPDATE_USER(user?.id, {
      subscribtion_end_date: addMinutesToDate(new Date(), 525600), // 1 year
    })
      .then((res) =>
        localStorage.setItem("user", JSON.stringify(res.updatedUser))
      )
      .finally(() => window.location.reload())
  }

  return isUserSignedUp() || isUserLoggedIn() ? (
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

      {!isSubscribed() && (
        <div className="flex justify-center items-center mt-20">
          <div className="grid grid-cols-3 gap-8">
            <Card
              title="Basic"
              className={` text-center
            ${
              selectedPlan === "basic"
                ? "border-2 border-blue-500"
                : "border-2 border-white"
            }`}
            >
              <p className="text-4xl font-bold text-gray-800">$100000</p>
              {/* <p>Per month</p> */}
              <ul className="mt-4">
                <li>Access to basic facilities</li>
                <li>Access only 2 branches</li>
              </ul>
              <Button
                type="primary"
                className="mt-6"
                onClick={() => {
                  setSelectedPlan("basic")
                  setSelecetedCost(100000)
                }}
              >
                Choose
              </Button>
            </Card>
            <Card
              title="Standard"
              className={` text-center
            ${
              selectedPlan === "standard"
                ? "border-2 border-blue-500"
                : "border-2 border-white"
            }`}
            >
              <p className="text-4xl font-bold text-gray-800">$150000</p>
              <ul className="mt-4">
                <li>Access to standard facilities</li>
                <li>Access 4 branches</li>
              </ul>
              <Button
                type="primary"
                className="mt-6"
                onClick={() => {
                  setSelectedPlan("standard")
                  setSelecetedCost(150000)
                }}
              >
                Choose
              </Button>
            </Card>
            <Card
              title="Premium"
              className={` text-center min-w-[270px]
            ${
              selectedPlan === "premium"
                ? "border-2 border-blue-500"
                : "border-2 border-white"
            }`}
            >
              <p className="text-4xl font-bold text-gray-800">$200000</p>
              <ul className="mt-4">
                <li>Access to premium facilities</li>
                <li>Access all branches</li>
              </ul>
              <Button
                type="primary"
                className="mt-6"
                onClick={() => {
                  setSelectedPlan("premium")
                  setSelecetedCost(200000)
                }}
              >
                Choose
              </Button>
            </Card>
          </div>
        </div>
      )}

      <h1 className="text-2xl mb-4 mt-[100px]">
        {!isSubscribed()
          ? `Your subscription is ${selectedPlan}. you need to pay ${selecetedCost}$`
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
                  pattern:
                    selecetedCost === 100000
                      ? /^100000$/
                      : selecetedCost === 200000
                      ? /^200000$/
                      : /^150000$/,
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
  ) : (
    <div className="text-center mt-20 min-h-screen text-2xl font-bold">
      Please login or sign up to access this page
    </div>
  )
}
