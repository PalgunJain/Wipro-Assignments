import React from "react";
import ProductList_Palgun from "./components/ProductList_Palgun";
import Cart_Palgun from "./components/Cart_Palgun";
import { CartProvider } from "./context/CartContext_Palgun";

function App() {
  return (
    <CartProvider>
      <div>
        <h1>ShopEase</h1>
        <ProductList_Palgun />
        <Cart_Palgun />
      </div>
    </CartProvider>
  );
}

export default App;