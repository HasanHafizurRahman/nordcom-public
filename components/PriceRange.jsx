import React from "react";

const PriceRange = () => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-5">Price</h2>
      <div className="mt-2">
        <div className="flex justify-between">
          <span>$0</span>
          <span>$1.000.000</span>
        </div>
        <input
          type="range"
          min="0"
          max="1000000"
          step="1"
          className="w-[13.1875rem] h-1rem flex-shrink-0 fill-primary-20"
        />
      </div>
    </div>
  );
};

export default PriceRange;
