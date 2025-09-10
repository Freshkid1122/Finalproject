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
            <a className="navbar-brand text-success fw-bold fs-1" href="#">logo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav gap-4">
                <li className="nav-item"><a className="nav-link text-white" href="#body" >Home</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#">About Us</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#feature">Restaurants</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="d-flex gap-3 mt-3">
               <Link to="/Get"> <button className="btn btn-success p-3 px-5">Get Started</button></Link>
              
              </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="container-fluid px-4 mb-5" style={{position:'relative', bottom:'50px'}}>
          <div className="row pt-5">
            <div className="col-md-8 bg-dark  bg-opacity-50 p-5 rounded" style={{height:'50vh'}}>
              <h1 className="display-5 fw-bold"style={{fontSize:'70px'}}>Craving Your Favorite Food?</h1>
              <h2 className="h1" style={{fontSize:'50px'}}>Get It Delivered Fast</h2>
              <p className="mt-3"style={{fontSize:'20px'}}>
                Order from top restaurants near you and have it delivered to your doorstep in minutes!<br />
                Restaurants & riders, sign up and start earning today.
              </p>
              <div className="d-flex gap-3 mt-5">
               <Link to="/Get"> <button className="btn btn-success px-5 p-3">Get Started</button> </Link>
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
