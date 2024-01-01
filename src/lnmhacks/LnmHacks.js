import React from "react";
import image from "../lnmhacksassets/Plinth Website Poster.png"
import HackCSS from './LnmHacks.module.css'
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim";
import ParticleComponent from "../Particle/ParticleComponent";
function LnmHacks() {
  
  return (
    <div className={HackCSS.main}>
            <div className={HackCSS.benefits}>
                <div className={HackCSS.data}>
                <div className={HackCSS.headingDiv}>
                <h1>LNM HACKS</h1>
            </div>
            <p className={HackCSS.dataHeader}>LNMIIT is hosting its 6th annual flagship hackathon, LNM-hacks 6.0, a 72-hour event focusing on blockchain and the web3 ecosystem. The event offers multiple tracks for hackers to build solutions to industry problems. Winning teams receive prizes, mentorship, and incubation opportunities. Participants can showcase their skills to potential employers and investors. Bounties on coding various optimum solutions will be presented to winners. The event will take place from January 19-21, 2024</p>
                </div>
                <div className="ff">
                <div className="f">
                  <img className={HackCSS.image} src={image} alt="" />
                  <div className={HackCSS.buttonDiv}>
                <button className={HackCSS.button}>
                  <a href="https://lnmhacks.xyz/">OUR WEBSITE</a>
                    
                </button>
            </div>
                </div>
                </div>
            </div>
            
            <ParticleComponent />
        </div>

  );
}

export default LnmHacks;
