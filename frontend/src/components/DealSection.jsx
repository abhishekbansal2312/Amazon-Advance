import React from "react";

const DealSection = ({ title, images, imageHeadings, linkText, linkHref }) => {
  return (
    <div className="bg-white p-4 w-60 border border-gray-200 shadow-md rounded-md hover:shadow-lg transition-shadow duration-200">
      {/* Title Section */}
      <h2 className="text-lg font-semibold mb-4 text-gray-900">{title}</h2>

      {/* Images and Headings */}
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="text-center">
            <img
              src={image}
              alt={imageHeadings[index]}
              className="h-24 w-24 object-cover mb-2 mx-auto rounded"
            />
            <h3 className="text-sm text-gray-800 font-medium">
              {imageHeadings[index]}
            </h3>
          </div>
        ))}
      </div>

      {/* Link at the bottom */}
      <div className="mt-4 text-center">
        <a
          href={linkHref}
          className="text-blue-600 hover:underline font-medium text-sm"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default function App() {
  const images = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/JanArt25/PC_QC_Kitchen1_2x._SY232_CB537769831_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/JanArt25/PC_QC_homedecor2_2x._SY232_CB537769897_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/JanArt25/PC_QC_Fur3_2x._SY232_CB537769473_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/JanArt25/PC_QC_HI4_2x._SY232_CB537769659_.jpg",
  ];

  const imageHeadings = [
    "Kitchen Essentials",
    "Home Decor",
    "Furniture",
    "Home Improvement",
  ];

  return (
    <div className="p-6 flex flex-wrap gap-6 justify-center bg-gray-100">
      <DealSection
        title="Minimum 50% off"
        images={images}
        imageHeadings={imageHeadings}
        linkText="See all deals"
        linkHref="#"
      />
      <DealSection
        title="Up to 70% off"
        images={images}
        imageHeadings={imageHeadings}
        linkText="Shop now"
        linkHref="#"
      />
      <DealSection
        title="Exciting offers"
        images={images}
        imageHeadings={imageHeadings}
        linkText="Discover more"
        linkHref="#"
      />
      <DealSection
        title="Limited time deals"
        images={images}
        imageHeadings={imageHeadings}
        linkText="Explore"
        linkHref="#"
      />
    </div>
  );
}
