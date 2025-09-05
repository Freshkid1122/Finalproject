import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import { getUser, logout } from "../src/utils/auth";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const currentUser = getUser();
    if (!currentUser || currentUser.userType !== 'restaurant') {
      navigate('/Signin');
      return;
    }
    setUser(currentUser);
    
    // Mock data for comprehensive restaurant dashboard
    const mockOrders = [
      {
        id: 1,
        orderNumber: "ORD-001",
        customerName: "Sanah Doe",
        customerPhone: "+1234567890",
        items: [
          { name: "Jollof Rice And Chicken", quantity: 2, price: 5000, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=100&h=100&fit=crop" }
        ],
        totalAmount: 10000,
        status: "pending",
        orderTime: "10 Mins Ago",
        estimatedDelivery: "45 min"
      },
      {
        id: 2,
        orderNumber: "ORD-002",
        customerName: "Sarah Doe",
        customerPhone: "+1234567891",
        items: [
          { name: "Jollof Rice And Chicken", quantity: 1, price: 5000, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=100&h=100&fit=crop" }
        ],
        totalAmount: 5000,
        status: "preparing",
        orderTime: "15 Mins Ago",
        estimatedDelivery: "35 min"
      },
      {
        id: 3,
        orderNumber: "ORD-003",
        customerName: "Soroh Doe",
        customerPhone: "+1234567892",
        items: [
          { name: "Jollof Rice And Chicken", quantity: 1, price: 5000, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=100&h=100&fit=crop" }
        ],
        totalAmount: 5000,
        status: "ready",
        orderTime: "20 Mins Ago",
        estimatedDelivery: "25 min"
      },
      {
        id: 4,
        orderNumber: "ORD-004",
        customerName: "John Doe",
        customerPhone: "+1234567893",
        items: [
          { name: "Jollof Rice And Chicken", quantity: 2, price: 5000, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=100&h=100&fit=crop" }
        ],
        totalAmount: 10000,
        status: "delivered",
        orderTime: "1 Hour Ago",
        estimatedDelivery: "0 min"
      }
    ];
    
    setOrders(mockOrders);
    setLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    logout();
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prev => 
      prev.map(order => 
        order.id === orderId 
          ? { ...order, status: newStatus }
          : order
      )
    );
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'pending':
        return <span className="badge bg-warning text-dark">Pending</span>;
      case 'preparing':
        return <span className="badge bg-info">Preparing</span>;
      case 'ready':
        return <span className="badge bg-success">Ready</span>;
      case 'delivered':
        return <span className="badge bg-success">Delivered</span>;
      case 'cancelled':
        return <span className="badge bg-danger">Cancelled</span>;
      default:
        return <span className="badge bg-secondary">{status}</span>;
    }
  };

  const getStatusActions = (order) => {
    switch(order.status) {
      case 'pending':
        return (
          <button 
            className="btn btn-success btn-sm"
            onClick={() => updateOrderStatus(order.id, 'preparing')}
          >
            Accept
          </button>
        );
      case 'preparing':
        return (
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => updateOrderStatus(order.id, 'ready')}
          >
            Update
          </button>
        );
      case 'ready':
        return (
          <button 
            className="btn btn-info btn-sm"
            onClick={() => updateOrderStatus(order.id, 'delivered')}
          >
            Update
          </button>
        );
      default:
        return null;
    }
  };

  const getOrdersByStatus = (status) => {
    return orders.filter(order => order.status === status);
  };

  const totalOrdersToday = orders.length;
  const revenueToday = orders.reduce((sum, order) => sum + order.totalAmount, 0);
  const totalCustomers = new Set(orders.map(order => order.customerName)).size;

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
    <div className="container-fluid min-vh-100 bg-light">
      <div className="row flex-nowrap">
        {/* Left Sidebar */}
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-success d-flex flex-column align-items-center py-4 shadow-sm">
          {/* Logo */}
          <div className="d-flex align-items-center mb-4">
            <div className="bg-danger text-white px-3 py-2 rounded me-2">
              <strong>item7go</strong>
            </div>
          </div>
          
          {/* Navigation Menu */}
          <ul className="nav nav-pills flex-column mb-auto mt-4 w-100">
            <li className="nav-item">
              <a href="#" className="nav-link text-white active" aria-current="page">
                <i className="bi bi-house me-2"></i>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <i className="bi bi-list-ul me-2"></i>
                New Orders
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <i className="bi bi-plus-circle me-2"></i>
                Add Products
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <i className="bi bi-graph-up me-2"></i>
                Sales
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <i className="bi bi-people me-2"></i>
                Customers
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <i className="bi bi-gear me-2"></i>
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <i className="bi bi-bell me-2"></i>
                Notification
              </a>
            </li>
          </ul>

          {/* Bottom Section */}
          <div className="mt-auto text-center">
            <div className="text-white small">
              <div className="fw-bold">Bookit Bookstore</div>
              <div>info@bookit.com</div>
              <i className="bi bi-book text-white"></i>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col py-3">
          {/* Top Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="fw-bold">Hello {user?.name}, Welcome back</h2>
            </div>
            <div className="d-flex align-items-center">
              <div className="input-group me-3" style={{ width: "300px" }}>
                <span className="input-group-text">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="d-flex align-items-center me-3">
                <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center me-2" style={{ width: "40px", height: "40px" }}>
                  <i className="bi bi-person text-white"></i>
                </div>
            <div>
                  <div className="fw-bold">John Doe</div>
                  <small className="text-muted">Admin</small>
                </div>
              </div>
              <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
                <i className="bi bi-box-arrow-right me-1"></i>
                Logout
              </button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="text-muted small">Total Orders Today</h6>
                      <h3 className="mb-0">{totalOrdersToday}</h3>
                    </div>
                    <div className="text-center">
                      <i className="bi bi-bag fs-2 text-success"></i>
                      <div className="small text-success">-50%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="text-muted small">Revenue Today</h6>
                      <h3 className="mb-0">₦{revenueToday.toLocaleString()}</h3>
                    </div>
                    <div className="text-center">
                      <i className="bi bi-currency-exchange fs-2 text-success"></i>
                      <div className="small text-success">-50%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="text-muted small">Total Customers</h6>
                      <h3 className="mb-0">{totalCustomers}</h3>
                    </div>
                    <div className="text-center">
                      <i className="bi bi-people fs-2 text-success"></i>
                      <div className="small text-success">-50%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sales Chart and Top Selling */}
          <div className="row mb-4">
            <div className="col-md-8">
              <div className="card shadow-sm border-0">
                <div className="card-header bg-white">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Sales For Today</h5>
                    <select className="form-select form-select-sm" style={{ width: "auto" }}>
                      <option>Today</option>
                      <option>This Week</option>
                      <option>This Month</option>
                    </select>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-end justify-content-center" style={{ height: "200px" }}>
                    <div className="text-center">
                      <div className="h4 text-success">₦{revenueToday.toLocaleString()}</div>
                      <div className="text-muted">Peak Sales</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm border-0">
                <div className="card-header bg-white">
                  <h5 className="mb-0">Top Selling Today</h5>
                </div>
                <div className="card-body">
                  {orders.slice(0, 3).map((order, index) => (
                    <div key={index} className="d-flex align-items-center mb-3">
                      <img 
                        src={order.items[0].image} 
                        alt="Food" 
                        className="rounded me-2"
                        style={{ width: "40px", height: "40px", objectFit: "cover" }}
                      />
                      <div className="flex-grow-1">
                        <div className="fw-bold">{order.items[0].name}</div>
                        <small className="text-muted">Qty: {order.items[0].quantity}</small>
                      </div>
                      <div className="fw-bold">₦{order.items[0].price.toLocaleString()}</div>
                    </div>
                  ))}
                  <button className="btn btn-outline-success w-100">View All</button>
                </div>
              </div>
            </div>
          </div>

          {/* Orders Management */}
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="card shadow-sm border-0">
                <div className="card-header bg-white">
                  <h5 className="mb-0">Recent Orders</h5>
                </div>
                <div className="card-body">
                  {getOrdersByStatus('pending').slice(0, 3).map((order, index) => (
                    <div key={index} className="d-flex align-items-center mb-3 p-2 border rounded">
                      <img 
                        src={order.items[0].image} 
                        alt="Food" 
                        className="rounded me-2"
                        style={{ width: "40px", height: "40px", objectFit: "cover" }}
                      />
                      <div className="flex-grow-1">
                        <div className="fw-bold">{order.items[0].name}</div>
                        <small className="text-muted">{order.orderTime} • {order.customerName} • Qty: {order.items[0].quantity}</small>
                      </div>
                      <div className="text-end">
                        <div className="fw-bold">₦{order.totalAmount.toLocaleString()}</div>
                        {getStatusActions(order)}
                      </div>
                    </div>
                  ))}
                  <button className="btn btn-outline-success w-100">View All</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm border-0">
                <div className="card-header bg-white">
                  <h5 className="mb-0">Ongoing Orders</h5>
                </div>
                <div className="card-body">
                  {getOrdersByStatus('preparing').slice(0, 3).map((order, index) => (
                    <div key={index} className="d-flex align-items-center mb-3 p-2 border rounded">
                      <img 
                        src={order.items[0].image} 
                        alt="Food" 
                        className="rounded me-2"
                        style={{ width: "40px", height: "40px", objectFit: "cover" }}
                      />
                      <div className="flex-grow-1">
                        <div className="fw-bold">{order.items[0].name}</div>
                        <small className="text-muted">{order.orderTime} • {order.customerName} • Qty: {order.items[0].quantity}</small>
                      </div>
                      <div className="text-end">
                        <div className="badge bg-info mb-2">Preparing</div>
                        {getStatusActions(order)}
                      </div>
                    </div>
                  ))}
                  <button className="btn btn-outline-success w-100">View All</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm border-0">
                <div className="card-header bg-white">
                  <h5 className="mb-0">Recently Completed</h5>
                </div>
                <div className="card-body">
                  {getOrdersByStatus('delivered').slice(0, 3).map((order, index) => (
                    <div key={index} className="d-flex align-items-center mb-3 p-2 border rounded">
                      <img 
                        src={order.items[0].image} 
                        alt="Food" 
                        className="rounded me-2"
                        style={{ width: "40px", height: "40px", objectFit: "cover" }}
                      />
                      <div className="flex-grow-1">
                        <div className="fw-bold">{order.items[0].name}</div>
                        <small className="text-muted">{order.orderTime} • {order.customerName} • Qty: {order.items[0].quantity}</small>
                      </div>
                      <div className="text-end">
                        <div className="fw-bold">₦{order.totalAmount.toLocaleString()}</div>
                        <div className="badge bg-success">Delivered</div>
                      </div>
                    </div>
                  ))}
                  <button className="btn btn-outline-success w-100">View All</button>
                </div>
              </div>
            </div>
          </div>

          {/* Last Orders Table */}
          <div className="card shadow-sm border-0">
            <div className="card-header bg-white">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Last Orders</h5>
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control form-control-sm me-2"
                    placeholder="Search orders..."
                    style={{ width: "200px" }}
                  />
                  <button className="btn btn-outline-secondary btn-sm">Filter</button>
                </div>
              </div>
            </div>
            <div className="card-body">
            <div className="table-responsive">
                <table className="table table-hover">
                <thead>
                  <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Customer</th>
                      <th>Order Id</th>
                    <th>Date</th>
                    <th>Status</th>
                      <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                      <tr key={order.id}>
                        <td>{index + 1}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img 
                              src={order.items[0].image} 
                              alt="Food" 
                              className="rounded me-2"
                              style={{ width: "30px", height: "30px", objectFit: "cover" }}
                            />
                            {order.items[0].name}
                          </div>
                        </td>
                        <td>{order.customerName}</td>
                        <td>{order.orderNumber}</td>
                        <td>24th May 2025</td>
                        <td>{getStatusBadge(order.status)}</td>
                        <td>₦{order.totalAmount.toLocaleString()}</td>
                  </tr>
                    ))}
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;