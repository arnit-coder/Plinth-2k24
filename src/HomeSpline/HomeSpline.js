// Rocket.js

import React, { useRef, useEffect } from 'react';
import './Rocket.css'; // Import your CSS file for rocket styles
import Spline from '@splinetool/react-spline';
// import Countdown from '../components/countdown';
import "../home/home.css";
import Countdown from "../home/countdown";
const HomeSpline = () => {
//   const rocketRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY || window.pageYOffset;
//       const rocket = rocketRef.current;

//       // Move the rocket from bottom to top based on scroll amount
//       rocket.style.bottom = `${scrollY}px`;
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

  return (
    <div className='main'>
        <div className='splinemodel' >
        <Spline className='splines' scene="https://prod.spline.design/T0phBXpG8D8N7k4p/scene.splinecode" />
    </div>
    <div className='heading'>
        <img className='image' src="https://s3-alpha-sig.figma.com/img/658b/6d96/71f4945821d5cf9ce73e341733318574?Expires=1704672000&Signature=cUhs-gADlON5hoayFsqevPNNQiDuzAeo6EmZ4MEcJfXDArg-gHAQ9FBv1LO~gGzr6gZEa7qqn6UfGRBl8XRtrrhulYcuL~18JOsnJ2~wr4FCMS7Q3lISHf6Ya3f1VOLQy3Lxe3b~Z4jS9FJAMNGXePS8H1D6rOKY6maKFTxM8UkgaYp452mG87B4d72AM3UXYx6ydkti6L2th2NEVgNEGM7wEiO9EWsn1iO-iWIgmWmrwffWItqJIlymp5lDnYnvG-acCIyZtEbzwxTH2ZtV05F2Wtb68cSt2cvPt-um4OvMbdECPj16mZlSgBC3UNKfrUlqwQiMKm2jkhvaBEyW8g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        <div className="btn-p"><div className="button-p"><button className="button-x"><a href='/competitions'>REGISTER</a></button></div></div>
      <div className="ctd-p"><div className="ctd"><Countdown /></div></div>
    </div>
    </div>
    


  );
};

export default HomeSpline;
