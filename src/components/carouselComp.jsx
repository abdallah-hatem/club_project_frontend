import React, { useRef } from "react"
import { Carousel } from "antd"

export default function CarouselComp({ data }) {
  const onChange = (currentSlide) => {
    ""
  }
  const carouselRef = useRef(null)

  return (
    <div>
      <Carousel
        ref={carouselRef}
        // arrows
        draggable
        afterChange={onChange}
        autoplay
        autoplaySpeed={2000}
      >
        {data?.map((el, index) => (
          <div key={index}>
            <img src={el.url} alt="pic" className="w-full h-[610px]" />
          </div>
        ))}
      </Carousel>

      <div
        onClick={() => carouselRef?.current?.prev()}
        className="bg-white opacity-50 hover:opacity-85 w-10 h-10 rounded-full text-center absolute bottom-[50%] left-10 cursor-pointer flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
        >
          <path d="M12 4l1.41 1.41L7.83 11H20v2H7.83l5.58 5.59L12 20l-8-8z" />
        </svg>
      </div>
      <div
        onClick={() => carouselRef?.current?.next()}
        className="bg-white opacity-50 hover:opacity-85 w-10 h-10 rounded-full text-center absolute bottom-[50%] right-10 cursor-pointer flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
        >
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
        </svg>
      </div>
    </div>
  )
}
