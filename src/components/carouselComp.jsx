import React from "react"
import { Carousel } from "antd"

export default function CarouselComp({ data }) {
  const onChange = (currentSlide) => {
    ""
  }

  return (
    <Carousel arrows draggable afterChange={onChange} autoplay autoplaySpeed={2000} >
      {data?.map((el, index) => (
        <div key={index}>
          <img src={el.url} alt="pic" className="w-full h-[610px]" />
        </div>
      ))}
    </Carousel>
  )
}
