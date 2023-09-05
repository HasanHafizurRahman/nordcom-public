import React, { useState, useEffect } from "react";
import Product from "./Product"; // Import the Product component
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"; // Import previous and next icons

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const renderProducts = () => {
    return currentProducts.map((product) => (
      <Product key={product.id} product={product} />
    ));
  };

  const handlePageChange = (pageNumber) => {
    if (
      pageNumber >= 1 &&
      pageNumber <= Math.ceil(products.length / productsPerPage)
    ) {
      setCurrentPage(pageNumber);
    }
  };

  const totalPages = Math.ceil(products.length / productsPerPage);

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {renderProducts()}
      <div className="col-span-4 text-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-3 py-1 rounded-md mr-2"
        >
          <FaAngleLeft />
        </button>

        {getPageNumbers().map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`${
              currentPage === number
                ? "bg-primary-19 text-white"
                : "text-primary-35"
            } px-3 py-1 rounded-md mx-2 hover:bg-blue-5 hover:text-white`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="bg-blue-5 px-3 py-1 rounded-md ml-2 hover:bg-blue-5"
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default ProductList;
