import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import buyer from "../src/assets/buyer.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupforBuyer = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const Signup = (e) => {
    e.preventDefault();

    if (!name || !mail || !password) {
      showMessage("Please fill all the fields", "error");
      return;
    }

    if (password.length < 6) {
      showMessage("Password must be at least 6 characters long", "error");
      return;
    }

    const url = "https://finalproject-4-7gpe.onrender.com/signup";
    const allData = { name, mail, password };

    axios
      .post(url, allData)
      .then((res) => {
        if (res.status === 201) {
          showMessage(res.data.message || "Buyer Account Created Successfully", "success");
          setTimeout(() => navigate("/signin/buyer"), 2000);
        }
      })
      .catch((err) => {
        console.log("Backend error:", err.response?.data);
        const backendMsg =
          err.response?.data?.error || "Something went wrong. Please try again.";
        showMessage(backendMsg, "error");
      });
  };

  const showMessage = (msg, type) => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <div
        className="row shadow rounded-4 bg-white overflow-hidden   w-100 mx-2"
        style={{ maxWidth: "900px" }}
      >
        {/* Image Section */}
        <div
          className="col-12 col-md-6 d-flex align-items-center justify-content-center  mx-auto"
          style={{ backgroundColor: "#e1f0d3" }}
        >
          <img
            src={buyer}
            alt="signup-illustration"
            className="img-fluid w-100 h-100"
            style={{ objectFit: "cover", minHeight: "250px" }}
          />
        </div>

        {/* Form Section */}
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center p-4 p-md-5">
          <div style={{ width: "100%", maxWidth: "350px" }}>
            <h4 className="mb-4 fw-bold text-center">Sign Up As A Buyer</h4>

            {message && (
              <p
                className={`alert mt-3 text-center ${messageType === "success" ? "alert-success" : "alert-danger"
                  }`}
              >
                {message}
              </p>
            )}

            <form onSubmit={Signup}>
              <div className="mb-3">
                <label className="form-label">Enter Your Name</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-person"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Name Here"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

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
                  Get Started
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
                Sign up with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupforBuyer;    