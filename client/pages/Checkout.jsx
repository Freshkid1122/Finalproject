import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <div className="container py-5 text-center min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-4 mb-4">Proceed to Checkout</h1>
      <p className="lead mb-4">This is where your payment and delivery details will be processed.</p>
      <Link to="/Addchart" className="btn btn-success btn-lg">Back to Cart</Link>
    </div>
  );
};

export default Checkout;
