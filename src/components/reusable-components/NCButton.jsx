import React from "react";

const NCButton = ({ text, onClick, className }) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default NCButton;
