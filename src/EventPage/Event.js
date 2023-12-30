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
import img2 from "./img2.png";
import img3 from "./img3.jpeg";

function Event() {
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
    <div id="events">
      <div className="main">
        <div className="page1">
          <img src={Image} alt="" />
          <h1>EVENTS</h1>
          <div className="bottom"></div>
        </div>
        <div className="page2">
          <h1>Pronites</h1>

          {/* First row of EventCards */}
          <div className="cards">
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

          {/* Second row of EventCards */}
          <div className="cards">
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
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    </div>
  );
}

export default Event;
