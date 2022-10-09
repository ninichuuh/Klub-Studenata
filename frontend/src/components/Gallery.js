// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { img1, img2, img3, img4, img5 } from "../img/Images";

// import required modules
import { Pagination, Lazy, Navigation, Autoplay, Keyboard } from "swiper";
const images = [img1, img2, img3, img4, img5];
const sest10te = [img2, img4, img5];

export default function Gallery() {
  const sixties = sest10te.map((src, indeks) => (
    <SwiperSlide>
      <img className="picture" src={src} key={indeks} alt="" />
    </SwiperSlide>
  ));
  return (
    <div className="spacer" id="gallery">
      <h1>Galerija kroz leta</h1>
      <Swiper
        className="mySwiper swiper-h"
        keyboard={{
          enabled: true,
        }}
        spaceBetween={50}
        lazy={true}
        loop={true}
        pagination={{
          clickable: true,
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Lazy, Navigation, Keyboard]}
      >
        {images.map((src, index) => (
          <SwiperSlide>
            <img
              className="picture"
              src={src}
              key={index}
              alt={`${index}0 te`}
            />
            <br />
            {index}0 te
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <Swiper
            className="mySwiper swiper-v"
            direction={"vertical"}
            keyboard={{
              enabled: true,
            }}
            spaceBetween={50}
            lazy={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Pagination, Lazy, Navigation, Keyboard, Autoplay]}
          >
            {sixties}
          </Swiper>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
