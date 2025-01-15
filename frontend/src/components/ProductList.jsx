import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const productData = [
  {
    name: "Havells Adonia-i 25 Litre Storage Water Heater",
    description:
      "Wi-Fi Controlled, Smart & User Friendly | 5 Star Rated | Temp. Sensing",
    price: "18,990.00",
    mrp: "21,590.00",
    rating: 4.3,
    reviews: 3031,
    discount: true,
    image: "https://m.media-amazon.com/images/I/31cbLs6Hm0L._MCnd_AC_.jpg",
  },
  {
    name: "Havells Otto 25 Litre Storage Water Heater",
    description:
      "Temp. Sensing LED Indicator | Anti Rust Tank | Shock Safe Plug",
    price: "13,299.00",
    mrp: "21,590.00",
    rating: 4.5,
    reviews: 123,
    discount: true,
    image: "https://m.media-amazon.com/images/I/31Qc5NoDTPL._MCnd_AC_.jpg",
  },
  {
    name: "Racold Eterno Pro Storage Water Heater 25L",
    description:
      "Energy Efficient | Titanium Enamelled Coating | Free Standard Installation",
    price: "8,399.00",
    mrp: "16,899.00",
    rating: 4.3,
    reviews: 4894,
    discount: true,
    image: "https://m.media-amazon.com/images/I/31F6HpQj7iL._MCnd_AC_.jpg",
  },
  {
    name: "IVAS Caloric 25 L Storage Water Heater",
    description:
      "BEE 5 Star | ISI | Shock Proof Plastic Body | 5 Year Warranty",
    price: "6,899.00",
    mrp: "13,705.00",
    rating: 5.0,
    reviews: 1,
    discount: true,
    image: "https://m.media-amazon.com/images/I/31vZXn7PcqL._MCnd_AC_.jpg",
  },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4 mx-2">
      {productData.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
