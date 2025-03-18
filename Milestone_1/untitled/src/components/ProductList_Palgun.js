import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext_Palgun } from "../context/CartContext_Palgun";

const ProductList_Palgun = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext_Palgun);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <h2>Available Products</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {products.map((product) => (
          <div key={product._id} style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
            <img src={product.image} alt={product.name} style={{ width: "100px", height: "100px" }} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>${product.price}</strong></p>
            <p>Available: {product.availableQuantity}</p>
            <button
              onClick={() => addToCart(product)}
              disabled={product.availableQuantity === 0}
              style={{
                backgroundColor: product.availableQuantity === 0 ? "#ccc" : "#28a745",
                color: "white",
                padding: "10px",
                border: "none",
                cursor: product.availableQuantity === 0 ? "not-allowed" : "pointer"
              }}
            >
              {product.availableQuantity === 0 ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList_Palgun;
