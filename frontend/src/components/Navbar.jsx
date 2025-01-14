import React from "react";
import Cart from "./navbar/Cart";
import Language from "./navbar/Language";
import SearchBar from "./navbar/SearchBar";
import SignUp from "./navbar/SignUp";
import ReturnOrder from "./navbar/ReturnOrder";
import image from "../assets/image.png";
import Location from "./navbar/Location";

export default function Navbar() {
  return (
    <div className="bg-gray-900 text-white">
      <nav className="flex items-center justify-between p-1 container mx-auto max-w-screen-xl">
        <div className="flex items-center space-x-4 mt-1">
          {/* Logo Section */}
          <div className="bg-gray-900 hover:border-2 h-14 w-18 flex items-center justify-center">
            <a href="#" className="flex items-center">
              <img src={image} alt="Logo" className="w-18 h-12" />
            </a>
          </div>
          <Location />
        </div>

        {/* Center Section (Search Bar) */}
        <div className="flex-grow max-w-3xl mx-4 flex-shrink-0">
          <SearchBar />
        </div>

        {/* Right Section (Language, SignUp, ReturnOrder, Cart) */}
        <div className="flex items-center space-x-4 flex-shrink-0">
          <Language />
          <SignUp />
          <ReturnOrder />
          <Cart />
        </div>
      </nav>
    </div>
  );
}