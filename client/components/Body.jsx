import React from 'react'
import './Navbar.css'
import Bike from "../src/assets/bike.jpg";
import Cook from "../src/assets/cook.jpg";


const Body = () => {
  return (
    <>
      <div>
       
      <div className="outer-container">
        <div className='center-container'>
            <div className="container-fluid py-5 center align-items-center justify-content-center" style={{ backgroundColor: "#fff9ee" }}>
            <h3 className='mx-5'>Join Us Today</h3>
      <div className="container">
        <div className="row align-items-center">

          {/* Left Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={Cook}
              alt="Chef cooking"
              className=" name"
              
            />
          </div>

          {/* Right Content */}
          <div className="col-md-6">
            <h3 className="fw-bold">Join as a Restaurant Partner</h3>
            <h5 className="mb-4">Grow your business and reach more customers!</h5>

            <ul className="list-unstyled mb-4">
              <li className="mb-2 d-flex align-items-start">
                <span className="text-primary me-2">✔</span>
                <span>Increase your orders by reaching thousands of hungry customers</span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <span className="text-primary me-2">✔</span>
                <span>Easy order management with our user-friendly dashboard</span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <span className="text-primary me-2">✔</span>
                <span>Get paid securely and on time</span>
              </li>
            </ul>

            <button className="btn btn-success">Get Started</button>
          </div>

        </div>
      </div>
    </div>
      </div>
      </div>
      </div>
      <div>
       
      <div className="outer-container">
        <div className='center-container'>

            <div className="container-fluid py-5 center align-items-center justify-content-center" style={{ backgroundColor: "#fff9ee" }}>
      <div className="container">
        <div className="row align-items-center">

          {/* Left Image */}

          {/* Right Content */}
          <div className="col-md-6">
            <h3 className="fw-bold">Join as a Restaurant Partner</h3>
            <h5 className="mb-4">Grow your business and reach more customers!</h5>

            <ul className="list-unstyled mb-4">
              <li className="mb-2 d-flex align-items-start">
                <span className="text-primary me-2">✔</span>
                <span>Increase your orders by reaching thousands of hungry customers</span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <span className="text-primary me-2">✔</span>
                <span>Easy order management with our user-friendly dashboard</span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <span className="text-primary me-2">✔</span>
                <span>Get paid securely and on time</span>
              </li>
            </ul>

            <button className="btn btn-success">Get Started</button>
          </div>

          <div className="col-md-6 mb-4 my-4 mb-md-0">
            <img
              src={Bike}
              alt="Chef cooking"
              className=" name"
              
            />
          </div>

        </div>
      </div>
    </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default Body
