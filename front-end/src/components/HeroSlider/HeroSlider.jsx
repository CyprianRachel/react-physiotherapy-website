import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./HeroSlider.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export function HeroSlider({ slider, className }) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={16}
      loop={true}
      lazy={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className={styles[className]}
    >
      {slider.map((e) => (
        <SwiperSlide key={e}>
          <img src={e} loading="lazy" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
