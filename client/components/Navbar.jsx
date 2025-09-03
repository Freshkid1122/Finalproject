import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div>
      <div
        className="vh-100 vw-100 d-flex flex-column justify-content-between"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://s3-alpha-sig.figma.com/img/f6ef/6a24/fa9a1ea339c755e7f6d8da6697d41a20?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PZCra9VFKwi26Ly2xpEOnh0BQg4yHE7UH7I8pdQYQf2Vsbm8sN8Pjf5miUVpWnA6FEsKNmgbxkumB68EpdqD34iJsp~umZxzJbU3xOaIyHWuPJ9XBJ~OA59sr5mfI8kV17Di~VG1lCmPS6eyihuOnTICuR4GMKTFyZtWNT3k3-YRXSogRGZZzXwjhkDRPx45IVm6tZmObVGL~DPMFrHle~YNZLCEfQ~AMSDaQ36sqLoOdhy76ZuTmYtA8-300asYYZFAFvOSA1iXqvMgwfRpICm5~Sawfqbk3WTc3Y79F8kN6F8KoK40S7ws~rjSbuv-3HQLPMqgPe0dr52-LZOWKw__")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          margin: 0,
          padding: 0,
          overflow: 'hidden',
        }}
      >
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-4 pt-3">
          <div className="container-fluid">
            <a className="navbar-brand text-success fw-bold" href="#">logo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav gap-4">
                <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Restaurants</a></li>
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
  
    </>
  )
}

export default Navbar
