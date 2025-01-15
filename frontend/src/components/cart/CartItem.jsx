import React from "react";

export default function CartItem({
  item,
  onRemoveItem,
  onQuantityChange,
  isSelected,
}) {
  return (
    <div
      key={item.id}
      className={`flex justify-between items-center py-4 border-b ${
        !item.inStock && "opacity-50"
      }`}
    >
      <div className="flex items-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 object-cover mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-600">by {item.name.split(" ")[0]}</p>
          <p
            className={`text-gray-600 ${
              item.inStock ? "text-green-500" : "text-red-500"
            }`}
          >
            {item.inStock ? "In Stock" : "Out of Stock"}
          </p>
          <p className="text-gray-500 mt-2">#1 Best Seller in Coffee Gifts</p>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <div className="text-gray-900 font-semibold">₹{item.price}</div>
        <div className="line-through text-gray-500">
          M.R.P.: ₹{item.originalPrice}
        </div>
        <div className="text-red-500">{item.discount}% off</div>

        <div className="mt-2 flex items-center space-x-4">
          <button
            onClick={() => onRemoveItem(item.id)}
            className="text-red-500"
            disabled={!item.inStock}
          >
            Remove
          </button>
          <select
            value={item.quantity}
            onChange={(e) => onQuantityChange(item.id, e.target.value)}
            className="border p-2 rounded"
            disabled={!item.inStock}
          >
            {[1, 2, 3, 4, 5].map((qty) => (
              <option key={qty} value={qty}>
                {qty}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
