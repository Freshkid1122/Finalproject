import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const OrderConfirmation = () => {
  return (
    <div className="container py-5 text-center min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <FaCheckCircle className="text-success mb-4" style={{ fontSize: '5rem' }} />
      <h1 className="display-4 mb-3">Order Placed Successfully!</h1>
      <p className="lead mb-4">Thank you for your purchase. Your order details have been sent to your email.</p>
      <div className="d-flex gap-3">
        <Link to="/buyer-dashboard" className="btn btn-outline-success btn-lg">Continue Shopping</Link>
        <Link to="/buyer-dashboard" className="btn btn-success btn-lg">Go to Home</Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
