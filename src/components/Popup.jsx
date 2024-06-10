import React from "react";

const Popup = ({ message }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-4 rounded-md shadow-lg max-w-sm w-full">
        <p className="text-gray-800">{message}</p>
      </div>
    </div>
  );
};

export default Popup;
