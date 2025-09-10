import React, { useState } from "react";

const AddChart = () => {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  // Example item to add (replace with your actual item data)
  const exampleItem = {
    id: 1,
    name: "Jollof Rice & Chicken",
    price: 3000,
    quantity: 1,
    image: "https://your-image-url.com/item7go.jpg"
  };

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, item];
    });
    setMessage(`${item.name} added to cart!`);
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="container py-5">
      <h2>Add to Cart Example</h2>
      <button className="btn btn-success mb-3" onClick={() => handleAddToCart(exampleItem)}>
        Add Jollof Rice & Chicken to Cart
      </button>
      {message && <div className="alert alert-success">{message}</div>}
      <h4>Cart Items:</h4>
      <ul className="list-group">
        {cart.map((item) => (
          <li key={item.id} className="list-group-item d-flex align-items-center">
            <img src={item.image} alt={item.name} style={{ width: 50, height: 50, objectFit: "cover", marginRight: 10 }} />
            <span className="me-auto">{item.name}</span>
            <span>Qty: {item.quantity}</span>
            <span className="ms-3 fw-bold">₦{item.price * item.quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddChart;