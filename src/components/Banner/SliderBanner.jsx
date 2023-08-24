import React from "react";
import NCButton from "../reusable-components/NCButton";

const SliderBanner = ({ backgroundImageUrl, category, title, title2 }) => {
  return (
    <div
      className="h-[366px] bg-gray-100 bg-cover bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute bottom-11 left-0 px-[55px] space-y-5">
        <p className="text-sm font-semibold">{category}</p>
        <h1 className="font-semibold">{title}</h1>
        <h1 className="font-semibold">{title2}</h1>
        <NCButton text="Buy Now" />
      </div>
    </div>
  );
};

export default SliderBanner;
