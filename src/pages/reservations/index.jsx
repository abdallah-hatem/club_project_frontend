import React, { useEffect, useState } from "react"
import GET_USER_BY_ID from "../../apis/users/getUserById"
import ResrvationCard from "../../components/resrvationCard"
import { Button, Col, Row, message, Steps } from "antd"
import GET_BOOKED_TIMES from "../../apis/reservations/getBookedTimes"
import ChooseActivity from "./components/chooseActivity"
import ChooseTime from "./components/chooseTime"
import GET_FIELDS_BY_ACTIVITY_ID from "../../apis/fields/getFieldsByActivityId"

export default function Reservations() {
  const user = JSON.parse(localStorage.getItem("user"))

  const [data, setData] = useState()
  const [current, setCurrent] = useState(0)
  const [selectedActivityId, setSelectedActivityId] = useState()
  const [selectedDate, setSelectedDate] = useState()
  const [selectedField, setSelectedField] = useState()
  const [fields, setFields] = useState()
  const [bookedTimes, setBookedTimes] = useState()

  console.log(data)

  useEffect(() => {
    selectedActivityId &&
      selectedDate &&
      selectedField &&
      GET_BOOKED_TIMES({
        activity_id: selectedActivityId,
        field_id: selectedField,
        date: `${selectedDate}T21:00:00.000Z`,
      }).then((res) => setBookedTimes(res.result))
  }, [selectedActivityId, selectedDate, selectedField])

  useEffect(() => {
    selectedActivityId &&
      GET_FIELDS_BY_ACTIVITY_ID(selectedActivityId).then((res) =>
        setFields(res.result)
      )
  }, [selectedActivityId])

  useEffect(() => {
    GET_USER_BY_ID(user?.id).then((res) => setData(res.user.reservations))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }

  const steps = [
    {
      title: "Choose Activity",
      content: (
        <ChooseActivity
          setSelectedActivityId={setSelectedActivityId}
          next={next}
        />
      ),
    },
    {
      title: "Choose Field and time",
      content: (
        <ChooseTime
          setSelectedDate={setSelectedDate}
          setSelectedField={setSelectedField}
          fields={fields && fields}
          bookedTimes={bookedTimes && bookedTimes}
          selectedActivityId={selectedActivityId && selectedActivityId}
          userId={user?.id}
        />
      ),
    },
  ]

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }))

  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: "grey",
    backgroundColor: "white",
    borderRadius: "10px",
    border: `1px dashed black`,
    marginTop: 16,
  }

  return (
    <div className="min-h-screen px-[100px]">
      <h1 className="text-2xl mb-4 mt-5">Your Reservations</h1>
      <div className="grid grid-cols-4 gap-4">
        {data && data.length > 0 ? (
          data.map((el, index) => (
            <ResrvationCard
              scheduleId={el.id}
              title={el.activity.name}
              courtName={el.fields.name}
              selectedTimes={el.selectedTimes}
              date={el.date}
              key={index}
            />
          ))
        ) : (
          <h3 className="text-center text-lg">No Reservations Found</h3>
        )}
      </div>

      {/* reserve a court */}
      <div className="container mx-auto mt-8 mb-8">
        <Row justify="center">
          <Col span={24}>
            <div className="text-center mb-8 mt-16">
              <h1 className="text-3xl text-center font-bold">
                Activity Reservation
              </h1>
              <p className="text-gray-500">
                Select a date and time range to reserve a court
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <>
        <Steps current={current} items={items} />
        <div style={contentStyle}>{steps[current].content}</div>
        <div
          style={{
            marginTop: 24,
          }}
        >
          {/* {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )} */}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
        </div>
      </>
    </div>
  )
}
