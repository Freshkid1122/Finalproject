import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Ricef from "../src/assets/ricef.png";
import Ricec from "../src/assets/richc.png";
import Shawa from "../src/assets/shawa.png";
import Ricem from "../src/assets/ricemade.png";
import Youn from "../src/assets/youn.png";
import Beef from "../src/assets/beef.png";
import Friedf from "../src/assets/friedf.png";
// ...existing imports...

const menu = [
  
{
    name: "Rice with chiken",
    image: Ricec,
    price: "₦3,000.00",
    desc: "Classic Nigerian jollof rice with spicy grilled chicken.",
    restaurant: "Item7GO"
  },
  {
    name: "A plate of rice with fish",
    image: Ricef,
    price: "₦3,000",
    desc: "Fried rice served with tender beef and veggies.",
    restaurant: "Chicken Republic"
  },
  {
    name: "Shawarma",
    image: Shawa,
    price: "₦2,500",
    desc: "Delicious chicken shawarma with creamy sauce.",
    restaurant: "KFC"
  },
  {
    name: "A plate of rice with croaker fish",
    image: Ricem,
    price: "₦2,800",
    desc: "Traditional spinach stew with assorted meat and swallow.",
    restaurant: "Alata"
  },
  {
    name: "Beef",
    image: Beef,
    price: "₦4,000",
    desc: "Charcoal grilled fish served with sweet plantain.",
    restaurant: "Bite More"
  },
  {
    name: "Fried Rice",
    image: Friedf,
    price: "₦2,200",
    desc: "Juicy beef burger with crispy fries.",
    restaurant: "Brent Mall"
  },
  {
    name: "Beef",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
    price: "₦3,200",
    desc: "Creamy Alfredo pasta with grilled chicken.",
    restaurant: "Item7GO"
  },
  {
    name: "D-best Yogurt medium",
    image: Youn,
    price: "₦2,000",
    desc: "Rich yam porridge with vegetables and fish.",
    restaurant: "Alata"
  }
];

const Detail = () => {
  const { id } = useParams();
  const item = menu[id];
  const [cartMessage, setCartMessage] = useState("");

  if (!item) {
    return <div className="container py-5 text-center">Item not found</div>;
  }

  const handleAddToCart = () => {
    // You can integrate with your cart logic here
    setCartMessage("Added to cart!");
    setTimeout(() => setCartMessage(""), 2000);
  }; 

  const handlePayment = () => {
    // Integrate with your payment gateway here
    alert("Redirecting to payment...");
    // Example: window.location.href = "https://your-payment-gateway.com";
  };
return (
  <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light p-0">
    <div className="row w-100 justify-content-center m-0">
      <div className="col-12 col-md-10 col-lg-10">
        <div
          className="card shadow w-100 border-0"
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            className="card-img-top"
            style={{
              height: "60vh",
              width: "100%",
              objectFit: "cover",
              maxHeight: "600px",
            }}
          />
          <div className="card-body px-3 px-md-5 py-4">
            <h2 className="card-title display-6 display-md-4">{item.name}</h2>
            <p className="card-text fs-5 fs-md-4">{item.desc}</p>
            <p className="fw-bold fs-4 fs-md-3">{item.price}</p>
            <p className="text-muted fs-6 fs-md-5">{item.restaurant}</p>
            <hr />
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item">
                <strong>Ingredients:</strong> {item.ingredients || "Rice, Chicken, Spices, Oil"}
              </li>
              <li className="list-group-item">
                <strong>Serving Size:</strong> {item.servingSize || "1 plate"}
              </li>
              <li className="list-group-item">
                <strong>Calories:</strong> {item.calories || "Approx. 600 kcal"}
              </li>
              <li className="list-group-item">
                <strong>Preparation Time:</strong> {item.prepTime || "20 minutes"}
              </li>
              <li className="list-group-item">
                <strong>Allergens:</strong> {item.allergens || "Contains chicken, may contain traces of nuts"}
              </li>
              <li className="list-group-item">
                <strong>Available Add-ons:</strong> {item.addons || "Extra chicken, plantain, salad"}
              </li>
              <li className="list-group-item">
                <strong>Restaurant Location:</strong> {item.location || "Isale General"}
              </li>
              <li className="list-group-item">
                <strong>Customer Rating:</strong> {item.rating || "4.8/5"}
              </li>
            </ul>
            <div className="d-flex flex-column flex-md-row gap-3 mt-4">
                <Link to={`/Addchart/${id}`} >
              <button className="btn btn-success btn-lg" onClick={handleAddToCart}>
                Add to Cart
              </button>
              </Link>
              <button className="btn btn-primary btn-lg" onClick={handlePayment}>
                Pay Now
              </button>
            </div>
            {cartMessage && (
              <div className="alert alert-success mt-3 text-center">{cartMessage}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default Detail;