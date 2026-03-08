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
import { BiSearch } from "react-icons/bi";

export default function ProductSlider({ galleryImages }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState("center");

  function handleMouseMove(e) {
    if (!zoomed) return;
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setOrigin(`${x}% ${y}%`);
  }

  function zoomIn() {
    setZoomed((prev) => !prev);
  }

  function handleLeave() {
    setZoomed(false);
  }

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
              <div
                className="w-full h-full relative overflow-hidden"
                onClick={zoomIn}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleLeave}
              >
                <img
                  src={slide}
                  className={`w-full h-full object-cover transition-transform duration-200 ${zoomed ? "cursor-zoom-out scale-200" : "cursor-zoom-in scale-100"}`}
                  style={{ transformOrigin: origin }}
                />
                {!zoomed && (
                  <div className="absolute bg-white w-10 h-10 bottom-3 right-3 flex justify-center items-center text-2xl">
                    <BiSearch />
                  </div>
                )}
              </div>
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
