import React from "react";
import NCButton from "../reusable-components/NCButton";

const MobileSliderBanner = ({
  backgroundImageUrl,
  category,
  title,
  title2,
}) => {
  return (
    <div
      className="w-full h-[366px] bg-gray-100 bg-cover bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute bottom-11 left-0 px-[55px]">
        <p className="text-sm font-semibold pb-4">{category}</p>
        <h3 className="font-semibold pb-3">{title}</h3>
        <h3 className="font-semibold pb-3">{title2}</h3>
        <NCButton text="Buy Now" />
      </div>
    </div>
  );
};

export default MobileSliderBanner;
