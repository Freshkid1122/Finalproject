import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import buyer from "../src/assets/resturant.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupResurant = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    mail: '',
    ownerName: '',
    phoneNumber: '',
    restaurantName: '',
    address: '',
    password: ''
  });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.mail || !formData.ownerName || !formData.phoneNumber || 
        !formData.restaurantName || !formData.address || !formData.password) {
      showMessage("Please fill all the fields", "error");
      return;
    }

    if (formData.password.length < 6) {
      showMessage("Password must be at least 6 characters long", "error");
      return;
    }

    try {
      const url = "https://finalproject-1-0ed5.onrender.com/signup/restaurant";
      const response = await axios.post(url, formData);
      
      if (response.status === 201) {
        showMessage(response.data.message || "Restaurant Account Created Successfully", "success");
        setTimeout(() => navigate("/signin/restaurant"), 2000);
      }
    } catch (error) {
      console.log("Backend error:", error.response?.data);
      const backendMsg = error.response?.data?.error || "Something went wrong. Please try again.";
      showMessage(backendMsg, "error");
    }
  };

  const showMessage = (msg, type) => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
  <div className="d-flex justify-content-center" >
    <div className="container  min-vh-100  align-items-center justify-content-center ">
      <div
        className="row shadow rounded-4 bg-white overflow-hidden w-100 mx-2 justify-content-center"
        style={{ maxWidth: "900px"}}
      >
        {/* Image Section */}
  <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center p-0" style={{ backgroundColor: "#e1f0d3" }}>
          <img
            src={buyer}
            alt="signup-illustration"
            className="img-fluid w-100 h-10"
            style={{ objectFit: "cover", minHeight: "250px" }}
          />
        </div>

        {/* Form Section */}
        <div className="col-12 col-md-6 p-4 p-md-5 mx-auto">
          <div className="mx-auto w-100" style={{ maxWidth: "350px" }}>
            <h4 className="mb-4 fw-bold text-center">Sign Up As A Restaurant</h4>

            {message && (
              <p
                className={`alert mt-3 text-center ${
                  messageType === "success" ? "alert-success" : "alert-danger"
                }`}
              >
                {message}
              </p>
            )}

            <form onSubmit={handleSignup}>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email Here"
                    name="mail"
                    value={formData.mail}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Owner/Manager Name</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-person"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Owner Name Here"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-telephone"></i>
                  </span>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter Phone Number Here"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Restaurant Name</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-shop"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Restaurant Name Here"
                    name="restaurantName"
                    value={formData.restaurantName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Address</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-geo-alt"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Address Here"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
      
              <div className="mb-4">
                <label className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-lock"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Your Password Here"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="d-grid mb-3">
                <button className="btn btn-success" type="submit">Get Started</button>
              </div>
            </form>
      
            <div className="text-center my-3">
              <hr />
              <span className="position-relative px-2 bg-white" style={{ top: "-18px" }}>OR</span>
            </div>
      
            <div className="d-grid">
              <button className="btn btn-outline-secondary">
                <img
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="Google"
                  width="20"
                  className="me-2"
                />
                Sign up with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SignupResurant;
