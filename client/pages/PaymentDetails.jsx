import React, { useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext';

const PaymentDetails = () => {
  const navigate = useNavigate();
  const { getTotalPrice, clearCart } = useCart();
  const deliveryFee = 1500; // Assuming same delivery fee

  // State for form fields
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePlaceOrder = () => {
    // In a real application, you would process payment here
    // and then navigate to an order confirmation page.
    alert('Order Placed! (This is a placeholder)');
    clearCart(); // Clear the cart after successful order
    navigate('/order-confirmation'); // Navigate to a new order confirmation page
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Basic validation
    if (!fullName || !address || !city || !zip || !phone || !cardNumber || !expDate || !cvv) {
      alert('Please fill in all the required fields for delivery and payment.');
      return;
    }

    // If all fields are filled, proceed to place order
    handlePlaceOrder();
  };

  return (
    <div className="container py-5 min-vh-100">
      <div className="d-flex justify-content-center mb-5">
        <h4 className="text-success me-3">1 Shopping Cart →</h4>
        <h4 className="text-success me-3">2 Delivery/Payment →</h4>
        <h4 className="text-muted">3 Order Completed</h4>
      </div>

      <div className="card shadow w-100 border-0 p-4">
        <h2 className="mb-4">Delivery & Payment</h2>
        <div className="row">
          <div className="col-md-7">
            {/* Delivery Address Form */}
            <h5 className="mb-3">Delivery Address</h5>
            <form onSubmit={handleSubmit}> {/* Attach onSubmit handler */}
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullName" placeholder="John Doe" required value={fullName} onChange={(e) => setFullName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" placeholder="123 Main St" required value={address} onChange={(e) => setAddress(e.target.value)} />
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="city" className="form-label">City</label>
                  <input type="text" className="form-control" id="city" placeholder="Ogbomoso" required value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="zip" className="form-label">Zip Code</label>
                  <input type="text" className="form-control" id="zip" placeholder="10001" required value={zip} onChange={(e) => setZip(e.target.value)} />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" id="phone" placeholder="+1 (123) 456-7890" required value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>

              {/* Payment Method */}
              <h5 className="mb-3 mt-4">Payment Method</h5>
              <div className="form-check mb-2">
                <input className="form-check-input" type="radio" name="paymentMethod" id="creditCard" defaultChecked />
                <label className="form-check-label" htmlFor="creditCard">
                  Credit Card
                </label>
              </div>
              <div className="form-check mb-4">
                <input className="form-check-input" type="radio" name="paymentMethod" id="paypal" />
                <label className="form-check-label" htmlFor="paypal">
                  PayPal
                </label>
              </div>
              {/* Credit Card Details (example) */}
              <div className="mb-3">
                <label htmlFor="cardNumber" className="form-label">Card Number</label>
                <input type="text" className="form-control" id="cardNumber" placeholder="XXXX XXXX XXXX XXXX" required value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="expDate" className="form-label">Expiration Date</label>
                  <input type="text" className="form-control" id="expDate" placeholder="MM/YY" required value={expDate} onChange={(e) => setExpDate(e.target.value)} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="cvv" className="form-label">CVV</label>
                  <input type="text" className="form-control" id="cvv" placeholder="123" required value={cvv} onChange={(e) => setCvv(e.target.value)} />
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-success btn-lg">Place Order</button> {/* Change to type="submit" */}
              </div>
            </form>
          </div>

          <div className="col-md-5">
            {/* Order Summary */}
            <div className="card bg-light p-4">
              <h5 className="mb-3">Order Summary</h5>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item d-flex justify-content-between align-items-center bg-light">
                  Subtotal
                  <span>₦{getTotalPrice().toLocaleString()}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center bg-light">
                  Delivery Fee
                  <span>₦{deliveryFee.toLocaleString()}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center bg-light fw-bold fs-5">
                  Total
                  <span>₦{(getTotalPrice() + deliveryFee).toLocaleString()}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
