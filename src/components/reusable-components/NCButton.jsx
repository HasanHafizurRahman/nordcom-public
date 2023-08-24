import React from "react";

const NCButton = ({ text, onClick, className }) => {
  return (
    <button
      className={`bg-nordcomPrimary text-white font-semibold py-2 px-4 rounded-lg ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default NCButton;
