// Event.js
import React from "react";
import Image from "./bg.jpeg";
import EventCard from "./EventCard"; // Import EventCard component
import "./Event.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Day2 from "./Day2/Day2";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import img1 from "./img1.jpeg";
import Cube from '../Cube/Cube'
import img2 from "./img2.png";
import img3 from "./img3.jpeg";
import ParticleComponent from "../Particle/ParticleComponent";

function Event() {
  
  const cubeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
  };
  return (
    <div id="events">
      <div className="main">
        <div className="epg">
        <div style={{ ...cubeStyle, top: '15%', left: '10%', zIndex: '1' }}>
        <Cube size="50px" color="red" />
      </div>

      {/* Top-right corner */}
      <div className="mobv c2" style={{ ...cubeStyle, top: '15%', right: '10%', left: 'auto', zIndex: '1' }}>
        <Cube size="50px" color="green" />
      </div>

      {/* Bottom-left corner */}
      <div className="mobv c3" style={{ ...cubeStyle, bottom: '15%', left: '40%', top: 'auto', zIndex: '1' }}>
        <Cube size="50px" color="blue" />
      </div>
          {/* <img src={Image} alt="" /> */}
          <h1>EVENTS</h1>
          <div className="bottom"></div>
        </div>
        <div className="epg2">
          <h1>Pronites</h1>

          {/* First row of Eventecard */}
          <div  className="proh">
          <div className="ecard">
            <Link to="/Day2">
              <EventCard
                day="DAY 1"
                artist="RHYTM DIVINE"
                description="RHYTM DIVINE's captivating performance on the plinth mesmerized the crowd with its infectious beats, creating a rhythmic, unforgettable experience."
                image={img1}
              />
            </Link>
            <Link to="/Day2">
              <EventCard
                day="DAY 2"
                artist="MOHD. IRFAN"
                description="Mohammed Irfan's Plinth performance wowed the audience with his enchanting voice and stage charisma, leaving a lasting impression."
                image={img2}
              />
            </Link>
            {/* Add more EventCard components for the first row */}
          </div>

          {/* Second row of Eventecard */}
          <div className="ecard">
            <Link to="/Day2">
              <EventCard
                day="DAY 2"
                artist="STEBIN BEN"
                description="Stebin Ben electrified the crowd at Plinth, a fest, with his mesmerizing performance. His soulful voice and stage presence left the audience in awe, creating unforgettable memories."
                image={img3}
              />
            </Link>
            <Link to="/Day2">
              <EventCard
                day="DAY 1"
                artist="RHYTM DIVINE"
                description="RHYTM DIVINE's captivating performance on the plinth mesmerized the crowd with its infectious beats, creating a rhythmic, unforgettable experience."
                image={img1}
              />
            </Link>
            {/* Add more EventCard components for the second row */}
          </div>
          </div>
        </div>
      </div>
      <ParticleComponent />
    </div>
  );
}

export default Event;
