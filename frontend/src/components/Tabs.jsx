import React from "react";
import menu from "../assets/menu.png";
import republicsale from "../assets/republicsale.png";
import { useSidebar } from "../context/SidebarContext";

export default function TagNavbar() {
  const { toggleSidebar } = useSidebar();

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
    <div className="relative">
      {/* Top Navigation Bar */}
      <div className="bg-gray-800 w-full text-white">
        <div className="container">
          <div className="flex items-center justify-between w-full ml-4">
            <div className="flex items-center">
              {/* Menu Button */}
              <img
                src={menu}
                alt="Menu"
                className="h-8 w-8 cursor-pointer"
                onClick={toggleSidebar}
              />
              {categories.map((category, index) => (
                <a
                  key={index}
                  href="#"
                  className="px-4 py-4 text-sm font-semibold hover:border-2"
                >
                  {category}
                </a>
              ))}
            </div>

            {/* Republic Sale Banner */}
            <div>
              <img
                src={republicsale}
                alt="Republic Sale"
                className="h-8 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
