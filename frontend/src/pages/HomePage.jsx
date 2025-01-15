import React, { useState, useEffect } from "react";
import Tabs from "../components/Tabs";
import Crousel from "../components/Crousel";
import DealSection from "../components/DealSection";
import data from "./data.json"; // Directly importing the JSON file
import Sidebar from "../components/SideBar";
import HorizontalScroller from "../components/HorizontalScroller";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    setDeals(data); // Directly setting the imported JSON data
  }, []);

  return (
    <div className="w-full bg-slate-200">
      <Tabs />
      <Crousel />
      <Sidebar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full p-4">
        {deals.map((deal, index) => (
          <Link to={"/products"}>
            <DealSection
              key={index}
              title={deal.title}
              images={deal.images}
              imageHeadings={deal.imageHeadings}
              linkText={deal.linkText}
              linkHref={deal.linkHref}
            />
          </Link>
        ))}
      </div>
      <HorizontalScroller />
    </div>
  );
}
