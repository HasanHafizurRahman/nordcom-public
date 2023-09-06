import React from "react";

const BrandTags = () => {
  // List of brand tags
  const brandTags = [
    "Apple",
    "Dell",
    "Casio",
    "Samsung",
    "Mi",
    "Symphony",
    "Tesla",
    "Togg",
    "Bmw",
  ];

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-5">Brand</h2>
      <div className="mt-2">
        <div className="grid grid-cols-3">
          {brandTags.map((tag, index) => (
            <div
              key={index}
              className="py-1 mr-4 mb-4 grid justify-center items-center border rounded-full bg-primary-31 text-black text-sm"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandTags;
