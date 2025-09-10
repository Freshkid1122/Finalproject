import { Route, Routes } from "react-router-dom"

import Landingpage from "../pages/Landingpage"
import Get from "../pages/Get"
import SignupforBuyer from "../pages/SignupforBuyer"
import SignupResurant from "../pages/SignupResurant"
import SignupforRiders from "../pages/SignupforRiders"
import Signin from "../pages/Signin"
import SigninforBuyer from "../pages/SigninforBuyer"
import SigninforRestaurant from "../pages/SigninforRestaurant"
import SigninforRider from "../pages/SigninforRider"
import Dashboard from "../pages/Dashboard"
import BuyerDashboard from "../pages/BuyerDashboard"
import RiderDashboard from "../pages/RiderDashboard"
import RestaurantLanding from "../pages/RestaurantLanding"
import Detail from "../pages/Detail"
import AddChart from "../pages/Addchart"







function App() {

  return (
    <>  
      <Routes> 
        <Route path="/" element={<Landingpage />} />
        <Route path="/Get" element={<Get />} />
        <Route path="/signup" element={<SignupforBuyer/>} />
        <Route path="/resturant" element={<SignupResurant/>} />
        <Route path="/Riders" element={<SignupforRiders/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signin/buyer" element={<SigninforBuyer/>} />
        <Route path="/signin/restaurant" element={<SigninforRestaurant/>} />
        <Route path="/signin/rider" element={<SigninforRider/>} />
        <Route path="/resturant/dashboard" element={<Dashboard/>} />
        <Route path="/buyer-dashboard" element={<BuyerDashboard/>} />
        <Route path="/rider-dashboard" element={<RiderDashboard/>} />
        <Route path="/restaurant/:restaurantId" element={<RestaurantLanding/>} />
        <Route path="/detail/:id" element={< Detail/>} />
         <Route path="/Addchart/:id" element={< AddChart/>} />
      
      </Routes>


    </>
  )
}

export default App
