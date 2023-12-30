import React from "react";
import "./Profile.css"
import Header from "../Header/Header";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

function Profile() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#00000",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );
  return (
      <div className="profile-main" id="Profile">
        <div className="profile-page1">
            <h1>PROFILE</h1>
        </div>
        <div className="profile-page2">
            <div className="profile-cards">
              <div className="profile-card">
                <h2>User Profile</h2>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Name</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Registered email</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Registered mobile</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>college</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Address</p>
                <p className="profile-input"></p>
              </div>
              <div className="profile-card">
              <h2>Accommodations.</h2>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Hostel</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Members</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Amount Paid</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>college</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Address</p>
                <p className="profile-input"></p>
              </div>
              <div className="profile-card">
              <h2>Team Members</h2>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px"}}>Team Captain</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Member 2</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Member 3</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Member 4</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Member 5</p>
                <p className="profile-input"></p>
              </div>
              <div className="profile-card">
              <h2>Events Registered</h2>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Event Name</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Event Day</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Event Timing</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Amount paid</p>
                <p className="profile-input">$12</p>


              </div>
            </div>
        </div>
        <Header /> 
        <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
      </div>
  );
}

export default Profile;
