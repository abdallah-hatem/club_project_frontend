import React from "react"
import CarouselComp from "../../components/carouselComp"

import NewsCard from "../../components/newsCard"

export default function Home() {
  const images = [
    {
      url: "https://images.pexels.com/photos/1378425/pexels-photo-1378425.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      url: "https://images.pexels.com/photos/12239381/pexels-photo-12239381.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      url: "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ]

  const news = [
    {
      date: "12-10-2024",
      title: "Starting XI announced for Baladiyat El Mahalla",
      url: "https://alahly-images.s3.us-east-2.amazonaws.com/Article/original/IMG_7857-662a9f5ec19d4.JPG",
    },
    {
      date: "15-5-2024",
      title: "Final workout ahead of Tunisia's trip",
      url: "https://alahly-images.s3.us-east-2.amazonaws.com/Article/original/_MFD0385-6644c43917652.jpg",
    },
    {
      date: "11-06-2024",
      title: "Cristo to miss Tunisia's trip",
      url: "https://alahly-images.s3.us-east-2.amazonaws.com/Article/original/_MFD0877-6644e2f1b908e.jpg",
    },
    {
      date: "12-12-2024",
      title: "Al Ahly Lift the CAF Champions League Trophy",
      url: "https://alahly-images.s3.us-east-2.amazonaws.com/Video/original/%D8%A7%D9%84%D8%AA%D8%AA%D9%88%D9%8A%D8%AC-5fcf5be6270e6.jpg",
    },
    {
      date: "10-10-2022",
      title: "First leg of Champions League Final - Media Day",
      url: "https://alahly-images.s3.us-east-2.amazonaws.com/Article/original/received_1701905527243663-6646477fcceb8.jpeg",
    },
  ]

  return (
    <div className="min-h-screen">
      <div>
        <CarouselComp data={images} />
      </div>

      <div className="px-[100px]">
        <h1 className="text-3xl font-bold my-10">Sport hub News</h1>
        <div className="grid grid-cols-3 gap-4">
          {news.map((el, index) => (
            <NewsCard
              key={index}
              date={el.date}
              title={el.title}
              imageUrl={el.url}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
