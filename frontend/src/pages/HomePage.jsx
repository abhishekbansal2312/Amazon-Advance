import React from "react";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";
import Crousel from "../components/Crousel";
import Footer from "../components/Footer";
import DealSection from "../components/DealSection";

export default function HomePage() {
  return (
    <div className="w-full bg-slate-200">
      <Navbar />
      <Tabs />

      <Crousel />
      <div className="flex w-full">
        <DealSection />
        <DealSection />
        <DealSection />
        <DealSection />
      </div>

      <Footer />
    </div>
  );
}
