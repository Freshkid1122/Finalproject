import React from "react";
import { useCart } from "../components/CartContext";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const AddChart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart , getTotalPrice } = useCart();
  const navigate = useNavigate(); // Initialize useNavigate

  const deliveryFee = 1500; // Placeholder for delivery fee

  return (
    <div className="container py-5">
      {/* Progress Bar */}
      <div className="d-flex justify-content-center mb-5">
        <h4 className="text-success me-3">1 Shopping Cart →</h4>
        <h4 className="text-muted me-3">2 Delivery/Payment →</h4>
        <h4 className="text-muted">3 Order Completed</h4>
      </div>

      <div className="card shadow w-100 border-0 p-4">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product Details</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Subtotal</th>
                <th scope="col"></th> {/* For Delete button */}
              </tr>
            </thead>
            <tbody>
              {cart.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center text-muted py-4">Your cart is empty.</td>
                </tr>
              ) : (
                cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src={item.image} alt={item.name} style={{ width: 60, height: 60, objectFit: "cover", borderRadius: 8, marginRight: 10 }} />
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td>₦{item.price.toLocaleString()}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <button className="btn btn-sm btn-outline-secondary" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
                        <span className="mx-2">{item.quantity}</span>
                        <button className="btn btn-sm btn-outline-secondary" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                    </td>
                    <td>₦{(item.price * item.quantity).toLocaleString()}</td>
                    <td>
                      <button className="btn btn-link text-danger" onClick={() => removeFromCart(item.id)}>Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {cart.length > 0 && (
          <div className="row justify-content-end mt-4">
            <div className="col-md-6 col-lg-4">
              <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">Subtotal:</th>
                    <td className="text-end">₦{getTotalPrice().toLocaleString()}</td>
                  </tr>
                  <tr>
                    <th scope="row">Delivery Fee:</th>
                    <td className="text-end">₦{deliveryFee.toLocaleString()}</td>
                  </tr>
                  <tr className="fw-bold fs-5">
                    <th scope="row">Total:</th>
                    <td className="text-end">₦{(getTotalPrice() + deliveryFee).toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
              <div className="d-flex justify-content-end gap-2">
                <Link to="/buyer-dashboard"><button className="btn btn-outline-success">Continue Shopping</button></Link>
                <button className="btn btn-success" onClick={() => navigate("/payment-details")}>Checkout</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddChart;
