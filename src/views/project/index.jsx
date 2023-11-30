import React from 'react'
import { Swiper, SwiperSlide , useSwiper} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CaroulSlider from '../test';

const Project = () => {
  const swiper = useSwiper()
  return (
    <div className='min-h-screen bg-gray-900 ' id='projects'>
      <section className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-800 rounded overflow-hidden">
        <div className="w-24 h-full bg-indigo-500"></div>
      </div>
      <div className="flex flex-wrap flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-2xl text-indigo-400 tracking-widest font-bold title-font mb-2 text-center mx-auto">#Projects 🖥️ and Blogs <span>📖</span></h1>
        <p className="sm:w-3/5 text-center leading-relaxed text-lg  first-letter:text-xl first-letter:font-semibold text-gray-500 mx-auto">
       I build projects in my spare time to solidify my understanding of new software concepts. Each project is a hands-on learning opportunity.
        I complement this by crafting insightful technical blogs that teach core software development concepts. My portfolio reflects this continuous cycle of learning and sharing. 🌟
        </p>
      </div>
    </div>
    {/* Slider */}
    <CaroulSlider/>
  </div>
</section>
    </div>
  )
}
/**
 * 
 */
export default Project

