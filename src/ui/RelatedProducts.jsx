import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Card from "./Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function RelatedProducts({ relatedProducts, slidesPerView }) {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        navigation={true}
      >
        {relatedProducts.map((product, i) => (
          <SwiperSlide key={i}>
            <Card key={product.id} product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default RelatedProducts;
