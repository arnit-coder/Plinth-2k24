// Your main component (e.g., Home.js)
import React, { useState } from 'react';
import Header from "../Header/Header";
import "./home.css";
import Countdown from "./countdown";
import HomeSpline from "../HomeSpline/HomeSpline";
import AboutUs from '../aboutUs/AboutUs';
import ArrowPic from './arrow.png'


export const Home = () => {
  const [showArrow, setShowArrow] = useState(false);

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleMouseEnter = () => {
    setShowArrow(true);
  };

  const handleMouseLeave = () => {
    setShowArrow(false);
  };

 

  return (
    <>
      <HomeSpline />
      <div className="home" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="countdown">
          {/* Your countdown and other components go here */}
        </div>
        <div className="scrollToAbout">
          {/* {showArrow && <NeonArrow  />} */}
         {/* <button className='arrow'>
          {/* <img src={ArrowPic} />
         </button> */}
        </div> 
      </div>
  
    </>
  );
};