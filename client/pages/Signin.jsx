import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import buyer from "../src/assets/buyer.png";
import { useState } from "react";
import axios from 'axios';
import {  useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");




  const Signin = async(e) => {
  e.preventDefault();

  if (!mail || !password) {
      setMessage("Please fill all the fields");
      setMessageType("error");
      setTimeout(() => setMessage(""), 2000);
      return;
  }

  const allData = { mail, password, };
  const url = "http://localhost:3000/signin";

  try {
      const res = await axios.post(url, allData);
      if (res.status === 200) {
          // Store token and user info
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          localStorage.setItem("name", res.data.user.name);
          localStorage.setItem("userType", res.data.user.userType);
          
          setMessage("User Signed In Successfully");
          setMessageType("success");
          
          // Redirect based on user type
          const userType = res.data.user.userType;
          let redirectPath = "/dashboard"; // default
          
          if (userType === "buyer") {
            redirectPath = "/buyer-dashboard";
          } else if (userType === "rider") {
            redirectPath = "/rider-dashboard";
          }
          // restaurant users go to /dashboard (existing path)
          
          setTimeout(() => navigate(redirectPath), 2000);
      }
    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            setMessage(error.response.data.error);
        } else {
            setMessage("An unexpected error occurred");
        }
        setMessageType("error");
    } 
    
  }


  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <div
        className="row shadow rounded-4 bg-white overflow-hidden w-100 mx-2"
        style={{ maxWidth: "900px" }}
      >
        {/* Image Section */}
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center p-0" style={{ backgroundColor: "#e1f0d3" }}>
          <img
            src={buyer}
            alt="signin-illustration"
            className="img-fluid w-100 h-100"
            style={{ objectFit: "cover", minHeight: "250px" }}
          />
        </div>

        {/* Form Section */}
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center p-4 p-md-5">
          <div style={{ width: "100%", maxWidth: "350px" }}>
            <h4 className="mb-4 fw-bold text-center">Sign in As A Buyer</h4>

            {message && (
              <p
    className={`alert mt-3 text-center ${
      messageType === "success" ? "alert-success" : "alert-danger"
    }`}
  >
    {message}
</p>
)}
      <form onSubmit={Signin} >
            <div className="mb-3">
              <label className="form-label">Enter Your Email</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-person"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email Here" value={mail} onChange={(e) => setMail(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label">Enter Your Password</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-lock"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Your Password Here" value={password} onChange={(e) => setPassword(e.target.value)}
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
  );
};

export default Signin;