// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay } from 'swiper/modules';
import Slide1 from './Slide1';
import Slide2 from './Slide2';


const Hero = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="hero"
    >
      <SwiperSlide><Slide1/></SwiperSlide>
      <SwiperSlide><Slide2/></SwiperSlide>
    </Swiper>
  );
};

export default Hero;
