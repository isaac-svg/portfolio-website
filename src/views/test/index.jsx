// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css/navigation"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import "./style.css"
import Controls from '../../components/pagination';
import Card from '../../components/card';
import { projets } from '../../assets/projects/data';

const CaroulSlider = () => {

  return (
  <div className="main-swiper_container">
      <Swiper
    effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper_container"
          autoplay={
            {
              delay:2000,
              disableOnInteraction:false,
              pauseOnMouseEnter:true,
              
            }
          }
          
    >
 
       
       {
        projets.map(({image_url,short_desc,code_url, title, live_url, long_desc})=> (
          <SwiperSlide  key={title} > <Card image={image_url} short_desc={short_desc} title={title} url={live_url} long_desc={long_desc} live_url={live_url} code_url={code_url}/> </SwiperSlide>
        ))
       }
      
      <Controls/>
    </Swiper>
  </div>
  );
};

export default CaroulSlider