import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/cart/CartItem";
import CartActions from "../components/cart/CartActions";
import CartSummary from "../components/cart/CartSummary";
import { removeItem } from "../slices/cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();

  // ✅ Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // ✅ Calculate subtotal dynamically
  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleProceedToCheckout = () => {
    alert("Proceeding to Checkout...");
  };

  return (
    <div className="w-full p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">Shopping Cart</h2>
        <CartActions />
      </div>

      {/* Cart Items */}
      <div className="bg-white shadow-md p-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemoveItem={() => dispatch(removeItem(item.id))}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>

      {/* Cart Summary */}
      <CartSummary
        subtotal={calculateSubtotal()}
        onProceedToCheckout={handleProceedToCheckout}
      />
    </div>
  );
}
