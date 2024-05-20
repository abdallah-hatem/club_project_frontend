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

  const partners = [
    {
      logo: "data:image/jpeg;base64,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",
      name: "Pepsi",
    },
    {
      logo: "data:image/jpeg;base64,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",
      name: "Starbucks",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
      name: "Nike",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      name: "IBM",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
      name: "Adidas",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      name: "Apple",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      name: "Google",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      name: "Facebook",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      name: "Microsoft",
    },
    {
      logo: "data:image/png;base64,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",
      name: "Coca-Cola",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
      name: "Samsung",
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

        {/* just for you section */}
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

        {/* our partners section */}
        <section className="py-12 mt-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Our Partners
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="w-40 h-40 flex items-center justify-center bg-white p-4 rounded-lg shadow-md"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
