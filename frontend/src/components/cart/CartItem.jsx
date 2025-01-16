import React from "react";
import { useDispatch } from "react-redux";
import { increaseQunatity, decreaseQuantity } from "../../slices/cartSlice";

export default function CartItem({ item, onRemoveItem }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-4 border rounded-md shadow-sm">
      {/* Left: Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-28 h-28 object-cover rounded-md"
      />

      {/* Middle: Product Details */}
      <div className="flex-1 mx-4">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-600">by {item.name.split(" ")[0]}</p>
        <p className="text-xs text-gray-500 mt-1">#1 Best Seller in Laptops</p>

        {/* Stock Status */}
        <p
          className={`text-sm font-medium ${
            item.inStock ? "text-green-600" : "text-red-500"
          }`}
        >
          {item.inStock ? "In Stock" : "Out of Stock"}
        </p>
      </div>

      {/* Right: Price & Actions */}
      <div className="flex flex-col items-end">
        {/* Pricing */}
        <div className="text-lg font-semibold text-gray-900">₹{item.price}</div>
        <div className="line-through text-sm text-gray-500">
          M.R.P.: ₹{item.originalPrice}
        </div>
        <div className="text-red-500 text-sm font-medium">
          {item.discount}% off
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center mt-2">
          <button
            onClick={() => dispatch(decreaseQuantity(item.id))}
            className="border px-3 py-1 text-lg font-bold text-red-500 bg-gray-100 hover:bg-gray-200"
            disabled={item.quantity === 1}
          >
            -
          </button>
          <span className="px-3 text-lg">{item.quantity}</span>
          <button
            onClick={() => dispatch(increaseQunatity(item.id))}
            className="border px-3 py-1 text-lg font-bold text-green-500 bg-gray-100 hover:bg-gray-200"
          >
            +
          </button>
        </div>

        <button
          onClick={() => onRemoveItem(item.id)}
          className="mt-3 text-red-500 text-sm hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
