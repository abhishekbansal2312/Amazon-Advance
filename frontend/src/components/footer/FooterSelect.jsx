import React from "react";

const FooterSelect = ({ label, options }) => {
  return (
    <select
      className="bg-gray-800 text-white mt-2 mx-4 rounded-lg w-24 border-2 py-2"
      aria-label={`Select ${label}`}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default FooterSelect;
