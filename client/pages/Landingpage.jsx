import React from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import Feature from '../components/Feature'
import Near from '../components/Near'
import Last from '../components/Last'



const Landingpage = () => {
  return (
    <>
      <Navbar />
      <Body />
      <Feature />
      <div className='container-fluid p-5'>
        <Near />
      </div>
      <Last />
    </>
  )
}

export default Landingpage
