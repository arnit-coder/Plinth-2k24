import React from 'react'
import CampusCss from './Campus.module.css'
import amb from "./amb.jpeg";
import { useEffect, useMemo, useState } from "react";
import ParticleComponent from '../Particle/ParticleComponent';
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import Header1 from '../Header/Header'
const Campus = () => {
    
    return (
        <>
         <div className={CampusCss.Header1}>
            <Header1 />
        </div>
        <div className={CampusCss.main}>
            <div className={CampusCss.main} style={{position: 'relative', zIndex: '1', background: 'transparent'}}>
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
                  <a href="https://forms.gle/GUesUrZCZYAa9vhV8">REGISTER NOW</a>
                    
                </button>
            </div>
            </div>
            <ParticleComponent />
        </div>
        </>
    )
}

export default Campus