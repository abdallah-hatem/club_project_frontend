import React from "react"
import CarouselComp from "../../components/carouselComp"

import NewsCard from "../../components/newsCard"

export default function Home() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb3QlMjBtYXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb3QlMjBtYXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb3QlMjBtYXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ]

  const news = [
    {
      date: "10-10-2022",
      title: "Starting XI announced for Baladiyat El Mahalla",
      url: "https://alahly-images.s3.us-east-2.amazonaws.com/Article/original/IMG_7857-662a9f5ec19d4.JPG",
    },
    {
      date: "10-10-2022",
      title: "Starting XI announced for Baladiyat El Mahalla",
      url: "https://alahly-images.s3.us-east-2.amazonaws.com/Article/original/IMG_7857-662a9f5ec19d4.JPG",
    },
    {
      date: "10-10-2022",
      title: "Starting XI announced for Baladiyat El Mahalla",
      url: "https://alahly-images.s3.us-east-2.amazonaws.com/Article/original/IMG_7857-662a9f5ec19d4.JPG",
    },
    {
      date: "10-10-2022",
      title: "Starting XI announced for Baladiyat El Mahalla",
      url: "https://alahly-images.s3.us-east-2.amazonaws.com/Article/original/IMG_7857-662a9f5ec19d4.JPG",
    },
    {
      date: "10-10-2022",
      title: "Starting XI announced for Baladiyat El Mahalla",
      url: "https://alahly-images.s3.us-east-2.amazonaws.com/Article/original/IMG_7857-662a9f5ec19d4.JPG",
    },
  ]

  return (
    <div className="min-h-screen">
      <div>
        <CarouselComp data={images} />
      </div>

      <div className="px-[100px]">
        <h1 className="text-3xl font-bold my-10">Al Ahly News</h1>
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
