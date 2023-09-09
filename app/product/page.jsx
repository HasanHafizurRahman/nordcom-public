"use client";
import Breadcrumb from "@/components/Breadcrumb";
import React from "react";
import BrandTags from "@/components/BrandTags";
import ColorSection from "@/components/ColorSection";
import PriceRange from "@/components/PriceRange";
import CategoryList from "@/components/category/CategoryList";
import ProductList from "@/components/product/ProductList";

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
      <div className="flex container mx-auto gap-20">
        <div className="container mx-auto w-[16.9375rem]">
          <CategoryList />
          <BrandTags />
          <ColorSection />
          <PriceRange />
        </div>
        <div className="container mx-auto">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default page;
