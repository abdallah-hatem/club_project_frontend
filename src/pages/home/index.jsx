import React, { useEffect } from "react"
import CarouselComp from "../../components/carouselComp"

import NewsCard from "../../components/newsCard"
import GET_NEWS from "../../apis/news/getNews"

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

  const [news, setNews] = React.useState([])

  useEffect(() => {
    GET_NEWS().then((res) => setNews(res?.result))
  }, [])

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
              id={el.id}
              key={index}
              date={el.date}
              title={el.title}
              imageUrl={el.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
