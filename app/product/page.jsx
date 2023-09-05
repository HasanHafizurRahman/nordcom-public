"use client";
import Breadcrumb from "@/components/Breadcrumb";
import React from "react";
import categorydata from "./categoryData.json";
import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";

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
      <div className="flex container mx-auto">
        <div className="container mx-auto w-[30%]">
          <CategoryList data={categorydata} />
        </div>
        <div className="container mx-auto w-[70%]">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default page;
