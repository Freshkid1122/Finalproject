import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUser } from "../src/utils/auth";
import Ricef from "../src/assets/ricef.png";
import Ricec from "../src/assets/richc.png";
import Shawa from "../src/assets/shawa.png";
import Ricem from "../src/assets/ricemade.png";
import Youn from "../src/assets/youn.png";
import Beef from "../src/assets/beef.png";
import Friedf from "../src/assets/friedf.png";



const RestaurantLanding = () => {
  const { restaurantId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [restaurant, setRestaurant] = useState(null);

  // Restaurant data based on the ID
  const restaurantData = {
    "item7go": {
      name: "Item7go",
      heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=600&fit=crop",
      description: "Where we serve yummy treats with the freshest ingredients and best flavors. Whether you're craving a quick bite, or a full-course meal, we've got something for everyone.",
      address: "125 Main Street, Las Vegas, NV.",
      phone: "+123456789",
      hours: "Mondays - Saturdays (7AM-10PM)",
      cuisine: "Chicken, Beef, Steak, Grill",
      rating: 4.9,
      reviews: 305
    },
    "chicken-republic": {
      name: "Chicken Republic",
      heroImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1200&h=600&fit=crop",
      description: "Serving the best chicken dishes with authentic recipes and premium ingredients. From crispy fried chicken to grilled specialties, we bring you the ultimate chicken experience.",
      address: "456 Chicken Lane, Lagos, NG.",
      phone: "+234567890",
      hours: "Daily (8AM-11PM)",
      cuisine: "Chicken, Fast Food, Grilled",
      rating: 4.6,
      reviews: 201
    },
    "kfc": {
      name: "KFC",
      heroImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1200&h=600&fit=crop",
      description: "Finger Lickin' Good! The world's most popular chicken restaurant serving crispy fried chicken, burgers, and sides with our secret blend of herbs and spices.",
      address: "789 KFC Street, Abuja, NG.",
      phone: "+234678901",
      hours: "Daily (7AM-12AM)",
      cuisine: "Fried Chicken, Burgers, Sides",
      rating: 4.7,
      reviews: 456
      
    },
    "alata": {
      name: "Alata",
      heroImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1200&h=600&fit=crop",
      description: "Authentic Nigerian cuisine made with love and tradition. Experience the rich flavors of local dishes prepared with fresh, locally-sourced ingredients.",
      address: "321 Alata Road, Port Harcourt, NG.",
      phone: "+234789012",
      hours: "Daily (6AM-10PM)",
      cuisine: "Nigerian, Local, Traditional",
      rating: 4.5,
      reviews: 189
    },
    "bite-more": {
      name: "Bite More",
      heroImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1200&h=600&fit=crop",
      description: "International cuisine that takes your taste buds on a global journey. From Asian fusion to Mediterranean delights, every bite is an adventure.",
      address: "654 Bite Street, Calabar, NG.",
      phone: "+234890123",
      hours: "Daily (9AM-11PM)",
      cuisine: "International, Fusion, Modern",
      rating: 4.4,
      reviews: 167
    },
    "brent-mall": {
      name: "Brent Mall",
      heroImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1200&h=600&fit=crop",
      description: "A culinary destination offering diverse dining options under one roof. From fine dining to casual eateries, Brent Mall has something for every palate.",
      address: "987 Brent Avenue, Enugu, NG.",
      phone: "+234901234",
      hours: "Daily (10AM-10PM)",
      cuisine: "Multi-Cuisine, Fine Dining, Casual",
      rating: 4.3,
      reviews: 234
    }
  };

  useEffect(() => {
    const userData = getUser();
    if (!userData) {
      navigate("/signin/user");
      return;
    }
    setUser(userData);

    // Set restaurant data based on ID
    if (restaurantData[restaurantId]) {
      setRestaurant(restaurantData[restaurantId]);
    } else {
      navigate("/buyer-dashboard");
    }
  }, [restaurantId, navigate]);

  const handleBackToDashboard = () => {
    navigate("/buyer-dashboard");
  };

  if (!user || !restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-vh-100 w-100" style={{ minHeight: '100vh', width: '100vw' }}>
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#1e3a8a' }}>
        <div className="container-fluid">
          <a className="navbar-brand text-success fw-bold" href="#">logo</a>
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="#">Home</a>
            <a className="nav-link" href="#">About Us</a>
            <a className="nav-link" href="#">Menu</a>
            <a className="nav-link" href="#">Contact Us</a>
          </div>
          <div className="d-flex align-items-center ms-3">
            <i className="bi bi-search text-white me-3" style={{ fontSize: '1.2rem' }}></i>
            <i className="bi bi-person-circle text-white" style={{ fontSize: '1.5rem' }}></i>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Screen */}
      <div 
        className="position-relative text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${restaurant.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100vw'
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <h1 className="display-1 fw-bold mb-4">Welcome To {restaurant.name}</h1>
              <p className="lead mb-4" style={{ fontSize: '1.3rem', maxWidth: '600px' }}>
                {restaurant.description}
              </p>
            </div>
          </div>
        </div>

        {/* Information Bar */}
        <div className="position-absolute bottom-0 start-0 end-0">
          <div className="container-fluid">
            <div className="row bg-white bg-opacity-90 text-dark py-4">
              <div className="col-md-3 text-center">
                <i className="bi bi-shop text-success mb-2" style={{ fontSize: '2rem' }}></i>
                <p className="mb-0 fs-6">{restaurant.hours}</p>
              </div>
              <div className="col-md-3 text-center">
                <i className="bi bi-geo-alt text-success mb-2" style={{ fontSize: '2rem' }}></i>
                <p className="mb-0 fs-6">{restaurant.address}</p>
              </div>
              <div className="col-md-3 text-center">
                <i className="bi bi-emoji-smile text-success mb-2" style={{ fontSize: '2rem' }}></i>
                <p className="mb-0 fs-6">{restaurant.cuisine}</p>
              </div>
              <div className="col-md-3 text-center">
                <i className="bi bi-telephone text-success mb-2" style={{ fontSize: '2rem' }}></i>
                <p className="mb-0 fs-6">{restaurant.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How We Work Section - Full Screen */}
      <div className="container-fluid py-5" style={{ minHeight: '100vh' }}>
        <div className="row align-items-center min-vh-100">
          <div className="col-md-6">
            <h2 className="display-3 fw-bold mb-4">How We Work</h2>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=500&fit=crop"
              alt="Working process"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <div className="position-relative">
              {/* Step 1 */}
              <div className="d-flex align-items-center mb-5">
                <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-4" style={{ width: '80px', height: '80px' }}>
                  <span className="fw-bold fs-4">1</span>
                </div>
                <div>
                  <h4 className="fw-bold">Explore Menu</h4>
                  <p className="text-muted fs-5">Explore our menu & select your favorite dish.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="d-flex align-items-center mb-5">
                <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-4" style={{ width: '80px', height: '80px' }}>
                  <span className="fw-bold fs-4">2</span>
                </div>
                <div>
                  <h4 className="fw-bold">Place Your Order</h4>
                  <p className="text-muted fs-5">Choose delivery or pickup & pay securely.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="d-flex align-items-center">
                <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-4" style={{ width: '80px', height: '80px' }}>
                  <span className="fw-bold fs-4">3</span>
                </div>
                <div>
                  <h4 className="fw-bold">Track Your Delivery</h4>
                  <p className="text-muted fs-5">Track your order in real-time & enjoy your meal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Menu Section - Full Screen */}
      <div className="container-fluid py-5" style={{ minHeight: '100vh' }}>
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h2 className="display-3 fw-bold">Our Menu</h2>
          <button className="btn btn-outline-secondary btn-lg">View All</button>
        </div>
        
        <div className="row g-4">
          {[
            {
              name: "Rice with chiken",
              image: Ricec,
              price: "₦3,000.00",
              desc: "Classic Nigerian jollof rice with spicy grilled chicken.",
              restaurant: "Item7GO"
            },
            {
              name: "A plate of rice with fish",
              image:Ricef,
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
          ].map((item, idx) => (
            <div key={idx} className="col-lg-3 col-md-4 col-sm-6">
              <div className="card border-0 shadow h-100">
                <div className="position-relative">
                  <img 
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                    style={{ height: '200px', objectFit: 'cover', width: '100%' }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h6 className="fw-bold">{item.name}</h6>
                  <div className="d-flex align-items-center mb-2">
                    <span className="text-warning me-1 fs-5">★★★★★</span>
                    <small className="text-muted">{restaurant.rating} ({restaurant.reviews})</small>
                  </div>
                  <p className="fw-bold text-success mb-1 fs-5">{item.price}</p>
                  <p className="text-muted mb-1">{item.restaurant}</p>
                  <p className="text-muted mb-3">{item.desc}</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <a href="#" className="text-decoration-none">View Details →</a>
                    <button className="btn btn-sm" style={{ backgroundColor: '#8B4513', color: 'white' }}>
                      <i className="bi bi-cart"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Testimonial - Full Screen */}
      <div className="container-fluid py-5" style={{ minHeight: '100vh' }}>
        <div className="row align-items-center min-vh-100">
          <div className="col-md-6">
            <div className="text-center">
              <div className="d-flex justify-content-center mb-4">
                {[1, 2, 3, 4, 5].map((avatar) => (
                  <div 
                    key={avatar}
                    className={`rounded-circle mx-2 ${avatar === 3 ? 'border border-success border-4' : ''}`}
                    style={{ 
                      width: '70px', 
                      height: '70px', 
                      backgroundColor: '#f0f0f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {avatar === 3 && <span className="fw-bold fs-5">MT</span>}
                  </div>
                ))}
              </div>
              <h4 className="fw-bold">Michael T</h4>
              <p className="text-muted mb-3 fs-5">
                "The best food delivery service I've used! The app is simple, and I always get my food hot and fresh."
              </p>
              <div className="d-flex justify-content-center align-items-center mb-3">
                <span className="text-warning me-2 fs-4">★★★★★</span>
                <small className="text-muted fs-5">{restaurant.rating}+ Rating</small>
              </div>
              <div className="d-flex justify-content-center gap-3">
                <button className="btn rounded-circle" style={{ backgroundColor: '#8B4513', color: 'white', width: '50px', height: '50px' }}>
                  ←
                </button>
                <button className="btn rounded-circle" style={{ backgroundColor: '#8B4513', color: 'white', width: '50px', height: '50px' }}>
                  →
                </button>
              </div>
            </div>
          </div>
                
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-success text-white py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-white rounded-circle me-2" style={{ width: '40px', height: '40px' }}></div>
                <span className="fw-bold fs-5">logo</span>
              </div>
              <p className="mb-0 fs-6">Bringing delicious restaurant & kitchen together with fast and convenient.</p>
            </div>
            <div className="col-md-2">
              <h6 className="fw-bold mb-3">Quick Links</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Home</a></li>
                <li><a href="#" className="text-white text-decoration-none">Partnership</a></li>
                <li><a href="#" className="text-white text-decoration-none">Partner with Us</a></li>
                <li><a href="#" className="text-white text-decoration-none">Apply to Rider</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h6 className="fw-bold mb-3">Company Info</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
                <li><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
                <li><a href="#" className="text-white text-decoration-none">Success Stories</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h6 className="fw-bold mb-3">Our Services</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Food Ordering & Delivery</a></li>
                <li><a href="#" className="text-white text-decoration-none">Pickup and Reservations</a></li>
                <li><a href="#" className="text-white text-decoration-none">Rider Sign Up</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h6 className="fw-bold mb-3">Legal & Support</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Terms of Service</a></li>
                <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
                <li><a href="#" className="text-white text-decoration-none">Refund Policy</a></li>
                <li><a href="#" className="text-white text-decoration-none">FAQs</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Dashboard Button */}
      <div className="position-fixed bottom-0 end-0 m-4">
        <button 
          className="btn btn-success rounded-circle shadow"
          onClick={handleBackToDashboard}
          style={{ width: '70px', height: '70px' }}
        >
          <i className="bi bi-arrow-left fs-4"></i>
        </button>
      </div>
    </div>
  );
};

export default RestaurantLanding;
