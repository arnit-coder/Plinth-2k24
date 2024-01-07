import React from "react";
import image from "../lnmhacksassets/Plinth Website Poster.png"
import HackCSS from './LnmHacks.module.css'
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim";
import ParticleComponent from "../Particle/ParticleComponent";
import Header1 from "../Header/Header";

function LnmHacks() {

  return (
    <>
     <div className={HackCSS.Header1}>
    <Header1 />
    </div>
    <div className={HackCSS.main}>
      <div className={HackCSS.benefits}>
        <div className={HackCSS.data}>
          <div className={HackCSS.headingDiv}>
            <h1>LNM HACKS</h1>
          </div>
          <p className={HackCSS.dataHeader}>LNMHacks 6.0 will be a 48-hour hackathon with a wide range of tracks. People can experiment with their knowledge in many fields like Al/ML, Healthcare, etc. as well. LNMHacks expects the participation of innovators and developers from all over the nation. Some of the tracks mentioned above will have dedicated problem statements and prizes.
            <br></br>
            All the participants will be required to create a working application to showcase their solution to the problem.
            <br></br><br></br>
            HacksCTF - a part of LNMhacks 6.0 - is a 12 hours beginner level CTF from 19 Jan (10pm) to 20 Jan 2024(10am). Incorporating a wide domain for challenges, it is the first one to be hosted by LNMIIT.
          </p>
        </div>
        <div className="ff">
          <div className="f">
            <img className={HackCSS.image} src={image} alt="" />
            <div className={HackCSS.buttonDiv}>
              <button className={HackCSS.button}>
                <a  className={HackCSS.a}href="https://lnmhacks.tech/">OUR WEBSITE</a>

              </button>
            </div>
          </div>
        </div>
      </div>

      <ParticleComponent />
    </div>
    </>
  );
}

export default LnmHacks;
