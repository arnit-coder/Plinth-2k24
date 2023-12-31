// Event.js

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Image from "./bg.jpeg";
import EventCard from "./CompiCard";
import Cryptex from './Cryptex.png'
import iplauction from './ipl-auction.png'
import cd from './cd.png'
import cc from './cc.png'
import dhoomketu from './dhoomketu.png'
import astromemia from './astromemia.png'
import diyglider from './diyglider.jpg'
import monstertruck from './monstertruck.jpg'
import starprix from './starpix.png'
import foxhunt from './foxhunt.jpg'
import rcplane from './rcplane.jpg'
import lnmhacks from './lnmhacks.png'
import bridgethebarrier from './bridgethebarrier.jpg'
import mazesolver from './maze_solver.png'
import lnmtechexpo from './LNM TECH EXPO.jpg'
import motoboat from './Motoboat.png'
import robo from './ROBO (5).png'
import robocup from './Robo Cup.png'
import transporter from './Transporters (3).png'
import escaperoom from './escaperoom.jpg'

import rcdrone from './rcdrone.jpg'
import acethecase from './acethecase.png'
import brahmaand from './brahmaand.png'
import jobfair from './jobfair.png'
import whodunit from './whodunit.jpg'
import enigma from './enigma.png'

import iupc from './IPUC.png'
import mun from './mun.png'
import bandwagon from './bandwagon.png'
import "./compi.css";
import Header from "../Header/Header";
import Cube from "../Cube/Cube";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

// Import images for events
import img1 from "./img1.jpeg";
import img2 from "./img2.png";
import img3 from "./img3.jpeg";

