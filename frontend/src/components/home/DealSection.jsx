const DealSection = ({ title, images, imageHeadings, linkText, linkHref }) => {
  // Check if there's only one image
  const isSingleImage = images.length === 1;

  return (
    <div className="bg-white p-5 w-[300px] h-[380px] border border-gray-300 mt-5  flex flex-col">
      {/* Title */}
      <h2 className="text-xl  font-bold mb-2 text-gray-900">{title}</h2>

      {/* Images and Headings */}
      {isSingleImage ? (
        // Render a single image in larger size
        <div className="text-center">
          <img
            src={images[0]}
            alt="Deal Image"
            className="h-46 w-42 object-cover"
            onError={(e) => (e.target.src = "/default-image.jpg")}
          />
        </div>
      ) : (
        // Render multiple images with headings
        <div className="grid grid-cols-2 gap-2">
          {images.map((image, index) => (
            <div key={index} className="text-center">
              <img
                src={image}
                alt={imageHeadings[index] || "Image"}
                className="h-28 w-32 object-cover mx-auto "
                onError={(e) => (e.target.src = "/default-image.jpg")}
              />
              {imageHeadings[index] && (
                <h3 className=" text-gray-800  text-[11px]">
                  {imageHeadings[index]}
                </h3>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Link */}
      <div className="mt-4">
        <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline font-medium text-xs"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default DealSection;
