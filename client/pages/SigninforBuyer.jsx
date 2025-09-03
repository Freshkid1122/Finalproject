import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import buyer from "../src/assets/buyer.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SigninforBuyer = () => {
  const navigate = useNavigate();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSignin = async (e) => {
    e.preventDefault();

    if (!mail || !password) {
      showMessage("Please fill all the fields", "error");
      return;
    }

    const allData = { mail, password };
    const url = "https://finalproject-1-0ed5.onrender.com/signin";

    try {
      const res = await axios.post(url, allData);
      if (res.status === 200) {
        // Store token and user info
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("name", res.data.user.name);
        localStorage.setItem("userType", res.data.user.userType);
        
        showMessage("User Signed In Successfully", "success");
        setTimeout(() => navigate("/buyer-dashboard"), 2000);
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
    <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <div
        className="row shadow rounded-4 bg-white overflow-hidden w-100 mx-2"
        style={{ maxWidth: "900px" }}
      >
        {/* Image Section */}
        <div
          className="col-12 col-md-6 d-flex align-items-center justify-content-center p-0"
          style={{ backgroundColor: "#e1f0d3" }}
        >
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
            <h4 className="mb-4 fw-bold text-center">Sign In As A Buyer</h4>

            {message && (
              <p
                className={`alert mt-3 text-center ${
                  messageType === "success" ? "alert-success" : "alert-danger"
                }`}
              >
                {message}
              </p>
            )}

            <form onSubmit={handleSignin}>
              <div className="mb-3">
                <label className="form-label">Enter Your Email</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email Here"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
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
                    placeholder="Enter Your Password Here"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="d-grid mb-3">
                <button className="btn btn-success" type="submit">
                  Sign In
                </button>
              </div>
            </form>

            <div className="text-center my-3">
              <hr />
              <span
                className="position-relative px-2 bg-white"
                style={{ top: "-18px" }}
              >
                OR
              </span>
            </div>

            <div className="d-grid">
              <button className="btn btn-outline-secondary">
                <img
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="Google"
                  width="20"
                  className="me-2"
                />
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninforBuyer;    