import React from "react";
import { useSidebar } from "../context/SidebarContext";

export default function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  const sections = [
    {
      header: "Trending",
      items: ["Best Sellers", "New Releases", "Movers and Shakers"],
    },
    {
      header: "Digital Content and Devices",
      items: [
        "Amazon miniTV- FREE entertainment",
        "Echo & Alexa",
        "Fire TV",
        "Kindle E-Readers & eBooks",
        "Audible Audiobooks",
        "Amazon Prime Video",
        "Amazon Prime Music",
      ],
    },
    {
      header: "Shop by Category",
      items: [
        "Mobiles, Computers",
        "TV, Appliances, Electronics",
        "Men's Fashion",
        "Women's Fashion",
        "See all",
      ],
    },
    {
      header: "Programs & Features",
      items: [
        "Amazon Pay",
        "Gift Cards & Mobile Recharges",
        "Amazon Launchpad",
        "Amazon Business",
        "See all",
      ],
    },
    {
      header: "Help & Settings",
      items: ["Your Account", "Customer Service", "Sign in"],
    },
  ];

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-40 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 w-80`}
        aria-hidden={!isSidebarOpen}
      >
        <div className="p-4 border-b bg-gray-800">
          <h2 className="text-xl text-neutral-50 font-semibold">
            Hello, Sign In
          </h2>
        </div>
        <div className="overflow-y-auto h-[calc(100%-4rem)] p-4">
          {sections.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-bold">{section.header}</h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                {section.items.map((item, idx) => (
                  <li key={idx} className="hover:text-blue-600 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-30"
          onClick={toggleSidebar}
          aria-label="Close Sidebar"
        ></div>
      )}
    </div>
  );
}
