import React from "react"
import { Carousel } from "antd"

export default function CarouselComp({ data }) {
  const onChange = (currentSlide) => {
    ""
  }

  return (
    <Carousel arrows draggable afterChange={onChange}>
      {data?.map((el, index) => (
        <div key={index}>
          <img src={el.url} alt="pi" className="w-full h-[500px]" />
        </div>
      ))}
    </Carousel>
  )
}
