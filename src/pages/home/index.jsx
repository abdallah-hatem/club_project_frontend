import React from "react"
import CarouselComp from "../../components/carouselComp"

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

  return (
    <div className="min-h-screen">
      <div>
        <CarouselComp data={images} />
      </div>
    </div>
  )
}
