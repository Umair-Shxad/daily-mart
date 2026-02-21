import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function ProductSlider({ galleryImages }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="product-slider">
      <Swiper
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="h-[500px]"
      >
        {galleryImages.map((slide, i) => {
          return (
            <SwiperSlide className="relative h-full" key={i}>
              <img src={slide} className="w-full h-full object-cover" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={`h-[120px] mt-4 ${galleryImages.length < 4 && "prod_thumb_center"}`}
      >
        {galleryImages.map((slide, i) => {
          return (
            <SwiperSlide className="relative h-full" key={i}>
              <img
                src={slide}
                className="w-full h-full object-cover cursor-pointer"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
