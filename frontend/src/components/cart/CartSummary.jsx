import React from "react";

export default function CartSummary({ subtotal, onProceedToCheckout }) {
  return (
    <div className="mt-6 flex justify-between items-center p-4 bg-gray-100">
      <div>
        <button
          onClick={onProceedToCheckout}
          className="text-gray-700 font-semibold"
        >
          Proceed to Checkout
        </button>
      </div>

      <div className="text-right">
        <div className="text-xl font-semibold">Subtotal: ₹{subtotal}</div>
        <div className="text-sm text-gray-600">Eligible for FREE Shipping</div>
      </div>
    </div>
  );
}
