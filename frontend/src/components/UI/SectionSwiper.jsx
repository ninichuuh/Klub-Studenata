import { Swiper, SwiperSlide } from "swiper/react";
import SectionCard from "../UI/SectionCard";
import "swiper/css";
import "swiper/css/effect-coverflow";
import sectionData from "../sections/sectionsData";
import { Mousewheel, EffectCoverflow } from "swiper";
const sectionsData = sectionData;
const SectionSwiper = () => {
  return (
    <Swiper
      effect={"coverflow"}
      loop={true}
      direction={"horizontal"}
      mousewheel={true}
      centeredSlides={true}
      slidesPerView={3}
      spaceBetween={30}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }}
      modules={[ Mousewheel, EffectCoverflow]}
      className="gird"
    >
      {sectionsData.map((section) => (
        <SwiperSlide key={section.id} section={section}>
          <SectionCard
            key={section.id}
            img={section.imgSrc}
            alt={section.imgAlt}
            text={section.text}
            name={section.sectionName}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default SectionSwiper;
