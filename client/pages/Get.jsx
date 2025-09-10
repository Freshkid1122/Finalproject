import React from "react";
import ride from "../src/assets/ride.png";
import cheff from "../src/assets/cheff.png";
import food from "../src/assets/food.png";
import { Link } from "react-router-dom";

const Get = () => {
    return (
        <div
            className="bg-light d-flex flex-column justify-content-center align-items-center text-dark"
            style={{
                height: "100vh", // Full viewport height
                width: "100vw",  // Full viewport width
                margin: 0,
                padding: 0,
                overflow: "hidden",
            }}>

            {/* Logo */}
            <div className="container mb-4">
                <h4 className="text-success">logo</h4>
            </div>

            {/* Main Heading */}
            <div className="container text-center mb-5">
                <h1 className="fw-bold">
                    Get Started with <span className="text-success">FoodHub</span>
                </h1>
                <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
                    Whether you're hungry, own a restaurant, or want to earn as a rider, we've got you covered.
                    Choose your path and sign up today.
                </p>
            </div>

            {/* Cards */}
            <div className="container row flex-wrap justify-content-center gap-4">
                {/* Customer Card */}
                <div className="card p-3 bg-success-subtle" style={{ width: "22rem" }}>
                    <div className="d-flex align-items-center">
                        <img src={food} alt="Customer" className="rounded-circle me-3" width="70" height="70" style={{ borderRadius: "50%", border: "2px solid #006400", backgroundColor: "#006400" }} />
                        <div>
                            <h5 className="fw-bold mb-1">Sign Up As A Customer</h5>
                            <p className="mb-2">Order Your Favorite Food in Minutes!</p>
                            <div className="d-flex gap-2">
                                <Link to="/signup"><button className="btn btn-success">Sign Up</button></Link>
                                <Link to="/signin/buyer"><button className="btn btn-outline-success">Sign In</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Restaurant Card */}
                <div className="card p-3 bg-success-subtle" style={{ width: "22rem" }}>
                    <div className="d-flex align-items-center">
                        <img src={cheff} alt="Restaurant" className="rounded-circle me-3" width="70" height="70" style={{ borderRadius: "50%", border: "2px solid #006400", backgroundColor: "#006400" }} />
                        <div>
                            <h5 className="fw-bold mb-1">Sign Up As A Restaurant</h5>
                            <p className="mb-2">Expand your reach & attract new customers</p>
                            <div className="d-flex gap-2">
                                <Link to="/resturant"><button className="btn btn-success">Sign Up</button></Link>
                                <Link to="/signin/restaurant"><button className="btn btn-outline-success">Sign In</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Rider Card */}
            <div className="pb-5">
                <div className="card p-3 bg-success-subtle  my-4" style={{ width: "22rem" }}>
                    <div className="d-flex align-items-center">
                        <img src={ride} alt="Rider" className="rounded-circle me-3" width="70" height="70" style={{ borderRadius: "50%", border: "2px solid #006400", backgroundColor: "#006400" }} />
                        <div>
                            <h5 className="fw-bold mb-1">Sign Up as a Rider</h5>
                            <p className="mb-2">Earn Money on Your Own Schedule!</p>
                            <div className="d-flex gap-2">
                                <Link to="/Riders"><button className="btn btn-success">Sign Up</button></Link>
                                <Link to="/signin/rider"><button className="btn btn-outline-success">Sign In</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Get;
