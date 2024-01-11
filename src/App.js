import "./App.css";
import Signup from "./components/Signup/Signup";

import AddEvent from "./admin/AddEvent";
import Admin from "./admin/AdminProfile";
import ViewEvents from "./admin/ViewEvents";
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Routes,
} from "react-router-dom";
// import Login from './features/login/Login'
 import Login from "./LoginUpdated/Mittal";
import Day2 from "./EventPage/Day2/Day2";
import { Toaster } from "react-hot-toast";
import ForgotPassword from "./features/login/ForgotPassword";
import UpdatePassword from "./features/login/UpdatePassword";
import VerifyEmail from "./verify/Verify";
import UserContextProvider from "./ContextApi/UserContextProvider";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Events from "./EventPage/Event";
import Competitions from "./Competitions/Competitions";
import LnmHacks from "./lnmhacks/LnmHacks";
import Team from "./Team/Team"
import { Home } from "./home/home";
import Preloader from "./Preloader/Preloader";
import AboutUs from "./aboutUs/AboutUs";
import Campus from "./CampusAmbassador/Campus";
import Accomodation from "./accomodation/accomodation";
import Explore from './Explore/Explore'
import Testing from "./Explore/Testing";
import MobileOTPForm from "./features/Verify";
import ChangePassVerify from './changePass/Verify'
import Merch from './merch/merch';
import React, { useState, useEffect } from 'react';
function App() {
    const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });
  
    const handleMouseMove = (e) => {
      setCursorPosition({ left: e.pageX, top: e.pageY });
    };
  
    useEffect(() => {
      const cursor = document.querySelector('.cursor');
      document.addEventListener('mousemove', handleMouseMove);
  
      
    }, []); 
  return (
    <>
    

<style>
  {`
    body {
      cursor: none;
      text-align: center;
      font-size: 16px;
      background: #222;
    }

    .cursor {
      position: absolute;
      z-index: 5000;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: #fff;
      transform: translate(-50%, -50%);
      transition: transform 0.2s ease;
      pointer-events: none;
      mix-blend-mode: difference;
    }

    body div:hover ~ .cursor {
      transform: scale(6);
      box-shadow: 0 0 10px #fff;
      color: #000;
    }
    h1:hover ~ .cursor {
      transform: scale(6);
      box-shadow: 0 0 10px #fff;
      color: #000;
    }
    p:hover ~ .cursor {
      transform: scale(6);
      box-shadow: 0 0 10px #fff;
      color: #000;
    }
  `}
</style>
        <UserContextProvider>
      <Toaster />

      <Preloader />
      <Routes>
        {/* <Route path="/" element={<Profile />} /> */}
     
        <Route path="/" element={<><Home /></>} />
        <Route path="/Day2" element={<Day2 />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/Admin" element={<Admin />} />
        <Route exact path="/Admin/AddEvent" element={<AddEvent />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:id" element={<UpdatePassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/events" element={<Events />} /> 
        <Route path="/competitions" element={<Competitions />} /> 
        <Route path="/campus-ambassador" element={<Campus />} /> 
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="/lnm-hacks" element={<LnmHacks />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/testExplore" element={<Testing />} />
        <Route path="/merch" element= {<Merch />} />
        {/* <Route path="/our-team" element={<OurTeam />} /> */}
        {/* <Route exact path="/Admin/ViewEvents" element={<ViewEvents />} />  */}
      </Routes>
      {/* <Header />  */}
    </UserContextProvider>
    <div className="cursor" style={{ left: cursorPosition.left, top: cursorPosition.top }}></div>
    </>
  );
}

export default App;
