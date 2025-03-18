import React, { useContext } from "react";
import { CartContext_Palgun } from "../context/CartContext_Palgun";

const Cart_Palgun = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useContext(CartContext_Palgun);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item._id} style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
              <h3>{item.name}</h3>
              <p>${item.price} x {item.quantity}</p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                min="1"
                style={{ width: "50px" }}
              />
              <button onClick={() => removeFromCart(item._id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${getTotalPrice()}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart_Palgun;
