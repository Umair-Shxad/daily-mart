import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Card from "./Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useRef, useState } from "react";

function RelatedProducts({ relatedProducts, slidesPerView }) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [_, setInit] = useState(false);

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onInit={() => setInit(true)}
        className={relatedProducts.length < 4 ? "prod_thumb_center" : ""}
      >
        {relatedProducts.map((product, i) => (
          <SwiperSlide key={i}>
            <Card key={product.id} product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-[calc(50%+40px)] flex justify-between z-10 pointer-events-none">
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

export default RelatedProducts;
