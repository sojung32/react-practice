import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./../images', false, /\.(png|jpe?g|svg)$/));

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
        <SwiperSlide><img src={images['UJ4FMfZlTKaFbro1sEE6nQ.jpg']} alt="hbd"/></SwiperSlide>
        <SwiperSlide><img src={images['zIAalIVbTpmFaTgDK6Ithg.jpg']} alt="hbd"/></SwiperSlide>
        <SwiperSlide><img src={images['DaTnRahcTKa308KoEvtkow.jpg']} alt="hbd"/></SwiperSlide>
        <SwiperSlide><img src={images['7eRAfZZ_T72cIsU-rJCpkw.jpg']} alt="hbd"/></SwiperSlide>
        <SwiperSlide><img src={images['byMVeYQdSsy-lP00Rh8shA.jpg']} alt="hbd"/></SwiperSlide>
        <SwiperSlide><img src={images['bib0JxcWQU-duhbYJ6o7QQ.jpg']} alt="hbd"/></SwiperSlide>
        <SwiperSlide><img src={images['NX5WwCqPT5iaEY6OaYKLbA.jpg']} alt="hbd"/></SwiperSlide>
      </Swiper>
    </>
  );
}
