// FooterSection.js
import React from "react";

const FooterSection = ({ title, links }) => {
  return (
    <div>
      <h4 className="font-semibold text-lg text-white">{title}</h4>
      <ul className="mt-4 space-y-2 text-gray-400">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:text-gray-400">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
