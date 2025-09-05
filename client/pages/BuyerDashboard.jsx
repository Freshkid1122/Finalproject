import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, logout } from "../src/utils/auth";

const BuyerDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const restaurants = [
    {
      id: "item7go",
      name: "Item7go",
      image: "../src/assets/buyer.png",
      cuisine: "Mixed Cuisine",
      rating: 4.8,
      deliveryTime: "25-35 min",
      minOrder: "₦1,500",
      description: "Where we serve yummy treats with the freshest ingredients and best flavors."
    },
    {
      id: "chicken-republic",
      name: "Chicken Republic",
      image: "../src/assets/buyer.png",
      cuisine: "Chicken & Fast Food",
      rating: 4.6,
      deliveryTime: "20-30 min",
      minOrder: "₦2,000",
      description: "Serving the best chicken dishes with authentic recipes and premium ingredients."
    },
    {
      id: "kfc",
      name: "KFC",
      image: "../src/assets/buyer.png",
      cuisine: "Fried Chicken",
      rating: 4.7,
      deliveryTime: "15-25 min",
      minOrder: "₦1,800",
      description: "Finger Lickin' Good! The world's most popular chicken restaurant."
    },
    {
      id: "alata",
      name: "Alata",
      image: "../src/assets/buyer.png",
      cuisine: "Local Nigerian",
      rating: 4.5,
      deliveryTime: "30-40 min",
      minOrder: "₦1,200",
      description: "Authentic Nigerian cuisine made with love and tradition."
    },
    {
      id: "bite-more",
      name: "Bite More",
      image: "../src/assets/buyer.png",
      cuisine: "International",
      rating: 4.4,
      deliveryTime: "25-35 min",
      minOrder: "₦1,600",
      description: "International cuisine that takes your taste buds on a global journey."
    },
    {
      id: "brent-mall",
      name: "Brent Mall",
      image: "../src/assets/buyer.png",
      cuisine: "Multi-Cuisine",
      rating: 4.3,
      deliveryTime: "35-45 min",
      minOrder: "₦2,500",
      description: "A culinary destination offering diverse dining options under one roof."
    }
  ];

  useEffect(() => {
    const userData = getUser();
    if (!userData) {
      navigate("/Signin");
      return;
    }
    setUser(userData);
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleRestaurantSelect = (restaurantId) => {
    navigate(`/restaurant/${restaurantId}`);
  };

  if (!user) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 w-100" style={{ minHeight: '100vh', width: '100vw' }}>
      {/* Header - Full Screen */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-3" href="#">FoodHub</a>
          <div className="d-flex align-items-center">
            <span className="text-white me-4 fs-5">Welcome, {user.name}!</span>
            <button className="btn btn-outline-light btn-lg" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content - Full Screen */}
      <div className="container-fluid py-5" style={{ minHeight: 'calc(100vh - 80px)' }}>
        <div className="text-center mb-5">
          <h1 className="display-3 fw-bold text-success mb-4">Choose Your Restaurant</h1>
          <p className="text-muted fs-4">Select from our top-rated restaurant partners</p>
        </div>

        {/* Restaurant Grid - Full Width */}
        <div className="row g-4 justify-content-center">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="col-12 col-lg-4 col-md-6">
              <div 
                className="card h-100 shadow-lg border-0 restaurant-card"
                style={{ 
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  minHeight: '400px'
                }}
                onClick={() => handleRestaurantSelect(restaurant.id)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}
              >
                <div className="card-body p-4 d-flex flex-column">
                  {/* Restaurant Image */}
                  <div className="text-center mb-4">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="rounded-circle mb-3 shadow"
                      width="120"
                      height="120"
                      style={{ 
                        objectFit: 'cover',
                        border: '4px solid #28a745'
                      }}
                    />
                    <h3 className="fw-bold text-success mb-2">{restaurant.name}</h3>
                  </div>
                  
                  {/* Restaurant Details */}
                  <div className="text-center flex-grow-1">
                    <p className="text-muted fs-6 mb-3">{restaurant.description}</p>
                    <p className="text-muted mb-3">
                      <i className="bi bi-tag-fill me-2 text-success"></i>
                      {restaurant.cuisine}
                    </p>
                    
                    {/* Rating */}
                    <div className="d-flex justify-content-center align-items-center mb-3">
                      <span className="text-warning me-2 fs-5">★★★★★</span>
                      <span className="fw-bold fs-5">{restaurant.rating}</span>
                    </div>
                    
                    {/* Delivery Info */}
                    <div className="row text-center mb-4">
                      <div className="col-6">
                        <p className="text-muted small mb-1">
                          <i className="bi bi-clock me-1"></i>
                          Delivery
                        </p>
                        <p className="fw-bold">{restaurant.deliveryTime}</p>
                      </div>
                      <div className="col-6">
                        <p className="text-muted small mb-1">
                          <i className="bi bi-cart me-1"></i>
                          Min Order
                        </p>
                        <p className="fw-bold text-success">{restaurant.minOrder}</p>
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <button 
                      className="btn btn-success btn-lg w-100"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRestaurantSelect(restaurant.id);
                      }}
                    >
                      <i className="bi bi-eye me-2"></i>
                      View Menu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Spacing */}
        <div className="py-5"></div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
