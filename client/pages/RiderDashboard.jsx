import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import { getUser, logout } from "../src/utils/auth";

const RiderDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAvailable, setIsAvailable] = useState(true);

  useEffect(() => {
    const currentUser = getUser();
    if (!currentUser || currentUser.userType !== 'rider') {
      navigate('/Signin');
      return;
    }
    setUser(currentUser);
    
    // Mock delivery data - in real app, this would come from API
    const mockDeliveries = [
      {
        id: 1,
        orderNumber: "ORD-001",
        restaurantName: "Pizza Palace",
        customerName: "John Doe",
        customerAddress: "123 Main St, City",
        items: "2x Margherita Pizza, 1x Garlic Bread",
        totalAmount: "$28.50",
        status: "pending",
        estimatedTime: "25 min",
        distance: "2.3 km"
      },
      {
        id: 2,
        orderNumber: "ORD-002",
        restaurantName: "Burger House",
        customerName: "Jane Smith",
        customerAddress: "456 Oak Ave, City",
        items: "1x Cheeseburger, 1x Fries, 1x Milkshake",
        totalAmount: "$18.75",
        status: "in-progress",
        estimatedTime: "15 min",
        distance: "1.8 km"
      },
      {
        id: 3,
        orderNumber: "ORD-003",
        restaurantName: "Sushi Express",
        customerName: "Mike Johnson",
        customerAddress: "789 Pine Rd, City",
        items: "1x California Roll, 1x Miso Soup",
        totalAmount: "$24.90",
        status: "completed",
        estimatedTime: "0 min",
        distance: "3.1 km"
      }
    ];
    
    setDeliveries(mockDeliveries);
    setLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    logout();
  };

  const toggleAvailability = () => {
    setIsAvailable(!isAvailable);
    // In real app, this would update the rider's status in the database
  };

  const updateDeliveryStatus = (deliveryId, newStatus) => {
    setDeliveries(prev => 
      prev.map(delivery => 
        delivery.id === deliveryId 
          ? { ...delivery, status: newStatus }
          : delivery
      )
    );
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'pending':
        return <span className="badge bg-warning text-dark">Pending</span>;
      case 'in-progress':
        return <span className="badge bg-info">In Progress</span>;
      case 'completed':
        return <span className="badge bg-success">Completed</span>;
      default:
        return <span className="badge bg-secondary">{status}</span>;
    }
  };

  const getStatusActions = (delivery) => {
    switch(delivery.status) {
      case 'pending':
        return (
          <button 
            className="btn btn-primary btn-sm me-2"
            onClick={() => updateDeliveryStatus(delivery.id, 'in-progress')}
          >
            <i className="bi bi-play-circle me-1"></i>
            Start Delivery
          </button>
        );
      case 'in-progress':
        return (
          <button 
            className="btn btn-success btn-sm me-2"
            onClick={() => updateDeliveryStatus(delivery.id, 'completed')}
          >
            <i className="bi bi-check-circle me-1"></i>
            Mark Complete
          </button>
        );
      case 'completed':
        return (
          <span className="text-success">
            <i className="bi bi-check-circle me-1"></i>
            Delivered
          </span>
        );
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            <i className="bi bi-bicycle me-2"></i>
            Rider Dashboard
          </a>
          <div className="navbar-nav ms-auto">
            <span className="navbar-text me-3">
              Welcome, {user?.name}!
            </span>
            <button className="btn btn-outline-light btn-sm me-2" onClick={toggleAvailability}>
              <i className={`bi bi-circle-fill me-1 ${isAvailable ? 'text-success' : 'text-danger'}`}></i>
              {isAvailable ? 'Available' : 'Unavailable'}
            </button>
            <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
              <i className="bi bi-box-arrow-right me-1"></i>
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Stats Cards */}
      <div className="container mt-4">
        <div className="row mb-4">
          <div className="col-md-3">
            <div className="card bg-primary text-white">
              <div className="card-body text-center">
                <i className="bi bi-bicycle display-4"></i>
                <h5 className="card-title mt-2">Total Deliveries</h5>
                <h3 className="mb-0">{deliveries.length}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-success text-white">
              <div className="card-body text-center">
                <i className="bi bi-check-circle display-4"></i>
                <h5 className="card-title mt-2">Completed</h5>
                <h3 className="mb-0">{deliveries.filter(d => d.status === 'completed').length}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-warning text-dark">
              <div className="card-body text-center">
                <i className="bi bi-clock display-4"></i>
                <h5 className="card-title mt-2">Pending</h5>
                <h3 className="mb-0">{deliveries.filter(d => d.status === 'pending').length}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-info text-white">
              <div className="card-body text-center">
                <i className="bi bi-speedometer2 display-4"></i>
                <h5 className="card-title mt-2">In Progress</h5>
                <h3 className="mb-0">{deliveries.filter(d => d.status === 'in-progress').length}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Deliveries Section */}
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="bi bi-list-ul me-2"></i>
                  Active Deliveries
                </h5>
              </div>
              <div className="card-body">
                {deliveries.length === 0 ? (
                  <div className="text-center py-4">
                    <i className="bi bi-inbox display-1 text-muted"></i>
                    <h5 className="mt-3">No deliveries yet</h5>
                    <p className="text-muted">You'll see new delivery requests here</p>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Order #</th>
                          <th>Restaurant</th>
                          <th>Customer</th>
                          <th>Items</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {deliveries.map(delivery => (
                          <tr key={delivery.id}>
                            <td>
                              <strong>{delivery.orderNumber}</strong>
                            </td>
                            <td>{delivery.restaurantName}</td>
                            <td>
                              <div>{delivery.customerName}</div>
                              <small className="text-muted">{delivery.customerAddress}</small>
                            </td>
                            <td>
                              <small>{delivery.items}</small>
                            </td>
                            <td>
                              <strong className="text-success">{delivery.totalAmount}</strong>
                            </td>
                            <td>{getStatusBadge(delivery.status)}</td>
                            <td>
                              {getStatusActions(delivery)}
                              <button className="btn btn-outline-info btn-sm">
                                <i className="bi bi-eye me-1"></i>
                                View Details
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="bi bi-lightning me-2"></i>
                  Quick Actions
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3 mb-2">
                    <button className="btn btn-outline-primary w-100">
                      <i className="bi bi-geo-alt me-1"></i>
                      Update Location
                    </button>
                  </div>
                  <div className="col-md-3 mb-2">
                    <button className="btn btn-outline-success w-100">
                      <i className="bi bi-calendar-check me-1"></i>
                      View Schedule
                    </button>
                  </div>
                  <div className="col-md-3 mb-2">
                    <button className="btn btn-outline-info w-100">
                      <i className="bi bi-graph-up me-1"></i>
                      Earnings Report
                    </button>
                  </div>
                  <div className="col-md-3 mb-2">
                    <button className="btn btn-outline-warning w-100">
                      <i className="bi bi-gear me-1"></i>
                      Settings
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderDashboard;
