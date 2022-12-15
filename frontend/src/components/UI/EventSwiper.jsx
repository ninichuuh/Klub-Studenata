import { Swiper, SwiperSlide } from "swiper/react";
import Event from "../UI/Event";
import eventData from "../public/events/eventData";
import "swiper/css";
import { Mousewheel } from "swiper";
const eventsData = eventData;
const EventSwiper = () => {
  return (
    <Swiper
      loop={true}
      direction={"vertical"}
      mousewheel={true}
    slidesPerView={3}
      modules={[Mousewheel]}
      className="h-96"
    >
      {eventsData.map((event) => (
        <SwiperSlide key={event.id} event={event}>
          <Event
            key={event.id}
            name={event.eventName}
            text={event.text}
            date={event.date}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default EventSwiper;
