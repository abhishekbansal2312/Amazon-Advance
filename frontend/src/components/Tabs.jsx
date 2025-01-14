import React from "react";
import menu from "../assets/menu.png";
import republicsale from "../assets/republicsale.png";

export default function TagNavbar() {
  const categories = [
    "All",
    "Fresh",
    "MX Player",
    "Sell",
    "Best Sellers",
    "Today's Deals",
    "Mobiles",
    "Prime",
    "Customer Service",
    "Electronics",
  ];

  return (
    <div className="bg-gray-800 w-full text-white">
      <div className="container">
        {/* Flex container with space-between for menu and categories */}
        <div className="flex items-center justify-between w-full ml-4">
          <div className="flex items-center">
            <img src={menu} alt="Menu" className="h-8 w-8 cursor-pointer" />
            {categories.map((category, index) => (
              <a
                key={index}
                href="#"
                className="px-4 py-4 text-sm font-semibold hover:border-2 "
              >
                {category}
              </a>
            ))}
          </div>

          {/* Republic Sale Banner fixed to the right */}
          <div className="">
            <img
              src={republicsale}
              alt="Republic Sale"
              className="h-8  cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
