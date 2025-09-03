import React from 'react'
// import sampleImage from '../src/assets/frame.png';
import shawa from '../src/assets/shawa.png';
import richc from '../src/assets/richc.png';
import beef from '../src/assets/beef.png';
import friedf from '../src/assets/friedf.png';
import youn from '../src/assets/youn.png';
import ricef from '../src/assets/ricef.png';
import { FaStar } from "react-icons/fa6";
import { PiBowlFoodLight } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdPricetags } from "react-icons/io";
import './Navbar.css'


const Feature = () => {
  return (
    <>
      <div className='body'>
        <div className='container'>
          <div className='row '>
            <div className='col-md-4 col-6 my-2'>
              <div>
                <div className="card" >
                  <img src={richc} class="card-img-top" alt="..." />
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
                    <a href="#" className="btn btn-success">View Details</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-6 my-2'>
              <div>
                <div className="card" >
                  <img src={beef} class="card-img-top" alt="..." />
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
                    <a href="#" className="btn btn-success">View Details</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-6 my-2'>
              <div>
                <div className="card" >
                  <img src={friedf} class="card-img-top" alt="..." />
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
                    <a href="#" className="btn btn-success">View Details</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-6 my-2'>
              <div>
                <div className="card" >
                  <img src={ricef} class="card-img-top" alt="..." />
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
                    <a href="#" className="btn btn-success">View Details</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-6 my-2'>
              <div>
                <div className="card" >
                  <img src={youn} class="card-img-top" alt="..." />
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
                    <a href="#" className="btn btn-success">View Details</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-6 my-2'>
              <div>
                <div className="card" >
                  <img src={shawa} class="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Item7go</h5>
                    <FaLocationDot /> Isale General
                    <br />
                    <PiBowlFoodLight /> Chicken shawarma
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
                    <a href="#" className="btn btn-success">View Details</a>
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

export default Feature