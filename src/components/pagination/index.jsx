import React from 'react'

const Controls = () => {
  return (
    <>
    <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <span className="material-symbols-outlined">arrow_back</span>
          </div>
          <div className="swiper-button-next slider-arrow" >
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>
          <div className="swiper-pagination"></div>
        </div>
    </>
  )
}

export default Controls