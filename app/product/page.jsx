"use client";
import Breadcrumb from "@/components/Breadcrumb";
import React from "react";
import BrandTags from "@/components/BrandTags";
import ColorSection from "@/components/ColorSection";
import PriceRange from "@/components/PriceRange";
import ProductList from "@/components/product/ProductList";
import CategoryItem from "@/components/category/CategoryItem";

const page = () => {
  const paths = [
    { label: "Home", href: "/" },
    { label: "Technology", href: "/technology" },
    { label: "Laptop", href: "/technology/laptop" },
    { label: "Apple" },
  ];
  return (
    <div className="container mx-auto">
      <div className="container mx-auto">
        <Breadcrumb paths={paths} />
      </div>
      <div className="flex container mx-auto gap-[7rem]">
        <div className="">
          <CategoryItem />
          {/* <BrandTags />
          <ColorSection />
          <PriceRange /> */}
        </div>
        <div className="flex-1">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default page;
