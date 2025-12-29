import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsArrowRight } from "react-icons/bs";

import Button from "./Button";

function Slider() {
  const slides = [
    {
      tagline: "Super Sale",
      title: `Classic 2021 <br /> Interior Designs`,
      extraText: `There's nothing like trend`,
      ctaLink: "#",
      ctaText: "Shop Now",
      bg: "/images/banner-modern.png",
    },
    {
      tagline: "New Collections",
      title: `New Collections <br /> of Armchair`,
      extraText: `There's nothing like trend`,
      ctaLink: "#",
      ctaText: "Shop Now",
      bg: "/images/banner-new-col.png",
    },
    {
      tagline: "Up to 50% off",
      title: `Classic 2021 <br /> Interior Designs`,
      extraText: `There's nothing like trend`,
      ctaLink: "#",
      ctaText: "Shop Now",
      bg: "/images/banner-classic.png",
    },
  ];
  return (
    <div className="relative">
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        navigation
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide>
              <div
                className="relative h-[600px]  flex item-center justify-center flex-wrap flex-col bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${slide.bg})` }}
              >
                <div className="container">
                  <h5 className="text-brand mb-2 text-sm font-normal">
                    {slide.tagline}
                  </h5>
                  <h1
                    className="mb-1 text-5xl font-Sans font-semibold"
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  ></h1>
                  <span className="font-kaushan text-xl font-light">
                    {slide.extraText}
                  </span>
                  <div className="mt-8">
                    <Button btnType="link" variation="v1">
                      {slide.ctaText}
                      <BsArrowRight className="ms-3 transition-all duration-300 hover:text-white" />
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="custom-pagination mb-4 flex justify-center gap-2 absolute left-0 right-0 bottom-5 z-10"></div>
    </div>
  );
}

export default Slider;
