import React from 'react'
import { Link } from 'react-router-dom';
import ricemade from '../src/assets/ricemade.png';

import { FaStar } from "react-icons/fa6";
import { PiBowlFoodLight } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdPricetags } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import './Navbar.css'
import './Near.css';


const Near = () => {
  return (
    <>
      <div className='body'>
        <div className='container'>
          <div className='row '>
            <h5>Popular Near You</h5>
            <div className='col-lg-3 col-md-4 col-sm-6 col-12 my-2'>
              <div>
                <div className="card cards " >
                  <div className=" py-5 position-relative">
                    {/* Green Oval */}
                    <div className="position-absolute top-50 start-50 translate-middle" style={{ width: "250px", height: "120px", backgroundColor: "green", borderRadius: "100px" }}>
                    </div>

                    {/* Food Image */}
                    <div className="position-relative text-center">
                      <img
                        src={ricemade}
                        alt="Delicious Food"
                        className="rounded-circle img-fluid"
                        style={{ width: "150px", height: "150px", objectFit: "cover", zIndex: 1 }}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Item7go</h5>
                    <FaLocationDot /> Isale General
                    <br />
                    <PiBowlFoodLight /> A plate of rice with Chicken
                    <br />
                    <IoMdPricetags /> #3,000
                    <p className='d-flex max-w-[50%] my-2 gap-2'>
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <span>4.9(203)</span>
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/#" className="btn btn-link text-decoration-none p-0 view">→ View Details</Link>
                      <button className="shopping border rounded">
                        <MdShoppingCart className='fs-5 text-white' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 col-12 my-2'>
              <div>
                <div className="card cards" >
                  <div className=" py-5 position-relative">
                    {/* Green Oval */}
                    <div className="position-absolute top-50 start-50 translate-middle" style={{ width: "250px", height: "120px", backgroundColor: "green", borderRadius: "100px" }}>
                    </div>

                    {/* Food Image */}
                    <div className="position-relative text-center">
                      <img
                        src={ricemade}
                        alt="Delicious Food"
                        className="rounded-circle img-fluid"
                        style={{ width: "150px", height: "150px", objectFit: "cover", zIndex: 1 }}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Item7go</h5>
                    <FaLocationDot /> Isale General
                    <br />
                    <PiBowlFoodLight /> A plate of rice with beef
                    <br />
                    <IoMdPricetags /> #2,000
                    <p className='d-flex max-w-[50%] my-2 gap-2'>
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <span>4.9(203)</span>
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <a href="#" className="btn btn-link text-decoration-none p-0">→ View Details</a>
                      <button className="shopping border rounded">
                        <MdShoppingCart className='fs-5 text-white' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 col-12 my-2'>
              <div>
                <div className="card cards" >
                  <div className=" py-5 position-relative">
                    {/* Green Oval */}
                    <div className="position-absolute top-50 start-50 translate-middle" style={{ width: "250px", height: "120px", backgroundColor: "green", borderRadius: "100px" }}>
                    </div>

                    {/* Food Image */}
                    <div className="position-relative text-center">
                      <img
                        src={ricemade}
                        alt="Delicious Food"
                        className="rounded-circle img-fluid"
                        style={{ width: "150px", height: "150px", objectFit: "cover", zIndex: 1 }}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Item7go</h5>
                    <FaLocationDot /> Isale General
                    <br />
                    <PiBowlFoodLight /> A plate of rice with croaker fish
                    <br />
                    <IoMdPricetags /> #3,800
                    <p className='d-flex max-w-[50%] my-2 gap-2'>
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <span>4.9(203)</span>
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <a href="#" className="btn btn-link text-decoration-none p-0">→ View Details</a>
                      <button className="shopping border rounded">
                        <MdShoppingCart className='fs-5 text-white' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 col-12 my-2'>
              <div>
                <div className="card cards" >
                  <div className=" py-5 position-relative">
                    {/* Green Oval */}
                    <div className="position-absolute top-50 start-50 translate-middle" style={{ width: "250px", height: "120px", backgroundColor: "green", borderRadius: "100px" }}>
                    </div>

                    {/* Food Image */}
                    <div className="position-relative text-center">
                      <img
                        src={ricemade}
                        alt="Delicious Food"
                        className="rounded-circle img-fluid"
                        style={{ width: "150px", height: "150px", objectFit: "cover", zIndex: 1 }}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Item7go</h5>
                    <FaLocationDot /> Isale General
                    <br />
                    <PiBowlFoodLight /> A plate of rice with fish
                    <br />
                    <IoMdPricetags /> #2,800
                    <p className='d-flex max-w-[50%] my-2 gap-2'>
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <span>4.9(203)</span>
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <a href="#" className="btn btn-link text-decoration-none p-0">→ View Details</a>
                      <button className="shopping border rounded">
                        <MdShoppingCart className='fs-5 text-white' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 col-12 my-2'>
              <div>
                <div className="card cards" >
                  <div className=" py-5 position-relative">
                    {/* Green Oval */}
                    <div className="position-absolute top-50 start-50 translate-middle" style={{ width: "250px", height: "120px", backgroundColor: "green", borderRadius: "100px" }}>
                    </div>

                    {/* Food Image */}
                    <div className="position-relative text-center">
                      <img
                        src={ricemade}
                        alt="Delicious Food"
                        className="rounded-circle img-fluid"
                        style={{ width: "150px", height: "150px", objectFit: "cover", zIndex: 1 }}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Item7go</h5>
                    <FaLocationDot /> Isale General
                    <br />
                    <PiBowlFoodLight /> Vanilla Yoghurt
                    <br />
                    <IoMdPricetags /> #2,200
                    <p className='d-flex max-w-[50%] my-2 gap-2'>
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <span>4.9(203)</span>
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <a href="#" className="btn btn-link text-decoration-none p-0">→ View Details</a>
                      <button className="shopping border rounded">
                        <MdShoppingCart className='fs-5 text-white' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 col-12 my-2'>
              <div>
                <div className="card cards" >
                  <div className=" py-5 position-relative">
                    {/* Green Oval */}
                    <div className="position-absolute top-50 start-50 translate-middle" style={{ width: "250px", height: "120px", backgroundColor: "green", borderRadius: "100px" }}>
                    </div>

                    {/* Food Image */}
                    <div className="position-relative text-center">
                      <img
                        src={ricemade}
                        alt="Delicious Food"
                        className="rounded-circle img-fluid"
                        style={{ width: "150px", height: "150px", objectFit: "cover", zIndex: 1 }}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Item7go</h5>
                    <FaLocationDot /> Isale General
                    <br />
                    <PiBowlFoodLight /> Vanilla Yoghurt
                    <br />
                    <IoMdPricetags /> #2,200
                    <p className='d-flex max-w-[50%] my-2 gap-2'>
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <span>4.9(203)</span>
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <a href="#" className="btn btn-link text-decoration-none p-0">→ View Details</a>
                      <button className="shopping border rounded">
                        <MdShoppingCart className='fs-5 text-white' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 col-12 my-2'>
              <div>
                <div className="card cards" >
                  <div className=" py-5 position-relative">
                    {/* Green Oval */}
                    <div className="position-absolute top-50 start-50 translate-middle" style={{ width: "250px", height: "120px", backgroundColor: "green", borderRadius: "100px" }}>
                    </div>

                    {/* Food Image */}
                    <div className="position-relative text-center">
                      <img
                        src={ricemade}
                        alt="Delicious Food"
                        className="rounded-circle img-fluid"
                        style={{ width: "150px", height: "150px", objectFit: "cover", zIndex: 1 }}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Item7go</h5>
                    <FaLocationDot /> Isale General
                    <br />
                    <PiBowlFoodLight /> Vanilla Yoghurt
                    <br />
                    <IoMdPricetags /> #2,200
                    <p className='d-flex max-w-[50%] my-2 gap-2'>
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <span>4.9(203)</span>
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <a href="#" className="btn btn-link text-decoration-none p-0">→ View Details</a>
                      <button className="shopping border rounded">
                        <MdShoppingCart className='fs-5 text-white' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 col-12 my-2'>
              <div>
                <div className="card cards" >
                  <div className=" py-5 position-relative">
                    {/* Green Oval */}
                    <div className="position-absolute top-50 start-50 translate-middle" style={{ width: "250px", height: "120px", backgroundColor: "green", borderRadius: "100px" }}>
                    </div>

                    {/* Food Image */}
                    <div className="position-relative text-center">
                      <img
                        src={ricemade}
                        alt="Delicious Food"
                        className="rounded-circle img-fluid"
                        style={{ width: "150px", height: "150px", objectFit: "cover", zIndex: 1 }}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Item7go</h5>
                    <FaLocationDot /> Isale General
                    <br />
                    <PiBowlFoodLight /> Vanilla Yoghurt
                    <br />
                    <IoMdPricetags /> #2,200
                    <p className='d-flex max-w-[50%] my-2 gap-2'>
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <FaStar className='fs-5 text-warning' />
                      <span>4.9(203)</span>
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <a href="#" className="btn btn-link text-decoration-none p-0">→ View Details</a>
                      <button className="shopping border rounded">
                        <MdShoppingCart className='fs-5 text-white' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Near
