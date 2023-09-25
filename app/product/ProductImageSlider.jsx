import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

const ProductImageSlider = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-[23rem] h-[23rem] rounded-lg flex-shrink-0"
      >
        <SwiperSlide>
          <Image
            width={23 * 16}
            height={23 * 16}
            src="https://i.ibb.co/jvQ4VFV/original-imagp279xqv69rjq.webp"
            alt=""
            loading="lazy"
            className="h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={23 * 16}
            height={23 * 16}
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={23 * 16}
            height={23 * 16}
            src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
            alt=""
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={23 * 16}
            height={23 * 16}
            src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
            alt=""
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        // spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="flex space-x-4 mt-[0.75rem] h-[5.19rem]"
      >
        <SwiperSlide>
          <Image
            fill
            src="https://i.ibb.co/jvQ4VFV/original-imagp279xqv69rjq.webp"
            alt="product-image"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductImageSlider;
