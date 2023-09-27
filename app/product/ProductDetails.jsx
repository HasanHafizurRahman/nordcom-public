import React, { useRef, useState } from "react";

import IconStar_Filled from "@/public/Nordcom-Icons/IconStar_Filled";
import IconStar_Half from "@/public/Nordcom-Icons/IconStar_Half";
import IconStar from "@/public/Nordcom-Icons/IconStar";
import { Button } from "../../components/ui/button";
import IconHeart from "@/public/Nordcom-Icons/IconHeart";
import IconFacebook from "@/public/Nordcom-Icons/IconFacebook";
import IconLinkedin from "@/public/Nordcom-Icons/IconLinkedin";
import IconTwitter from "@/public/Nordcom-Icons/IconTwitter";
import IconMail from "@/public/Nordcom-Icons/IconMail";
import ProductImageSlider from "./ProductImageSlider";

import IconCart from "@/public/Nordcom-Icons/IconCart";
import ColorSection from "./ColorSection";
import Storage from "./Storage";
import Condition from "./Condition";
import Product_Description from "./Product_Description";
import Specifications from "./Specifications";
import ReviewStats from "./review/ReviewStats";
import ReviewComment from "./review/ReviewComment";
import QuestionAnswere from "./QuestionAnswere";

export default function ProductDetails({ product }) {
  const [selectedImage, setSelectedImage] = useState(false);

  const handleImageClick = () => {
    setSelectedImage(!selectedImage);
  };

  return (
    <div className="container">
      <div className="flex gap-[7.62rem]">
        <div className="w-[23rem] fixed top-0 z-10">
          <ProductImageSlider product={product} />
          <Button className="w-full mt-7 h-[2.5rem] px-4 py-2 flex items-center gap-1 rounded-md text-white text-sm bg-primary-19 mr-4">
            <IconCart size={16} color="white" />
            Add To Cart
          </Button>
        </div>
        <div className="flex-1 ml-[30.62rem]">
          <h4 className="mb-2">
            Infinix Smart 7 HD (Ink Black, 64 GB) (2 GB RAM)
          </h4>

          <div className="flex items-start gap-3">
            <div className="inline-flex items-center py-[0.125rem] pr-1 pl-[0.375rem] bg-primary-19 mb-2 rounded-md text-white">
              <span className="text-xs font-medium">4.4</span>
              <span className="text-xs">★</span>
            </div>
            <div className="text-sm text-primary-34">
              <span>1,08,426 Ratings&nbsp;</span>
              <span class="_13vcmD">&amp;</span>
              <span>&nbsp;7,548 Reviews</span>
            </div>
          </div>

          <h2 className="text-[1.75rem] font-medium mb-4">${product.price}</h2>

          {/* color selection */}
          <div className="mb-[1.44rem]">
            <ColorSection />
          </div>
          {/* Storage section */}
          <div className="mb-[1.44rem]">
            <Storage />
          </div>
          {/* Condition section */}
          <div className="mb-[1.44rem]">
            <Condition />
          </div>

          {/* Product Description */}
          <div>
            <Product_Description />
          </div>
          {/* Product Specification */}
          <div className="mt-6">
            <Specifications />
          </div>
          {/* Rating & Review */}
          <div className="mt-6">
            <ReviewStats />
            {/* Review Comment */}
            <div>
              <ReviewComment
                rating={5}
                title="Awesome"
                content="It's a nice phone with such a low price.Camera is good enough.But the phone is getting heated while charging."
                imageSrc="https://i.ibb.co/FYrJWTC/Photo-Fix-1673875449383.jpg"
                author="KARTICK Tapadar"
                isCertifiedBuyer={true}
                location=", Kalyani"
                likes={20}
                comments={2}
              />
              <ReviewComment
                rating={4}
                title="Good"
                content="Camera is good enough.But the phone is getting heated while charging."
                imageSrc="https://i.ibb.co/FYrJWTC/Photo-Fix-1673875449383.jpg"
                author="Palash Bhuiya"
                isCertifiedBuyer={true}
                location=", Keraniganj"
                likes={50}
                comments={20}
              />
              <ReviewComment
                rating={4.5}
                title="excellent"
                content="It's a nice phone with such a low price.Camera is good enough.But the phone is getting heated while charging."
                imageSrc="https://i.ibb.co/FYrJWTC/Photo-Fix-1673875449383.jpg"
                author="Sakib Al Hasan"
                isCertifiedBuyer={true}
                location=", sylhet"
                likes={10}
                comments={12}
              />
              <div className="p-6 border border-primary-31 mt-[-1px]">
                <button className="text-primary-19 font-medium hover:underline">
                  All reviews
                </button>
              </div>
            </div>
          </div>
          {/* Question and Answere */}
          <div>
            <QuestionAnswere />
          </div>
        </div>
      </div>
    </div>
  );
}
