"use client";

import ProductDetail from "@/components/product/ProductDetails";
import { useEffect, useState } from "react";

const SingleProductPage = ({ params: { id } }) => {
  // const router = useRouter();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch the product data based on the product ID
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [id]);

  return (
    <div className="container mx-auto">
      {product ? <ProductDetail product={product} /> : <div>Loading...</div>}
    </div>
  );
};

export default SingleProductPage;
