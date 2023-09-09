import React from "react";
import Link from "next/link"; // Import the Link component from Next.js

const Product = ({ product }) => {
  // Generate the product route URL based on its id
  const productRoute = `/product/${product.id}`;

  return (
    <div className="w-[172px] flex flex-col">
      <Link href={productRoute}>
        {/* Wrap the product in a Link */}

        <img
          src={product.image}
          alt={product.title}
          className="w-[172px] h-[114px] object-cover"
        />
        <p className="text-sm">{product.title}</p>
        <h4 className="font-semibold">Price: ${product.price}</h4>
        <p className="text-xs text-primary-26">by Lavioka Company</p>
      </Link>
    </div>
  );
};

export default Product;
