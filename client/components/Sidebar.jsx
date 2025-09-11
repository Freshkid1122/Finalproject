import React, { useState } from 'react'
 import './Sidebar.css';
import { Link } from 'react-router-dom'
import { FaTachometerAlt, FaUser, FaTasks, FaFileAlt, FaChartBar, FaUsers, FaBook, FaCog, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      {/* Toggle Button for mobile */}
      <button className="btn btn-primary d-md-none m-3" onClick={toggleSidebar}>
        {showSidebar ? <FaTimes /> : <FaBars />}
      </button>

         <nav className={`sidebar p-2 border-end sidebar-content ${showSidebar ? 'show' : ''}`}>
                <ul className="nav flex-column mt-2">
                  <li className="nav-item">
                    <Link to="/resturant/dashboard">
              <a href="#" className="nav-link text-white active" aria-current="page">
                <FaTachometerAlt className="me-2"/>
                Dashboard
              </a>
              </Link>
            </li>
            <li>
              <Link to="/resturant/dashboard">
              <a href="#" className="nav-link text-white">
                <FaTasks className="me-2"/>
                New Orders
              </a>
              </Link>
            </li>
            <li>
              <Link to="/resturant/dashboard">
              <a href="#" className="nav-link text-white">
                <FaFileAlt className="me-2"/>
                Add Products
              </a>
              </Link>
            </li>
            <li>
              <Link to="/resturant/dashboard">
              <a href="#" className="nav-link text-white">
                <FaChartBar className="me-2"/>
                Sales
              </a>
              </Link>
            </li>
            <li>
              <Link to="/resturant/dashboard">
              <a href="#" className="nav-link text-white">
                <FaUsers className="me-2"/>
                Customers
              </a>
              </Link>
            </li>
            <li>
              <Link to="/resturant/dashboard">
              <a href="#" className="nav-link text-white">
                <FaCog className="me-2"/>
                Settings
              </a>
              </Link>
            </li>
            <li>
              <Link to="/resturant/dashboard">
              <a href="#" className="nav-link text-white">
                <FaBook className="me-2"/>
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
              <FaBook className="text-white text-dark "/>
            </div>
          </div>
              </nav>


    </div>
  )
}

export default Sidebar
