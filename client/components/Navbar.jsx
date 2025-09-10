import React from 'react'
import { Link } from 'react-router-dom'
import L from "../src/assets/L.jpg";
import Body from './Body';
import Feature from './Feature';
import Near from './Near';
import Last from './Last';

const Navbar = () => {
  return (
    <>
      <div>
     <div

className="vh-100 vw-100 d-flex flex-column justify-content-between"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${L})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  }}
>
  {/* ...existing code... */}

        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-4 pt-3">
          <div className="container-fluid">
            <a className="navbar-brand text-success fw-bold" href="#">logo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav gap-4">
                <li className="nav-item"><a className="nav-link" href="#body" >Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
                <li className="nav-item"><a className="nav-link" href="#feature">Restaurants</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="d-flex gap-3 mt-3">
               <Link to="/Get"> <button className="btn btn-success">Get Started</button></Link>
              
              </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="container px-4 mb-5">
          <div className="row">
            <div className="col-md-8  bg-dark bg-opacity-50 p-5 rounded">
              <h1 className="display-5 fw-bold">Craving Your Favorite Food?</h1>
              <h2 className="h1">Get It Delivered Fast</h2>
              <p className="mt-3">
                Order from top restaurants near you and have it delivered to your doorstep in minutes!<br />
                Restaurants & riders, sign up and start earning today.
              </p>
              <div className="d-flex gap-3 mt-3">
               <Link to="/Get"> <button className="btn btn-success">Get Started</button> </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

<section id="bodyy" >
   <Body />
</section>
<section id="feature">
      <Feature />
</section>
      <div className='container-fluid p-5'>
        <Near />
      </div>
      <Last />
    </>
  )
}

export default Navbar
