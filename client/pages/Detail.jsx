import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import Ricef from "../src/assets/ricef.png";
import Ricec from "../src/assets/richc.png";
import Shawa from "../src/assets/shawa.png";
import Ricem from "../src/assets/ricemade.png";
import Youn from "../src/assets/youn.png";
import Beef from "../src/assets/beef.png";
import Friedf from "../src/assets/friedf.png";
import Near from "../components/Near"; // Import the Near component
import { FaStar, FaShoppingCart } from "react-icons/fa"; // Import FaShoppingCart
import { useCart } from "../components/CartContext"; // Import useCart

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
  const { addToCart, message } = useCart(); // Use the cart context
  const navigate = useNavigate(); // Initialize useNavigate

  if (!item) {
    return <div className="container py-5 text-center">Item not found</div>;
  }

  const handleAddToCart = () => {
    const itemToAdd = {
      id: `${item.name}-${id}`,
      name: item.name,
      price: parseFloat(item.price.replace("₦", "").replace(",", "")),
      image: item.image,
    };
    addToCart(itemToAdd);
    navigate("/Addchart"); // Navigate to cart page after adding
  };

  // Removed handlePayment function as Buy Now button is removed

  return (
  <div className="container-fluid min-vh-100 bg-light p-0">
    <div className="row w-100 justify-content-center m-0">
        <div
          className="card shadow w-100 border-0 p-4 mb-5"
          style={{
            margin: "0 auto",
          }}
        >
          <div className="row">
            <div className="col-md-5 d-flex justify-content-center align-items-center mb-4 mb-md-0">
              <div style={{ width: "300px", height: "300px", borderRadius: "50%", overflow: "hidden", border: "2px solid #ddd", position: 'relative' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                {/* Placeholder for green leaves/design */}
                <div style={{ position: 'absolute', top: '10px', left: '10px', width: '50px', height: '50px', backgroundColor: '#aed581', borderRadius: '50%', opacity: '0.7', transform: 'rotate(30deg)' }}></div>
                <div style={{ position: 'absolute', bottom: '10px', right: '10px', width: '70px', height: '70px', backgroundColor: '#aed581', borderRadius: '50%', opacity: '0.7', transform: 'rotate(-40deg)' }}></div>
              </div>
            </div>
            <div className="col-md-7 card-body px-3 px-md-5 py-4 text-start">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="card-title display-6 display-md-4">{item.name}</h2>
                <button className="btn btn-light"><FaShoppingCart className="fs-4"/></button>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FaStar className="text-warning"/>
                <FaStar className="text-warning"/>
                <FaStar className="text-warning"/>
                <FaStar className="text-warning"/>
                <FaStar className="text-warning"/>
                <span className="ms-2 text-muted">4.9 (203)</span>
              </div>
              <p className="card-text fs-5 fs-md-4">{item.desc}</p>
              <p className="fw-bold fs-4 fs-md-3">{item.price}</p>
              <p className="text-muted fs-6 fs-md-5">{item.restaurant}</p>
              <hr />
              
              {/* Select Extras Dropdown */}
              <div className="mb-3">
                <select className="form-select" style={{ maxWidth: "200px" }}>
                  <option>Select Extras</option>
                  <option>Extra Chicken</option>
                  <option>Extra Sauce</option>
                  <option>Add Drink</option>
                </select>
              </div>

              <div className="d-flex flex-column flex-md-row gap-3 mt-4">
                <button className="btn btn-success btn-lg" onClick={handleAddToCart}>
                  Add to Cart
                </button>
              </div>
              {message && (
                <div className="alert alert-success mt-3 text-center">{message}</div>
              )}
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="container-fluid mt-5 px-4">
          <h3 className="mb-4">Reviews</h3>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card p-3">
                <div className="d-flex align-items-center mb-3">
                  <img src="https://via.placeholder.com/50" alt="Jessica R." className="rounded-circle me-3"/>
                  <div>
                    <h6 className="fw-bold mb-0">Jessica R., Happy Customer</h6>
                    <small className="text-muted">Super fast delivery and so many restaurant options! I love how easy it is to order my favorite meals in just a few clicks.</small>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <FaStar className="text-warning"/>
                  <FaStar className="text-warning"/>
                  <FaStar className="text-warning"/>
                  <FaStar className="text-warning"/>
                  <FaStar className="text-warning"/>
                  <span className="ms-2 text-muted">4.9 Ratings</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card p-3">
                <div className="d-flex align-items-center mb-3">
                  <img src="https://via.placeholder.com/50" alt="Jessica R." className="rounded-circle me-3"/>
                  <div>
                    <h6 className="fw-bold mb-0">Jessica R., Happy Customer</h6>
                    <small className="text-muted">Super fast delivery and so many restaurant options! I love how easy it is to order my favorite meals in just a few clicks.</small>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <FaStar className="text-warning"/>
                  <FaStar className="text-warning"/>
                  <FaStar className="text-warning"/>
                  <FaStar className="text-warning"/>
                  <FaStar className="text-warning"/>
                  <span className="ms-2 text-muted">4.9 Ratings</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Near You Section */}
        <div className="container-fluid mt-5 px-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3>Popular Near You</h3>
            <button className="btn btn-outline-secondary">View All</button>
          </div>
          <Near />
        </div>

      </div>
    </div>
  );
};

export default Detail;