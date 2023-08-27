"use client";
import React from "react";
import { Navigation, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import SliderBanner from "./SliderBanner";
import MobileSliderBanner from "./MobileSliderBanner";
import NCButton from "../reusable-components/NCButton";

const Banner = () => {
  const backgroundImageUrl =
    "https://img.freepik.com/free-photo/shopping-cart-filled-with-coins-copy-space-background_23-2148305919.jpg?w=740&t=st=1692892634~exp=1692893234~hmac=89fada53058f4e29cccd3d1937387d61869534077782c23cea1bd1e295ea1ed8";
  return (
    <div className="px-1 md:px-8 py-4">
      {/* Desktop View */}
      <div className="hidden md:flex gap-4">
        {/* Left Card */}
        <div
          className="w-[18%] h-[554px] bg-gray-100 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
          <div className="flex flex-col justify-between h-full px-6 py-10">
            <div className="text-center">
              <p className="font-semibold mb-2">Asus</p>
              <h3 className="font-semibold mb-1">Super Sale</h3>
              <h3 className="font-semibold">Laptop Gaming</h3>
            </div>
            <div className="text-center">
              <NCButton text="Order Now" />
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="w-[56%] flex flex-col gap-4">
          {/* Top Middle Carousel Section */}
          <div className="col-span-1">
            <Swiper
              modules={[Navigation, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              autoplay={true}
            >
              <SwiperSlide>
                <SliderBanner
                  backgroundImageUrl="https://img.freepik.com/free-photo/shopping-cart-filled-with-coins-copy-space-background_23-2148305919.jpg?w=740&t=st=1692892634~exp=1692893234~hmac=89fada53058f4e29cccd3d1937387d61869534077782c23cea1bd1e295ea1ed8"
                  category="ANOTHER_CATEGORY"
                  title="HAND WATCH"
                  title2="ROSSIN"
                />
              </SwiperSlide>
              <SwiperSlide>
                <SliderBanner
                  backgroundImageUrl="https://img.freepik.com/free-photo/shopping-cart-filled-with-coins-copy-space-background_23-2148305919.jpg?w=740&t=st=1692892634~exp=1692893234~hmac=89fada53058f4e29cccd3d1937387d61869534077782c23cea1bd1e295ea1ed8"
                  category="ANOTHER_CATEGORY"
                  title="HAND WATCH"
                  title2="ROSSIN"
                />
              </SwiperSlide>
              <SwiperSlide>
                <SliderBanner
                  backgroundImageUrl="https://img.freepik.com/free-photo/shopping-cart-filled-with-coins-copy-space-background_23-2148305919.jpg?w=740&t=st=1692892634~exp=1692893234~hmac=89fada53058f4e29cccd3d1937387d61869534077782c23cea1bd1e295ea1ed8"
                  category="ANOTHER_CATEGORY"
                  title="HAND WATCH"
                  title2="ROSSIN"
                />
              </SwiperSlide>
              {/* Add more SwiperSlides for additional top middle cards */}
            </Swiper>
          </div>

          {/* Bottom Middle Cards */}
          <div className="flex gap-4">
            <div
              className="w-[33.33%] h-[172px] bg-gray-100 bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            >
              <div className="pt-11 pl-7 ">
                <p>category</p>
                <h5>Black Friday</h5>
                <h5>Buy 1 Get 1</h5>
              </div>
            </div>
            <div
              className="w-[33.33%] h-[172px] bg-gray-100 bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            >
              <div className="pt-11 pl-7 ">
                <p>category</p>
                <h5>Black Friday</h5>
                <h5>Buy 1 Get 1</h5>
              </div>
            </div>
            <div
              className="w-[33.33%] h-[172px] bg-gray-100 bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            >
              <div className="pt-11 pl-7 ">
                <p>category</p>
                <h5>Black Friday</h5>
                <h5>Buy 1 Get 1</h5>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}

        <div className="w-[24%] flex flex-col gap-4">
          {/* Top Right Card */}
          <div
            className="col-span-1 h-[175px] bg-gray-100 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          >
            <div className="pt-11 pl-7 ">
              <p>category</p>
              <h5>Black Friday</h5>
              <h5>Buy 1 Get 1</h5>
            </div>
          </div>
          {/* Middle Right Card */}
          <div
            className="col-span-1 h-[175px] bg-gray-100 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          >
            <div className="pt-11 pl-7 ">
              <p>category</p>
              <h5>Black Friday</h5>
              <h5>Buy 1 Get 1</h5>
            </div>
          </div>

          {/* Bottom Right Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div
              className="col-span-1 h-[173px] bg-gray-100 bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            >
              <div className="pt-11 pl-7 ">
                <p>category</p>
                <h5>Black Friday</h5>
                <h5>Buy 1 Get 1</h5>
              </div>
            </div>
            <div
              className="col-span-1 h-[173px] bg-gray-100 bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            >
              <div className="pt-11 pl-7 ">
                <p>category</p>
                <h5>Black Friday</h5>
                <h5>Buy 1 Get 1</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {/* Slider Carousel (Full Width) */}
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={true}
        >
          <SwiperSlide>
            <MobileSliderBanner
              backgroundImageUrl="https://img.freepik.com/free-photo/shopping-cart-filled-with-coins-copy-space-background_23-2148305919.jpg?w=740&t=st=1692892634~exp=1692893234~hmac=89fada53058f4e29cccd3d1937387d61869534077782c23cea1bd1e295ea1ed8"
              category="ANOTHER_CATEGORY"
              title="TitlSUPER FASHION SALEe 1"
              title2="Beautiful Nice"
            />
          </SwiperSlide>
          <SwiperSlide>
            <MobileSliderBanner
              backgroundImageUrl="https://img.freepik.com/free-photo/shopping-cart-filled-with-coins-copy-space-background_23-2148305919.jpg?w=740&t=st=1692892634~exp=1692893234~hmac=89fada53058f4e29cccd3d1937387d61869534077782c23cea1bd1e295ea1ed8"
              category="ANOTHER_CATEGORY"
              title="TitlSUPER FASHION SALEe 1"
              title2="Beautiful Nice"
            />
          </SwiperSlide>
          <SwiperSlide>
            <MobileSliderBanner
              backgroundImageUrl="https://img.freepik.com/free-photo/shopping-cart-filled-with-coins-copy-space-background_23-2148305919.jpg?w=740&t=st=1692892634~exp=1692893234~hmac=89fada53058f4e29cccd3d1937387d61869534077782c23cea1bd1e295ea1ed8"
              category="ANOTHER_CATEGORY"
              title="TitlSUPER FASHION SALEe 1"
              title2="Beautiful Nice"
            />
          </SwiperSlide>
        </Swiper>
        {/* Left Card */}
        <div
          className="w-full h-[270px] bg-gray-100 bg-cover bg-no-repeat relative"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
          {/* Content for Left Card */}
          <div className="absolute bottom-11 left-0 px-[55px]">
            <p className="text-sm font-semibold pb-4">category</p>
            <h3 className="font-semibold pb-3">Super Sale</h3>
            <h3 className="font-semibold pb-3">Laptop Gaming</h3>
            <NCButton text="Buy Now" />
          </div>
        </div>{" "}
        {/* Top Right and Middle Right Cards */}
        <div className="space-y-4">
          <div
            className="w-full h-[172px] bg-gray-100 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          >
            <div className="pt-11 pl-7 ">
              <p>category</p>
              <h5>Black Friday</h5>
              <h5>Buy 1 Get 1</h5>
            </div>
          </div>
          <div
            className="w-full h-[172px] bg-gray-100 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          >
            <div className="pt-11 pl-7 ">
              <p>category</p>
              <h5>Black Friday</h5>
              <h5>Buy 1 Get 1</h5>
            </div>
          </div>
        </div>{" "}
        {/* Middle Bottom Cards */}
        <div className="space-y-4">
          <div
            className="w-full h-[172px] bg-gray-100 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          >
            <div className="pt-11 pl-7 ">
              <p>category</p>
              <h5>Black Friday</h5>
              <h5>Buy 1 Get 1</h5>
            </div>
          </div>
          <div
            className="w-full h-[172px] bg-gray-100 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          >
            <div className="pt-11 pl-7 ">
              <p>category</p>
              <h5>Black Friday</h5>
              <h5>Buy 1 Get 1</h5>
            </div>
          </div>
          <div
            className="w-full h-[172px] bg-gray-100 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          >
            <div className="pt-11 pl-7 ">
              <p>category</p>
              <h5>Black Friday</h5>
              <h5>Buy 1 Get 1</h5>
            </div>
          </div>
        </div>
        {/* Bottom Right Cards */}
        <div className="flex space-x-4">
          <div
            className="w-[50%] h-[173px] bg-gray-100 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          >
            <div className="pt-11 pl-7 ">
              <p>category</p>
              <h5>Black Friday</h5>
              <h5>Buy 1 Get 1</h5>
            </div>
          </div>
          <div
            className="w-[50%] h-[173px] bg-gray-100 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          >
            <div className="pt-11 pl-7 ">
              <p>category</p>
              <h5>Black Friday</h5>
              <h5>Buy 1 Get 1</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
