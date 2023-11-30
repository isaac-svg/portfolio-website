import React from 'react'
import Card from '../card'

const Carousel = () => {
  return (
    <div className="carousel carousel-center max-w-full md:max-w-[90%] p-4 space-x-4 bg-neutral rounded-md">
  <div className="carousel-item">
    <Card/>
    
  </div> 
  <div className="carousel-item">
  <Card/>
  </div> 
  <div className="carousel-item">
  <Card/>
  </div> 
  <div className="carousel-item">
  <Card/>
  </div> 
  <div className="carousel-item">
  <Card/>
  </div> 
  <div className="carousel-item">
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />
  </div>
</div>
  )
}

export default Carousel