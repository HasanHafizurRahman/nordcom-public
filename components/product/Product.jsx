import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NewBadge from "../badge/NewBadge";
import DealBadge from "../badge/DealBadge";
import SoldOutBadge from "../badge/SoldOutBadge";
import WatchALotBadge from "../badge/Watch_A_Lot_Badge";
import IconHeart from "@/public/Nordcom-Icons/IconHeart";
import IconEyeVisible from "@/public/Nordcom-Icons/IconEyeVisible";
import IconShuffle from "@/public/Nordcom-Icons/IconShuffle";

const Product = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Generate the product route URL based on its id
  const productRoute = `/product/${product.id}`;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="w-[172px] flex flex-col relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute top-2 left-2 z-10">
        {product.badges?.includes("New") && <NewBadge />}
        {product.badges?.includes("Deal") && <DealBadge />}
        {product.badges?.includes("Sold Out") && <SoldOutBadge />}
        {product.badges?.includes("Watch a lot") && <WatchALotBadge />}
      </div>
      {isHovered && (
        <div className="absolute top-0 right-0 h-full flex flex-col gap-1 p-2 z-10">
          <button className="bg-primary-31 p-1 rounded-full">
            <IconHeart size={16} />
          </button>
          <button className="bg-primary-31 p-1 rounded-full">
            <IconEyeVisible size={16} />
          </button>
          <button className="bg-primary-25 p-1 rounded-full">
            <IconShuffle size={16} color="white" />
          </button>
        </div>
      )}
      <div className="">
        <Link href={productRoute}>
          {/* Wrap the product in a Link */}
          <Image
            src={product.image}
            alt={product.title}
            width={516}
            height={516}
            loading="lazy"
            className="w-[10.75rem] h-[10.75rem] object-cover mb-2"
          />
        </Link>
      </div>
      <div className="mt-2">
        <p className="text-sm line-clamp-3">{product.title}</p>
        <h4 className="font-semibold my-2">${product.price}</h4>
        <p className="text-xs text-primary-34">
          by <span className="text-primary-26">Lavioka Company</span>
        </p>
        {/* {isHovered && (
          <button className="bg-primary-19 text-white py-1 px-2 rounded-md">
            Add to Cart
          </button>
        )} */}
      </div>
    </div>
  );
};

export default Product;
