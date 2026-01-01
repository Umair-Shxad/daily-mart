import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function BookingModalSlider() {
  const slides = [
    {
      img: "/images/banner-modern.png",
    },
    {
      img: "/images/banner-new-col.png",
    },
    {
      img: "/images/banner-classic.png",
    },
  ];

  // 1. Create refs for the navigation elements
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  // 2. Add a state to force a re-render after initialization, ensuring refs are not null
  const [_, setInit] = useState(false);
  return (
    <div className="relative h-full">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        // Trigger a re-render on initialization
        onInit={() => setInit(true)}
        className="relative h-full"
      >
        {slides.map((slide, i) => {
          return (
            <SwiperSlide className="relative h-full" key={i}>
              <div
                className="relative h-full flex item-center justify-center flex-wrap flex-col bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${slide.img})` }}
              ></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* 2. Custom Navigation Buttons positioned outside or alongside the Swiper */}
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between z-10 pointer-events-none">
        {/* Previous Button */}
        <button
          ref={navigationPrevRef}
          className="pointer-events-auto bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer relative -left-3"
          aria-label="Previous Slide"
        >
          <BsArrowLeft className="text-xl" />
        </button>

        {/* Next Button */}
        <button
          ref={navigationNextRef}
          className="pointer-events-auto bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer relative left-3"
          aria-label="Next Slide"
        >
          <BsArrowRight className="text-xl" />
        </button>
      </div>
    </div>
  );
}

export default BookingModalSlider;
