import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import Image from '../images/zIAalIVbTpmFaTgDK6Ithg.jpg'

export default function SwiperCpnt() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Image} alt="hbd ek"/></SwiperSlide>
        <SwiperSlide><img src={Image} alt="hbd ek"/></SwiperSlide>
        <SwiperSlide><img src={Image} alt="hbd ek"/></SwiperSlide>
        <SwiperSlide><img src={Image} alt="hbd ek"/></SwiperSlide>
        <SwiperSlide><img src={Image} alt="hbd ek"/></SwiperSlide>
        <SwiperSlide><img src={Image} alt="hbd ek"/></SwiperSlide>
      </Swiper>
    </>
  );
}
