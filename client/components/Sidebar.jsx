import React from 'react'
 import './Sidebar.css';
import { Link } from 'react-router-dom';
import {FaTachometerAlt, FaUser, FaTasks, FaFileAlt, FaChartBar, FaUsers, FaBook, FaCog, FaSignOutAlt,  } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div>
         <nav className="sidebar p-2 border-end sidebar-content">
                <ul className="nav flex-column mt-2">
                  <li className="nav-item">
                    <Link to="/resturant/dashboard">
              <a href="#" className="nav-link text-white active" aria-current="page">
                <i className="bi bi-house me-2"></i>
                Dashboard
              </a>
              </Link>
            </li>
            <li>
              <Link to="/resturant/dashboard">
              <a href="#" className="nav-link text-white">
                <i className="bi bi-list-ul me-2"></i>
                New Orders
              </a>
              </Link>
            </li>
            <li>
              <Link to="/resturant/dashboard">
              <a href="#" className="nav-link text-white">
                <i className="bi bi-plus-circle me-2"></i>
                Add Products
              </a>
              </Link>
            </li>
            <li>
              <Link to="/resturant/dashboard">
              <a href="#" className="nav-link text-white">
                <i className="bi bi-graph-up me-2"></i>
                Sales
              </a>
              </Link>
            </li>
            <li>
              <Link to="/resturant/dashboard">
              <a href="#" className="nav-link text-white">
                <i className="bi bi-people me-2"></i>
                Customers
              </a>
              </Link>
            </li>
            <li>
              <Link to="/resturant/dashboard">
              <a href="#" className="nav-link text-white">
                <i className="bi bi-gear me-2"></i>
                Settings
              </a>
              </Link>
            </li>
            <li>
              <Link to="/resturant/dashboard">
              <a href="#" className="nav-link text-white">
                <i className="bi bi-bell me-2"></i>
                Notification
              </a>
              </Link>
            </li>
                </ul>




              <hr className="text-white" />
              <div className="mt-auto text-center ">
            <div className="text-white small">
              <div className="fw-bold text-dark">Bookit Bookstore</div>
              <div className='text-dark'>info@bookit.com</div>
              <i className="bi bi-book text-white text-dark "></i>
            </div>
          </div>
              </nav>


    </div>
  )
}

export default Sidebar
