import React from 'react'
import CampusCss from './Campus.module.css'
import amb from "./amb.jpeg";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
const Campus = () => {
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
        <div className={CampusCss.main}>
            <div className={CampusCss.headingDiv}>
                <h1>CAMPUS AMBASSADOR PROGRAM</h1>
            </div>
            <div className={CampusCss.description1}>
                <p>Plinth 2024 is approaching, and the Campus Ambassador Program is seeking passionate individuals to join. The program encourages students from various fields to register for the festival through a dedicated Google form. The more registrations,  greater the rewards. For 10+ registrations, free entry to the festival, unrestricted access to pronites, and a swag bag with goodies is provided. A letter of recommendation from LNMIIT acknowledges your contribution. For 15+ registrations, all benefits are included, along with complimentary accommodation for the duration of the festival.</p>
            </div>
            <div className={CampusCss.benefits}>
                <div className={CampusCss.data}>
                    <h3 className={CampusCss.benefitsHeading}>Benefits.</h3>
                    <ul className={CampusCss.ul}>
                        <li>
                            <p className={CampusCss.dataHeader}>For 10+ registrations, participants receive free entry to the festival, unrestricted access to pronites, and a swag bag with goodies. Additionally, a letter of recommendation from LNMIIT acknowledges their contribution.</p>
                        </li>
                        <li>
                            <p className={CampusCss.dataHeader}>For 15+ registrations, all aforementioned benefits are included, along with complimentary accommodation for the festival's duration.</p>
                        </li>
                    </ul>
                </div>
                <div>
                  <img className={CampusCss.image} src={amb} alt="" />
                </div>
            </div>
            <div className={CampusCss.buttonDiv}>
                <button className={CampusCss.button}>
                    REGISTER NOW
                </button>
            </div>
            <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
        </div>

    )
}

export default Campus