// Footer.js
import React from "react";
import FooterSection from "./footer/FooterSection";
import FooterSelect from "./footer/FooterSelect";
import FooterBottom from "./footer/FooterBottom";
import image from "../assets/image.png";

export default function Footer() {
  const getToKnowUsLinks = [
    { text: "About Amazon", href: "#" },
    { text: "Careers", href: "#" },
    { text: "Press Releases", href: "#" },
    { text: "Amazon Science", href: "#" },
  ];

  const connectWithUsLinks = [
    { text: "Facebook", href: "#" },
    { text: "Twitter", href: "#" },
    { text: "Instagram", href: "#" },
  ];

  const makeMoneyWithUsLinks = [
    { text: "Sell on Amazon", href: "#" },
    { text: "Sell under Amazon Accelerator", href: "#" },
    { text: "Protect and Build Your Brand", href: "#" },
    { text: "Amazon Global Selling", href: "#" },
    { text: "Supply to Amazon", href: "#" },
    { text: "Become an Affiliate", href: "#" },
    { text: "Fulfilment by Amazon", href: "#" },
    { text: "Advertise Your Products", href: "#" },
    { text: "Amazon Pay on Merchants", href: "#" },
  ];

  const letUsHelpYouLinks = [
    { text: "Your Account", href: "#" },
    { text: "Returns Centre", href: "#" },
    { text: "Recalls and Product Safety Alerts", href: "#" },
    { text: "100% Purchase Protection", href: "#" },
    { text: "Amazon App Download", href: "#" },
    { text: "Help", href: "#" },
  ];

  const languageOptions = [
    { value: "english", label: "English" },
    { value: "spanish", label: "Spanish" },
    { value: "french", label: "French" },
    { value: "german", label: "German" },
  ];

  const locationOptions = [
    { value: "india", label: "India" },
    { value: "usa", label: "USA" },
    { value: "uk", label: "UK" },
    { value: "canada", label: "Canada" },
  ];

  return (
    <footer className="bg-gray-800 text-white pt-16 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
          <FooterSection title="Get to Know Us" links={getToKnowUsLinks} />
          <FooterSection title="Connect with Us" links={connectWithUsLinks} />
          <FooterSection
            title="Make Money with Us"
            links={makeMoneyWithUsLinks}
          />
          <FooterSection title="Let Us Help You" links={letUsHelpYouLinks} />
        </div>
      </div>

      <div className="flex justify-center space-x-8 border-t border-gray-400">
        <div className="flex items-center space-x-16 m-6">
          <img src={image} alt="" className="w-28 h-12" />
          <div>
            <FooterSelect label="Language" options={languageOptions} />
            <FooterSelect label="Location" options={locationOptions} />
          </div>
        </div>
      </div>

      <FooterBottom />
    </footer>
  );
}
