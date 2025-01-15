import React, { useState } from "react";
import CartItem from "../components/cart/CartItem";
import CartActions from "../components/cart/CartActions";
import CartSummary from "../components/cart/CartSummary";
import cartItemsData from "./cartData.json";
export default function CartPage() {
  const [cartItems, setCartItems] = useState(cartItemsData);
  const [selectedItems, setSelectedItems] = useState(
    cartItemsData.map((item) => item.id)
  );

  const handleSelectAll = () => {
    setSelectedItems(cartItems.map((item) => item.id));
  };

  const handleDeselectAll = () => {
    setSelectedItems([]);
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setSelectedItems((prevSelected) =>
      prevSelected.filter((itemId) => itemId !== id)
    );
  };

  const handleQuantityChange = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity, 10) } : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cartItems
      .filter((item) => selectedItems.includes(item.id))
      .reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleProceedToCheckout = () => {
    alert("Proceeding to Checkout...");
  };

  return (
    <div className="w-full p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">Shopping Cart</h2>
        <CartActions
          onSelectAll={handleSelectAll}
          onDeselectAll={handleDeselectAll}
        />
      </div>

      {/* Cart Items */}
      <div className="bg-white shadow-md p-4">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemoveItem={handleRemoveItem}
            onQuantityChange={handleQuantityChange}
            isSelected={selectedItems.includes(item.id)}
          />
        ))}
      </div>

      {/* Price Summary */}
      <CartSummary
        subtotal={calculateSubtotal()}
        onProceedToCheckout={handleProceedToCheckout}
      />
    </div>
  );
}
