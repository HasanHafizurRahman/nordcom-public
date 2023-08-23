"use client";
import React from "react";

const Banner = () => {
  const backgroundImageUrl =
    "https://img.freepik.com/free-vector/illustrated-online-marketing-web-page-template_79603-1015.jpg?w=740&t=st=1692806876~exp=1692807476~hmac=2fb8460223c38534df2d0ed2e0d97460fe0d87aea7180418b6b2eeadf1f5dfc6";

  return (
    <div className="px-1 md:px-8 py-4 w-full overflow-x-hidden">
      {/* Desktop View */}
      <div className="hidden md:flex gap-4">
        {/* Left Card */}
        <div
          className="w-[18%] h-[552px] bg-gray-100 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        ></div>

        {/* Middle Section */}
        <div className="grid grid-cols-[700px] gap-4">
          {/* Top Middle Card */}
          <div
            className="col-span-1 h-[366px] bg-gray-100 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          ></div>

          {/* Bottom Middle Cards */}
          <div className="flex gap-4">
            <div
              className="w-[33.33%] h-[172px] bg-gray-100 bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            ></div>
            <div
              className="w-[33.33%] h-[172px] bg-gray-100 bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            ></div>
            <div
              className="w-[33.33%] h-[172px] bg-gray-100 bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            ></div>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-[320px] gap-4">
          {/* Top Right Card */}
          <div
            className="col-span-1 h-[172px] bg-gray-100 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          ></div>
          {/* Middle Right Card */}
          <div
            className="col-span-1 h-[172px] bg-gray-100 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          ></div>

          {/* Bottom Right Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div
              className="col-span-1 h-[173px] bg-gray-100 bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            ></div>
            <div
              className="col-span-1 h-[173px] bg-gray-100 bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {/* Slider Carousel (Full Width) */}
        <div
          className="w-full h-[366px] bg-gray-100 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
          {/* Swiper Carousel Content */}
        </div>

        {/* Left Card */}
        <div
          className="w-full h-[270px] bg-gray-100 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
          {/* Content for Left Card */}
        </div>

        {/* Top Right and Middle Right Cards */}
        <div className="space-y-4">
          <div
            className="w-full h-[172px] bg-gray-100 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          ></div>
          <div
            className="w-full h-[172px] bg-gray-100 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          ></div>
        </div>

        {/* Middle Bottom Cards */}
        <div className="space-y-4">
          <div
            className="w-full h-[172px] bg-gray-100 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          ></div>
          <div
            className="w-full h-[172px] bg-gray-100 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          ></div>
          <div
            className="w-full h-[172px] bg-gray-100 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          ></div>
        </div>

        {/* Bottom Right Cards */}
        <div className="flex space-x-4">
          <div
            className="w-[50%] h-[173px] bg-gray-100 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          ></div>
          <div
            className="w-[50%] h-[173px] bg-gray-100 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
