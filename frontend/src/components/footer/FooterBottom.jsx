import React from "react";

export default function FooterBottom() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-8">
          {/* First Row */}
          <div>
            <h4 className="font-semibold text-lg">AbeBooks</h4>
            <p className="text-xs text-gray-400">Books, art & collectibles</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Amazon Web Services</h4>
            <p className="text-xs text-gray-400">
              Scalable Cloud Computing Services
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Audible</h4>
            <p className="text-xs text-gray-400">Download Audio Books</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">IMDb</h4>
            <p className="text-xs text-gray-400">Movies, TV & Celebrities</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-8 mt-8">
          {/* Second Row */}
          <div>
            <h4 className="font-semibold text-lg">Shopbop</h4>
            <p className="text-xs text-gray-400">Designer Fashion Brands</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Amazon Business</h4>
            <p className="text-xs text-gray-400">
              Everything For Your Business
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Prime Now</h4>
            <p className="text-xs text-gray-400">
              2-Hour Delivery on Everyday Items
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Amazon Prime Music</h4>
            <p className="text-xs text-gray-400">
              100 million songs, ad-free <br /> Over 15 million podcast episodes
            </p>
          </div>
        </div>

        {/* Bottom Section with conditions and small text */}
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-gray-300">
              Conditions of Use & Sale
            </a>
            <a href="#" className="hover:text-gray-300">
              Privacy Notice
            </a>
            <a href="#" className="hover:text-gray-300">
              Interest-Based Ads
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
