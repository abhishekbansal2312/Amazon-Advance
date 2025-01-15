import React from "react";
import ProductsNavbar from "../components/ProductsNavbar";
import CategoryFilter from "../components/CategoryFilter";

import ProductList from "../components/ProductList";

export default function ProductPage() {
  return (
    <div>
      <ProductsNavbar />
      <CategoryFilter />
      <ProductList />
    </div>
  );
}
