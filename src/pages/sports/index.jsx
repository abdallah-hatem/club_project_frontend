import React, { useEffect, useState } from "react"
import { Button, Card, Select, Tag, message } from "antd"
import GET_ALL_SPORTS from "../../apis/sports/getAllSports"
import BOOK_PRACTICE from "../../apis/sports/bookPractice"
import GET_BOOKED_PRACTICE_BY_USER_ID from "../../apis/sports/getBookedPracticeByUserId"
import { scrollToTop } from "../../helpers/scrollToTop"

export default function Sports() {
  const { Meta } = Card
  const { Option } = Select

  const user = JSON.parse(localStorage.getItem("user"))

  const [sports, setSports] = useState([])
  const [selectedSport, setSelectedSport] = useState(null)
  const [availableCoaches, setAvailableCoaches] = useState([])
  const [selectedCoach, setSelectedCoach] = useState(null)
  const [selectedCoachDetails, setSelectedCoachDetails] = useState(null)

  console.log(selectedCoachDetails)

  console.log(sports)

  console.log(selectedCoach)

  const [bookedPractices, setBookedPractices] = useState([])

  const handleCoachFilterChange = (value) => {
    setSelectedCoach(value)
  }

  useEffect(() => {
    GET_ALL_SPORTS().then((res) => {
      setSports(res.result)
    })

    GET_BOOKED_PRACTICE_BY_USER_ID(user.id).then((res) => {
      setBookedPractices(res.result)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (selectedSport) {
      const coahces = selectedSport?.practices.map(
        (practice) => practice.coach.name
      )

      const filteredCoaches = coahces.filter((coach, index) => {
        return coahces.indexOf(coach) === index
      })

      setAvailableCoaches(filteredCoaches)
    }
  }, [selectedSport])

  useEffect(() => {
    const extractCoachDetailsByName = (coaches, coachName) => {
      return coaches.filter((coach) => coach.name === coachName)
    }

    if (selectedCoach) {
      const coachDetails = extractCoachDetailsByName(
        selectedSport?.practices.map((practice) => practice.coach),
        selectedCoach
      )
      setSelectedCoachDetails(coachDetails[0])
    }
  }, [selectedCoach])

  const handleSportSelect = (sport) => {
    setSelectedSport(sport)
  }

  function handleBookPractice(vals) {
    const { id } = vals
    BOOK_PRACTICE({ practice_id: id, user_id: user.id }).then((res) => {
      if (res?.message) return message.error("You already booked this practice")

      message.success("Successfully booked")
      scrollToTop()
      setTimeout(() => {
        window.location.reload()
      }, 10)
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8 lg:px-16 xl:px-32">
      {/* Section to display already booked practices */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-4">
          Booked Practices
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Map through booked practices and render cards */}
          {bookedPractices.length > 0 ? (
            bookedPractices?.map((el, index) => (
              <Card key={index} className="p-4">
                <p className="text-lg font-semibold mb-2">
                  {el.practice_schedule.sports.name} Practice
                </p>
                <p className="mb-1">
                  <span className="font-semibold">Coach:</span>{" "}
                  {el.practice_schedule.coach.name}
                </p>
                <p className="mb-1">
                  <span className="font-semibold">Time:</span>{" "}
                  {el.practice_schedule.from} - {el.practice_schedule.to}
                </p>
                <p className="mb-1">
                  <span className="font-semibold">Days:</span>{" "}
                  {el.practice_schedule.days.split(",").map((day) => (
                    <Tag key={day}>{day}</Tag>
                  ))}
                </p>
                <p>
                  <span className="font-semibold">Price:</span>{" "}
                  {el.practice_schedule.price}
                </p>
              </Card>
            ))
          ) : (
            <p className="text-center">No booked practices</p>
          )}
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center mb-8 mt-[120px]">
        Book a practice
      </h1>

      {/* choose a sport  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {sports?.map((el) => (
          <Card
            key={el.name}
            hoverable
            className={`border-2 ${
              selectedSport?.name === el.name
                ? "border-blue-500"
                : "border-gray-300"
            }`}
            onClick={() => handleSportSelect(el)}
          >
            <Meta title={el.name} />
          </Card>
        ))}
      </div>

      {/* Available Practices */}

      <h1 className="text-3xl font-bold text-center mb-8 mt-[100px]">
        Available Practices
      </h1>
      {/* Coach filter select field */}
      <div className="mb-10 w-[300px] mx-auto">
        <label
          htmlFor="coachFilter"
          className="block text-sm font-medium text-gray-700 text-center"
        >
          Filter by Coach:
        </label>
        <Select
          id="coachFilter"
          className="mt-1 block"
          defaultValue={""}
          onChange={handleCoachFilterChange}
          value={selectedCoach}
        >
          <Option value="">All</Option>
          {availableCoaches?.map((coach) => (
            <Option key={coach} value={coach}>
              {coach}
            </Option>
          ))}
        </Select>
      </div>

      {/* coach details */}
      {selectedCoachDetails && selectedCoach && (
        <Card className="max-w-xl mx-auto mt-5">
          <div className="text-center">
            <h2 className="text-xl font-semibold">
            Coach:   {selectedCoachDetails?.name}
            </h2>
            <p className="text-gray-500">Age: {selectedCoachDetails?.age}</p>
            <p className="text-gray-500">
              Years of Experience: {selectedCoachDetails?.years_of_experience}
            </p>
          </div>
          <p className="mt-4">{selectedCoachDetails?.brief}</p>
        </Card>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {selectedSport?.practices.length > 0 ? (
          selectedSport?.practices
            .filter(
              (practice) =>
                !selectedCoach || practice.coach.name === selectedCoach
            )
            .map((practice) => (
              <Card
                key={practice.id}
                hoverable
                className="border-2 border-gray-300"
              >
                <Meta
                  title={selectedSport.name + " Practice"}
                  description={`Coach: ${practice.coach.name}`}
                />
                <p className="mt-2 mb-1">
                  From: {practice.from} - To: {practice.to}
                </p>
                <p className="mb-1">
                  Days:{" "}
                  {practice.days.split(",").map((day) => (
                    <Tag key={day}>{day}</Tag>
                  ))}
                </p>
                <p>Price: {practice.price}</p>
                <Button
                  type="primary"
                  className="w-full mt-4"
                  onClick={() => handleBookPractice(practice)}
                >
                  Book
                </Button>
              </Card>
            ))
        ) : (
          <p className="text-center">No available practices for this sport</p>
        )}
      </div>
    </div>
  )
}
