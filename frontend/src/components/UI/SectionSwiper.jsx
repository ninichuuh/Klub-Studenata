import { Swiper, SwiperSlide } from "swiper/react";
import SectionCard from "../UI/SectionCard";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import sectionData from "../sections/sectionsData";
import { Navigation, Mousewheel, Pagination, EffectCoverflow } from "swiper";
const sectionsData = sectionData;
const SectionSwiper = () => {
  return (
    <Swiper
      effect={"coverflow"}
      loop={true}
      navigation={true}
      direction={"horizontal"}
      mousewheel={true}
      centeredSlides={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }}
      modules={[Navigation, Mousewheel, EffectCoverflow, Pagination]}
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