function Competitions() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabSelect = (index) => {
    setTabIndex(index);
  };

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
  const cubeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
  };
  return (
    <div id="competitions">
      <div className="main">
        <div className="page1">
          {/* Top-left corner */}
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

      
          <h1 style={{ fontSize: "7.5vw" }}>COMPETITIONS</h1>
          {/* <div className="bottom"></div> */}
        </div>
        <div className="page2">
          <Tabs selectedIndex={tabIndex} onSelect={handleTabSelect}>
            <TabList className="custom-tab-list">
              <Tab>Quizzinga</Tab>
              <Tab>Cybros</Tab>
              <Tab>E-Cell</Tab>
              <Tab>DebSoc</Tab>
              <Tab>Astronomy</Tab>
              <Tab>Phoenix</Tab>
              <Tab>Cipher</Tab>
              <Tab>ASME LNMIIT</Tab>
              <Tab>SAE</Tab>
              <Tab>OC Events</Tab>
            </TabList>

            
            <TabPanel className="cards">
             
              <EventCard day="Quizzinga" artist="Cryptex" description="Cryptex is an online quiz competition with a format similar to a treasure hunt." image={Cryptex} />
              <EventCard day="Quizzinga" artist="IPL Auction" description="IPL Auction is a real-life simulation of the auction we witness before every IPL season." image={iplauction} />
              <EventCard day="Quizzinga" artist="Brandwagon" description="Brandwagon is Quizzinga's flagship business quiz every year during Plinth." image={bandwagon} />
              
            </TabPanel>

            <TabPanel className="cards">
              
              <EventCard day="Cybros" artist="CP DUELS" description="CP DUEL is an in-person 1v1 knockout tournament..." image={cd} />
              <EventCard day="Cybros" artist="Coding Cascade" description="In the Code Cascade event, a team comprising three participants collaborates to create a sequence of code." image={cc} />
              <EventCard day="Cybros" artist="IUPC" description="The contest will be ICPC style with a 10-minute penalty for each wrong submission and will follow the ICPC format." image={iupc} />
              <EventCard day="Cybros" artist="ENIGMA" description="This is Cybros' flagship-rated contest. It is a regular one-person competitive programming contest." image={enigma} />
             
            </TabPanel>

            <TabPanel className="cards">
             
              <EventCard
              day="E-Cell"
              artist="  Job Fair"
              description="Embark on a journey of boundless possibilities during our dynamic 2-day job fair, an unparalleled realm of professional excellence."
              image={jobfair}
            />
            <EventCard
              day="E-Cell"
              artist=" Virtual Stock Simulation"
              description="The virtual stock market simulation is a risk-free competition where participants are allocated a virtual sum of money to invest."
              image={img3}
            />
            <EventCard
              day="E-Cell"
              artist=" ACE THE CASE"
              description="AceTheCase is the ultimate case study competition where participating teams conduct a comprehensive analysis of an opted unicorn company. "
              image={acethecase}
            />
             
            </TabPanel>

            <TabPanel className="cards">
             
              <EventCard
              day="DebSoc"
              artist=" Model United Nations"
              description="At a MUN conference, delegates(students) will each represent a nation/organization to solve world problems by working with other delegates."
              image={mun}
            />
            <EventCard
              day="DebSoc"
              artist=" Graffiti wall"
              description="Graffiti walls give an opportunity to the viewers to put their thoughts via a sheet of paper or drawings on a blank canvas."
              image={img3}
            />
            <EventCard
              day="DebSoc"
              artist=" Change My Mind"
              description="You'll be presented with a random opinion to which you'll have to convince the chair with argumentation to adhere to your thoughts on the topic."
              image={img3}
            />
              
            </TabPanel>

            <TabPanel className="cards">
             
              <EventCard
              day=" Astronomy"
              artist="Odin's Eye"
              description="Odin’s Eye is an astronomy-themed treasure hunt; the faster you solve the mind boggling riddles, the closer you get to the finishing line."
              image={astromemia}
            />
            <EventCard
              day="Astronomy"
              artist=" Brahmaand
              "
              description="The Astronomy club presents a partial online event Brahmaand where teams will have to submit a well-researched and cited presentation based on their ideas.
              "
              image={brahmaand}
            />
            <EventCard
              day="Astronomy"
              artist=" Dhoomketu - Telescopic Sky Gazing"
              description="The events are designed in a way that there is something for everybody.
              "
              image={dhoomketu}
            />
            <EventCard
              day="Astronomy"
              artist="StarPix"
              description="It is an online event in which you have to send us photographs of the night sky you took yourself, coupled with your original and creative touch, which displays deep-sky objects, solar system objects, or an Astro-landscape."
              image={starprix}
            />
            <EventCard
              day="Astronomy"
              artist=" Astro Photography Workshop"
              description=""
              image={img3}
            />
            {/* <EventCard
              day="Astronomy"
              artist=" ISRO Scientist Talk"
              description=""
              image={img3}
            /> */}
             
            </TabPanel>

            <TabPanel className="cards">
              
              {/* <EventCard
              day="Phoenix"
              artist=" RoboWar"
              description="Robot Combat Competition where participants battle each other for the coveted Robowars Champion Title."
              image={robo}
            /> */}
            <EventCard
              day="Phoenix"
              artist=" Maze Solver"
              description="Teams must create an autonomous robot that can navigate a maze by following a black line and keeping track of directions."
              image={mazesolver}
            />
            <EventCard
              day="Phoenix"
              artist=" Robo Soccer"
              description="That means it will be a 2v2 match. Initially, both the bots of each team should be on their side of the half."
              image={robocup}
            />
            <EventCard
              day="Phoenix"
              artist=" Robo Race"
              description="Teams must create a manually operated bot that can move on difficult terrain and complete the designed track below-mentioned elements."
              image={robo}
            />
            <EventCard
              day="Phoenix"
              artist=" Transporter"
              description="Teams must create a manually operated bot that can perform simple tasks such as grasping objects and placing them in target zones to complete the course while avoiding the obstacles in its way."
              image={transporter}
            />
            <EventCard
              day="Phoenix"
              artist="  Boat Race"
              description="Design and build a manually controlled boat to sail through the obstacles in the arena and complete the race task before the other boat."
              image={motoboat}
            />
            <EventCard
              day="Phoenix"
              artist=" Tech Exhibition"
              description="The Exhibition event offers you an amazing opportunity to show off your ideas and innovations !! Stay tuned for more updates."
              image={lnmtechexpo}
            />
             
            </TabPanel>

            <TabPanel className="cards">
              
              <EventCard
              day="Cipher"
              artist=" LNM HACKS 6.0"
              description="LNMHacks 6.0 will be a 48-hour hackathon with a wide range of tracks."
              image={lnmhacks}
            />
             
            </TabPanel>

            <TabPanel className="cards">
             
              <EventCard
              day="ASME LNMIIT"
              artist=" Drone Race"
              description="Teams have to design and build a wireless remote-controlled flying platform to complete an obstacle course in minimum time without crashing."
              image={rcdrone}
            />
            <EventCard
              day="ASME LNMIIT"
              artist=" RC Plane"
              description="Build your RC Plane which is aerodynamically sound and within the specified dimensions to achieve a successful flight."
              image={rcplane}
            />
            <EventCard
              day="ASME LNMIIT"
              artist=" Spaghetti Tower"
              description="It's a fun event lasting up to 20 to 25 mins."
              image={img3}
            />
            <EventCard
              day="ASME LNMIIT"
              artist=" Bridge The Barrier"
              description="Bridge the Barrier is an exhilarating and intellectually stimulating event that challenges participants to unleash their creativity, engineering prowess, and teamwork skills"
              image={bridgethebarrier}
            />
            <EventCard
              day="ASME LNMIIT"
              artist=" MachinaMaze Challenge"
              description="Welcome to 'Re-Engineering,' where innovation meets the clock. In this high-energy challenge, teams decipher cryptic clues to piece together scattered machine parts within a tight timeframe."
              image={monstertruck}
            />
            
            <EventCard
              day="ASME LNMIIT"
              artist="Escape Room"
              description="Midnight Chronicles promises an unforgettable and discreet murder mystery adventure, challenging participants' detective skills and strategic thinking."
              image={escaperoom}
            />
             
             <EventCard
              day="ASME LNMIIT"
              artist="DIY Glider Challenge"
              description="The DIY Glider Challenge is an exhilarating and hands-on event that seamlessly blends creativity, engineering, and friendly competition."
              image={diyglider}
            />
            </TabPanel>

            <TabPanel className="cards">
            <EventCard
              day="ASME LNMIIT"
              artist="Fox Hunt"
              description="Embark on an electrifying adventure at our college-wide treasure hunt event!"
              image={foxhunt}
            />
            </TabPanel>

            <TabPanel className="cards">
            
              <EventCard
              day="OC Events"
              artist="  GoKarting"
              description="Go-karting is an adrenaline-pumping motorsport that offers a thrilling experience for participants of all ages."
              image={img3}
            />
            <EventCard
              day="OC Events"
              artist="Monopoly LNMIIT Edition"
              description="A fun version of monopoly which will help everyone to connect to LNMIIT's culture and college life."
              image={img3}
            />
            <EventCard
              day="OC Events"
              artist="Virtual Drive"
              description="A real time crime scene is created that needs to be observed by the participants and then solve the mystery lying ahead."
              image={img3}
            />
             <EventCard
              day="OC Events"
              artist="Who Dun It"
              description="A real time crime scene is created that needs to be observed by the participants and then solve the mystery lying ahead."
              image={whodunit}
            />
             
            </TabPanel>
          </Tabs>
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

export default Competitions;
