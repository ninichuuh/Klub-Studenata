// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { useNavigate } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

import { img1, img2, img3, img4, img5 } from "../../img/images";

// import required modules
import { Lazy, Autoplay, Keyboard, EffectCreative } from "swiper";

const images = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
];

const Gallery = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/gallery");
  };

  return (
    <section
      id="gallery"
      className="widescreen:section-min-height tallscreen:section-min-height section-min-height my-12 flex scroll-mt-20 flex-col p-6"
    >
      <h1 className="mb-12 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Galerija kroz leta
      </h1>
      <Swiper
        className="h-full w-full"
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-125%", 0, -800],
            rotate: [0, 0, -90],
          },
          next: {
            shadow: true,
            translate: ["125%", 0, -800],
            rotate: [0, 0, 90],
          },
        }}
        preloadImages={false}
        centeredSlides={true}
        lazy={true}
        loop={true}
        modules={[Lazy, Keyboard, Autoplay, EffectCreative]}
      >
        {images.map((image, i) => (
          <SwiperSlide
            key={i}
            image={image}
            className="flex items-center justify-center"
          >
            <img src={image.src} alt="" className="block object-cover" />
            {image.id}
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="mt-20 h-20 w-48 self-center rounded-xl border border-solid border-slate-900 bg-green-900 p-3  font-semibold capitalize text-white hover:bg-green-700 active:bg-green-500 dark:border-none"
        onClick={handleClick}
      >
        Cijela Galerija
      </button>
    </section>
  );
};

export default Gallery;
