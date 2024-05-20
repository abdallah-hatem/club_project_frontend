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

  const cards = [
    {
      image: "https://clubmanager365.com/img/tennis_susan.jpg",
      title: "Book a Sporting Court",
      subtitle: "Reserve Your Spot",
      description:
        "Easily book a sporting court for your favorite sport. Select the time and court of your choice.",
    },
    {
      image: "	https://clubmanager365.com/img/photo3.jpg",
      title: "Book a Practice",
      subtitle: "Schedule Practice Sessions",
      description:
        "Schedule practice sessions with our trainers. Choose the sport and time that fits your schedule.",
    },
    {
      image:
        "https://images.pexels.com/photos/3771048/pexels-photo-3771048.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Online Membership ID Renewal",
      subtitle: "Renew Your Membership",
      description:
        "Conveniently renew your membership ID online. Stay active and enjoy our facilities.",
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

        <section className="py-12 bg-gray-100 mt-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Just for You
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cards.map((card, index) => (
                <div key={index} className="overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <h4 className="text-md font-medium text-gray-600 mb-2">
                      {card.subtitle}
                    </h4>
                    <p className="text-gray-700">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
