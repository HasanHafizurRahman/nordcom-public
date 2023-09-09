import React from "react";

const ProductDetail = ({ product }) => {
  return (
    <div className="w-[172px] flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="w-[172px] h-[114px] object-cover"
      />
      <p className="text-sm">{product.title}</p>
      <h4 className="font-semibold">Price: ${product.price}</h4>
      <p className="text-xs text-primary-26">by Lavioka Company</p>
    </div>
  );
};

export default ProductDetail;
