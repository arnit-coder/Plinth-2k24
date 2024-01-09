// Event.js

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Image from "./bg.jpeg";
import EventCard from "./CompiCard";
import Cryptex from './Cryptex.png'
import iplauction from './ipl-auction.png'
import cd from './cd.png'
import cc from './cc.png'
import  qplauctionrulebool from './qplauctionrulebool.pdf'
import dhoomketu from './dhoomketu.png'
import astromemia from './astromemia.png'
import graffitiwall from './graffitiwall.png'
import odineye from './odineye.jpg'
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
import changemymind from './changemymind.png'
import rcdrone from './rcdrone.jpg'
import acethecase from './acethecase.png'
import brahmaand from './brahmaand.png'
import jobfair from './jobfair.png'
import whodunit from './whodunit.jpg'
import enigma from './enigma.png'

import iupc from './IPUC.png'
import mun from './mun.png'
import bandwagon from './bandwagon.png'
import sphagetti from './sphagetti.jpg'
import "./compi.css";
import Header from "../Header/Header";
import Cube from "../Cube/Cube";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import ParticleComponent from "../Particle/ParticleComponent";
// Import images for events
import img1 from "./img1.jpeg";
import img2 from "./img2.png";
import img3 from "./img3.jpeg";
import Header1 from "../Header/Header";
function Competitions() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabSelect = (index) => {
    setTabIndex(index);
  };




  const cubeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
  };
  return (
    <>
    <div className="Header1">
    <Header1 />
    </div>
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
              {/* <Tab>OC Events</Tab> */}
            </TabList>


            <TabPanel className="cards">

              <EventCard day="Quizzinga" artist="Cryptex" description="Cryptex is an online quiz competition with a format similar to a treasure hunt." image={Cryptex} googleform='https://cryptexlnm.xyz/' badaDescription='Cryptex is an online quiz competition with a format similar to a treasure hunt. Each participant has to register individually and go through all the levels before being crowned as the winner. The questions will be diverse and will include all forms of genres. Questions will be posted on Plinth website, and hints will be posted on the Instagram stories of @quizzingalnm.'
              rulebook=''
              pricepool='10k' />

              <EventCard day="Quizzinga" artist="IPL Auction" description="IPL Auction is a real-life simulation of the auction we witness before every IPL season." image={iplauction} googleform='https://docs.google.com/forms/d/e/1FAIpQLSdYmdHgw1PExdT-Ib-z8S8TIEHAZ6ggkUNBcT59TkCVJIMysA/viewform'
                badaDescription='IPL Auction is a real-life simulation of the auction we witness before every IPL season.
              It will be held in two rounds. The first Round will be a cricket quiz, and the second Round will be an auction between the shortlisted teams based on their first-round scores. The aim will be to maximize the rating given a fixed purse.
              '
              rulebook=''
              pricepool='20k'
              />
              <EventCard day="Quizzinga" artist="Brandwagon" description="Brandwagon is Quizzinga's flagship business quiz every year during Plinth." image={bandwagon} googleform='https://docs.google.com/forms/d/e/1FAIpQLSctSLKW5Tael5xNppcg_c0PXVvmlHFEkEwIjvHxUW145YXy1g/viewform'
              badaDescription='Brandwagon is Quizzinga flagship business quiz every year during Plinth. It will be held in two rounds. First is the written Round, and the six highest-scoring teams will move on to the finals. '
              rulebook=''
              pricepool='15k' />

            </TabPanel>

            <TabPanel className="cards">

              <EventCard day="Cybros" artist="CP DUELS" description="CP DUEL is an in-person 1v1 knockout tournament..." image={cd} url='duels'
              badaDescription='CP DUEL is an in-person 1v1 knockout tournament. As the meaning of "duel" suggests, this will be a "coding combat" between 2 individuals, i.e. both the participants will be given the same problem and the first person to solve it wins. There will be M problems of varying difficulty levels and M winners for each problem. Participants will be given a problem based on their CF Rating. Each duel will have a fixed time. '
              googleform='https://forms.gle/b1fjboEh5gY5C6pQ6'
              rulebook=''
              pricepool='2k' />

              <EventCard day="Cybros" artist="Coding Cascade" description="In the Code Cascade event, a team comprising three participants collaborates to create a sequence of code." image={cc} url='codingCascade' 
              badaDescription='In the Code Cascade event, a team comprising three participants collaborates to create a sequence of code. Each team member contributes by writing one code. The process starts with an initial input given to the first code, producing an output that becomes the input for the code written by the second team member. The output from the second code then serves as the input for the code written by the third team member.
              Points will be distributed accordingly. ( For points to be awarded for the third code, first and second have to be correct to achieve the correct input for the third code)'
              googleform='https://docs.google.com/forms/d/e/1FAIpQLSfUv91pdJatubRPdjTHuw0b7dyUb2A994YMJB_HAVyDRtX9zA/viewform'
              rulebook=''
              pricepool='2k'/>

              <EventCard day="Cybros" artist="IUPC" description="The contest will be ICPC style with a 10-minute penalty for each wrong submission and will follow the ICPC format." image={iupc} url='iupc'
              badaDescription='This is an on-site "teams-only" contest. The contest will be ICPC style with a 10-minute penalty for each wrong submission and will follow the ICPC format. The preferable number of people in a team is 3. '
              googleform='https://forms.gle/brXLUoKantiJxKV46'
              rulebook=''
              pricepool='18k' />

              <EventCard day="Cybros" artist="ENIGMA" description="This is Cybros' flagship-rated contest. It is a regular one-person competitive programming contest." image={enigma} url='enigma'
              badaDescription='This is Cybros flagship-rated contest. It is a regular one-person competitive programming contest. It has been hosted on reputable competitive programming websites like Codechef and Codeforces in the previous editions of Plinth. Enigma online was also rated CF round #840 on the biggest competitive programming platforms ' 
              googleform='https://forms.gle/zqemTiwv4MHxrBpJA'
              rulebook=''
              pricepool='20k'/>

            </TabPanel>

            <TabPanel className="cards">

              <EventCard
                day="E-Cell"
                artist="Sparx"
                description="Embark on a journey of boundless possibilities during our dynamic 2-day job fair, an unparalleled realm of professional excellence."
                image={jobfair}
                url='jobFair'
                badaDescription='Embark on a journey of boundless possibilities during our dynamic 2-day job fair, an unparalleled realm of professional excellence. This event seamlessly merges expertise, networking, and opportunities to ignite your career trajectory'
                googleform='https://docs.google.com/forms/d/e/1FAIpQLSdyVeKgytHPD3VtR8rU-FFrG6IuVnlZ86aUcMML2OFoTmwECQ/viewform'
                rulebook=''
              pricepool='None'
              />
              <EventCard
                day="E-Cell"
                artist=" Virtual Stock Simulation"
                description="The virtual stock market simulation is a risk-free competition where participants are allocated a virtual sum of money to invest."
                image={img3}
                url='virtual'
                badaDescription='The virtual stock market simulation is a risk-free competition where participants are allocated a virtual sum of money to invest. The virtual market encompasses numerous companies spanning various sectors and chance to win prize money while enhancing financial literacy.'
                googleform=''
                rulebook=''
              pricepool='None'
              />
              <EventCard
                day="E-Cell"
                artist=" ACE THE CASE"
                description="AceTheCase is the ultimate case study competition where participating teams conduct a comprehensive analysis of an opted unicorn company. "
                image={acethecase}
                url='ace'
                badaDescription=' AceTheCase is the ultimate case study competition where participating teams conduct a comprehensive analysis of an opted unicorn company. The teams dive deep into various aspects of the selected company, including its overarching vision, the leadership of the founders, revenue-generating methodologies, and intricate market strategies.'
                googleform=''
                rulebook=''
              pricepool='None'
              />

            </TabPanel>

            <TabPanel className="cards">

              <EventCard
                day="DebSoc"
                artist=" Model United Nations"
                description="At a MUN conference, delegates(students) will each represent a nation/organization to solve world problems by working with other delegates."
                image={mun}
                url='mun'
                badaDescription='At a MUN conference, delegates(students) will each represent a nation/organisation to solve world problems by working with other delegates. The event will be two days long and will have UNGA, AIPPM and UNSC as the committees. The chair or executive board will decide the conference outcome with rewards for the best delegation, delegates etc. '
                googleform='https://docs.google.com/forms/d/1-LCZo3x8KoWamg1WQ3se3ZuOnM1g92Wg5JbsXM0Uzh4'
                rulebook=''
              pricepool='55k'
              />
              <EventCard
                day="DebSoc"
                artist=" Graffiti wall"
                description="Graffiti walls give an opportunity to the viewers to put their thoughts via a sheet of paper or drawings on a blank canvas."
                image={graffitiwall}
                badaDescription='Graffiti walls gives an opportunity to the viewers to put their thoughts via a sheet of paper or drawings on a blank canvas. The topics for the same will be put up beforehand and will be a showcase of imagination and creative skills.'
                googleform=''
                rulebook=''
              pricepool='None'
              />
              <EventCard
                day="DebSoc"
                artist=" Change My Mind"
                description="You'll be presented with a random opinion to which you'll have to convince the chair with argumentation to adhere to your thoughts on the topic."
                image={changemymind}
                badaDescription='Change my mind does precisely what the name suggests. You will be presented with a random opinion to which you will have to convince the chair with argumentation to adhere to your thoughts on the topic.'
                googleform=''
                rulebook=''
              pricepool='None'
              />

            </TabPanel>

            <TabPanel className="cards">

              <EventCard
                day=" Astronomy"
                artist="Odin's Eye"
                description="Odin’s Eye is an astronomy-themed treasure hunt; the faster you solve the mind boggling riddles, the closer you get to the finishing line."
                image={odineye}
                url='odinsEye'
                badaDescription='Odin’s Eye is an astronomy-themed treasure hunt; the faster you solve the mind boggling riddles, the closer you get to the finishing line. Participants can register themselves in a team of 5-8 players. So, be ready, power-packed with your energy to be the first one to find the treasure. Exciting prizes await the winners. '
                googleform='https://docs.google.com/forms/d/e/1FAIpQLScmr_gNULSZ_6NusNiG5V8SaLK5PMU2WNxU6DrJMKjR6PT2nA/viewform'
                rulebook=''
              pricepool='None'
              />
              <EventCard
                day="Astronomy"
                artist=" Brahmaand"
                description="The Astronomy club presents a partial online event Brahmaand where teams will have to submit a well-researched and cited presentation based on their ideas."
                image={brahmaand}
                url='Brahmaand'
                badaDescription='Have you ever wondered if life exists outside our earth? Yes, right? How would you prepare to visit any other celestial body if you ever get a chance to see it? What things would you keep in mind? Plan it Out. To make you ponder on all of these things, The Astronomy club presents a partial online event Brahmaand where teams will have to submit a well-researched and cited presentation based on their ideas. The top entries will be nominated to present their research in front of our Panel of Experts on campus.'
                googleform='https://docs.google.com/forms/d/e/1FAIpQLScKluATuUXWlliWgZ4jL1Y_W8h_kQWM5CSpNhkSNjaziLu3Bg/viewform'
                rulebook=''
              pricepool='None'
              />
              <EventCard
                day="Astronomy"
                artist=" Dhoomketu - Telescopic Sky Gazing"
                description="The events are designed in a way that there is something for everybody."
                image={dhoomketu}
                url='dhoomketu'
                badaDescription='Can you relax and take a break from the everyday hustle? The Astronomy club brings you the Sky gazing session with many short and exciting events planned, such as telescope handling, discussions on greek-mythology, astrophysics and a lot more. The events are designed in a way that there is something for everybody. Also, on winning an event, you might get some exciting gifts.'
                googleform=''
                rulebook=''
              pricepool='None'
              />
              <EventCard
                day="Astronomy"
                artist="StarPix"
                description="It is an online event in which you have to send us photographs of the night sky you took yourself, coupled with your original and creative touch, which displays deep-sky objects, solar system objects, or an Astro-landscape."
                image={starprix}
                url='starpix'
                badaDescription='It is an online event in which you have to send us photographs of the night sky you took yourself, coupled with your original and creative touch, which displays deep-sky objects, solar system objects, or an Astro-landscape. The competitor who receives the most audience likes and the judges votes wins Astro-merchandise and exciting presents. '
                googleform='https://docs.google.com/forms/d/e/1FAIpQLSfKE2cQ4u6P_8m31f60Z5UXTVWmtcamdOTK3rg18aLP2118FQ/viewform'
                rulebook=''
              pricepool='None'
              />
              {/* <EventCard
                day="Astronomy"
                artist=" Astro Photography Workshop"
                description=""
                image={img3}
                url='astrophoto'
              /> */}
              {/* <EventCard
              day="Astronomy"
              artist=" ISRO Scientist Talk"
              description=""
              image={img3}
            /> */}

            </TabPanel>

            <TabPanel className="cards">

              
              <EventCard
                day="Phoenix"
                artist=" Maze Solver"
                description="Teams must create an autonomous robot that can navigate a maze by following a black line and keeping track of directions."
                image={mazesolver}
                url='mazesolver'
                badaDescription='Teams must create an autonomous robot that can navigate a maze by following a black line and keeping track of directions. The bot must navigate the maze from starting point to the ending point in the shortest amount of time while analyzing the course during the dry run.'
                googleform='https://forms.gle/yyeGhGibgkSSW3fy7'
                rulebook=''
              pricepool='10k'
              />
              <EventCard
                day="Phoenix"
                artist=" Robo Soccer"
                description="That means it will be a 2v2 match. Initially, both the bots of each team should be on their side of the half."
                image={robocup}
                url='robosoccer'
                badaDescription='Each team will consist of 2 bots. That means it will be a 2v2 match. Initially, both the bots of each team should be on their side of the half. Each half will be 4.5 mins, i.e. the period of the complete match will be 9 mins. The motive of both teams will be to score the goal against the opponent without getting any penalty and without damaging the opponents bot. '
                googleform='https://forms.gle/7kaxPFqQXySdZpSXA'
                rulebook=''
              pricepool='25k'
              />
              <EventCard
                day="Phoenix"
                artist=" Robo Race"
                description="Teams must create a manually operated bot that can move on difficult terrain and complete the designed track below-mentioned elements."
                image={robo}
                url='roborace'
                badaDescription='Teams must create a manually operated bot that can move on difficult terrain and complete the designed track below-mentioned elements.'
                googleform='https://forms.gle/wmaWZd19WxJmNLtr6'
                rulebook=''
              pricepool='20k'
              />
              <EventCard
                day="Phoenix"
                artist=" Transporter"
                description="Teams must create a manually operated bot that can perform simple tasks such as grasping objects and placing them in target zones to complete the course while avoiding the obstacles in its way."
                image={transporter}
                url='transporter'
                badaDescription='Teams must create a manually operated bot that can perform simple tasks such as grasping objects and placing them in target zones to complete the course while avoiding the obstacles in its way. The terrain will be mostly flat, with random zig-zag pathways mostly to judge maneuver abilities. There will be a few speed breakers and obstacles that need to be avoided.'
                googleform='https://forms.gle/QvyKE47Q5d42TjJM8'
                rulebook=''
              pricepool='20k'
              />
              <EventCard
                day="Phoenix"
                artist="  Boat Race"
                description="Design and build a manually controlled boat to sail through the obstacles in the arena and complete the race task before the other boat."
                image={motoboat}
                url='boatRace'
                badaDescription='Design and build a manually controlled boat to sail through the obstacles in the arena and complete the race task before the other boat. The boat should compulsorily be wireless and powered by batteries. Wired boats are NOT allowed. '
                googleform='https://forms.gle/aHv1QkA9XPaUPmAA8'
                rulebook=''
              pricepool='10k'
              />
              <EventCard
                day="Phoenix"
                artist=" Tech Exhibition"
                description="The Exhibition event offers you an amazing opportunity to show off your ideas and innovations !! Stay tuned for more updates."
                image={lnmtechexpo}
                url='exhibition'
                badaDescription='The Exhibition event offers you an amazing opportunity to show off your ideas and innovations !! Stay tuned for more updates.'
                googleform='https://forms.gle/Ak8cFvqhvuW61Shg7'
                rulebook=''
              pricepool='25k'
              />

            </TabPanel>

            <TabPanel className="cards">

              <EventCard
                day="Cipher"
                artist=" LNM HACKS 6.0"
                description="LNMHacks 6.0 will be a 48-hour hackathon with a wide range of tracks."
                image={lnmhacks}
                url='lnmHacks'
                badaDescription='LNMHacks 6.0 will be a 48-hour hackathon with a wide range of tracks. People can experiment with their knowledge in many fields like Al/ML, Healthcare, etc. as well. LNMHacks expects the participation of innovators and developers from all over the nation. Some of the tracks mentioned above will have dedicated problem statements and prizes.

                All the participants will be required to create a working application to showcase their solution to the problem.
                '
                googleform='https://lnmhacks.tech/'
                rulebook=''
              pricepool='None'
              />

            </TabPanel>

            <TabPanel className="cards">

            <EventCard
                day="ASME LNMIIT"
                artist=" RoboWar"
                description="Robot Combat Competition where participants battle each other for the coveted Robowars Champion Title."
                image={robo}
                badaDescription='Robot Combat Competition where participants battle each other for the coveted Robowars Champion Title. Witness sparks fly as metal crushes metal in the most glorious battles for non-stop entertainment.'
                googleform='https://docs.google.com/forms/d/e/1FAIpQLScusAMvGYiNitdT6MISctsjXDtQrK2fYZpG4wxihmr6QEZJsg/viewform'
                rulebook=''
              pricepool='1 Lakh'

              />
              <EventCard
                day="ASME LNMIIT"
                artist=" Drone Race"
                description="Teams have to design and build a wireless remote-controlled flying platform to complete an obstacle course in minimum time without crashing."
                image={rcdrone}
                url='droneRace'
                badaDescription='Teams have to design and build a wireless remote-controlled flying platform to complete an obstacle course in minimum time without crashing.'
                googleform='https://docs.google.com/forms/d/e/1FAIpQLSf75pC9UX4U1TYSyw6CvoZhidAjDkzJxXmtHmxiFnqMzsZTfw/viewform'
                rulebook=''
              pricepool='50k'
              />
              <EventCard
                day="ASME LNMIIT"
                artist=" RC Plane"
                description="Build your RC Plane which is aerodynamically sound and within the specified dimensions to achieve a successful flight."
                image={rcplane}
                url='rcplane'
                badaDescription='Build your RC Plane which is aerodynamically sound and within the specified dimensions to achieve a successful flight. The RC Plane should take off, land, and can manoeuvre.'
                googleform='https://forms.gle/uwrLnmmsZUuwezCf8'
                rulebook=''
              pricepool='25k'
              />
              
              <EventCard
                day="ASME LNMIIT"
                artist=" Bridge The Barrier"
                description="Bridge the Barrier is an exhilarating and intellectually stimulating event that challenges participants to unleash their creativity, engineering prowess, and teamwork skills"
                image={bridgethebarrier}
                url='bridgeTheBarrier'
                badaDescription='Bridge the Barrier" is an exhilarating and intellectually stimulating event that challenges participants to unleash their creativity, engineering prowess, and teamwork skills. In this event, different teams engage in the design and construction of a bridge using wooden sticks, and the structural integrity is achieved through various types of mechanical joints. The ultimate test of their ingenuity comes when the bridges are subjected to the weight-bearing examination, and the results determine the champions.'
                googleform=''
                rulebook=''
              pricepool='None'
              />
              {/* <EventCard
                day="ASME LNMIIT"
                artist=" MachinaMaze Challenge"
                description="Welcome to 'Re-Engineering,' where innovation meets the clock. In this high-energy challenge, teams decipher cryptic clues to piece together scattered machine parts within a tight timeframe."
                image={monstertruck}
                url='machineMaze'
                badaDescription='Prepare for an electrifying showdown at the RC Monster Truck Battle event! This action-packed gathering is all about head-to-head battles featuring remote-controlled monster trucks. Feel the thrill as competitors go wheel-to-wheel in intense one-on-one clashes, showcasing power, strategy, and skill. Join fellow enthusiasts for a day of adrenaline-fueled excitement, where the ultimate champion will emerge victorious in this epic display of RC monster truck prowess. Do not miss out on the excitement and fierce competition!'
                googleform=''
                rulebook=''
              pricepool='None'
              /> */}

              <EventCard
                day="ASME LNMIIT"
                artist="Escape Room"
                description="Midnight Chronicles promises an unforgettable and discreet murder mystery adventure, challenging participants' detective skills and strategic thinking."
                image={escaperoom}
                badaDescription='Midnight Chronicles promises an unforgettable and discreet murder mystery adventure, challenging participants detective skills and strategic thinking. The dynamic storytelling, engaging puzzles, and unexpected twists ensure a thrilling experience for all participants.'
                googleform=''
                rulebook=''
              pricepool='None'
              />

              <EventCard
                day="ASME LNMIIT"
                artist="DIY Glider Challenge"
                description="The DIY Glider Challenge is an exhilarating and hands-on event that seamlessly blends creativity, engineering, and friendly competition."
                image={diyglider}
                badaDescription='The "DIY Glider Challenge" is an exhilarating and hands-on event that seamlessly blends creativity, engineering, and friendly competition. Participants are provided with origami paper to craft a paper plane within a specified time frame. The highlight of the challenge is the thrilling moment when the handmade gliders are launched from an elevated platform. The distance each glider covers is a key factor, but this challenge goes beyond distance, incorporating elements of aerodynamic stability, knowledge, and creativity into the judging criteria'
                googleform=''
                rulebook=''
              pricepool='None'
              />
            </TabPanel>

            <TabPanel className="cards">
              <EventCard
                day="SAE"
                artist="Fox Hunt"
                description="Embark on an electrifying adventure at our college-wide treasure hunt event!"
                image={foxhunt}
                badaDescription='Embark on an electrifying adventure at our college-wide treasure hunt event! Armed with a custom transmitter and receiver, student teams decode mysterious clues leading to 10 hidden transmitter locations across the campus. As they unveil each secret transmitter, an LED on their receiver flickers to life. Collaboration is key, as each transmitter holds a clue guiding them to the next location. The quest culminates when a team gathers all 10 clues and races back to the starting point for victory!'
                googleform='https://forms.gle/k7rHJs9ZfFDam1LD7'
                rulebook=''
              pricepool='40k'
              />
              <EventCard
                day="SAE"
                artist="Who Dun It"
                description="A real time crime scene is created that needs to be observed by the participants and then solve the mystery lying ahead."
                image={whodunit}
                badaDescription='A riveting, real-time crime scene investigation challenge designed to test your observational prowess and deductive reasoning. Immerse yourself in a meticulously crafted crime scene, rich with clues and evidence waiting to be discovered. Work alongside fellow participants, analyze the evidence, and piece together the narrative. Sharpen your investigative skills as you embark on a thrilling journey to solve the enigma lurking within the scene. Are you ready to crack the case and identify the culprit? The challenge awaits at Plinth!'
                googleform=''
                rulebook=''
              pricepool='None'
              />
              <EventCard
                day="ASME LNMIIT"
                artist=" Spaghetti Tower"
                description="It's a fun event lasting up to 20 to 25 mins."
                image={sphagetti}
                url='spaghetti'
                badaDescription='It is a fun event lasting up to 20 to 25 mins. The basic idea is that a team is given a handful of supplies to work with spaghetti, marshmallow, tape and string.'
                googleform=''
                rulebook=''
              pricepool='Goodies'
              />
            </TabPanel>

            {/* <TabPanel className="cards">

            <EventCard
                day="OC Events"
                artist="  E-sports Gaming"
                description="Dive into the heart-pounding world of eSports! Featuring Valorant tactical battles, FIFAs soccer showdowns, BGMIs intense battlegrounds, and more.."
                image={img3}
                badaDescription='Dive into the heart-pounding world of eSports! Featuring Valorant tactical battles, FIFAs soccer showdowns, BGMIs intense battlegrounds, and more. Whether you are a pro or a newbie, join us for thrilling clashes and epic gaming moments in a diverse range of competitive titles!'
              />
              <EventCard
                day="OC Events"
                artist="  GoKarting"
                description="Go-karting is an adrenaline-pumping motorsport that offers a thrilling experience for participants of all ages."
                image={img3}
                badaDescription='Go-karting, the epitome of high-octane excitement, beckons participants of all ages into the heart of motorsport exhilaration. These pocket-sized speed demons, known as go-karts, unleash their power as participants navigate a meticulously crafted track. Feel the surge of adrenaline as you manoeuvre these open-wheel marvels, experiencing the blend of speed, skill, and competitive spirit in this thrilling, specially curated event.'
              />
              <EventCard
                day="OC Events"
                artist="Monopoly LNMIIT Edition"
                description="A fun version of monopoly which will help everyone to connect to LNMIIT's culture and college life."
                image={img3}
                badaDescription='A campus-inspired twist on the classic game. Explore iconic landmarks, hostels, and departments while embracing campus culture. With nods to our beloved spots and inside jokes, this game promises laughter and a deep connection to our university vibrant spirit.'

              />
              <EventCard
                day="OC Events"
                artist="Virtual Drive"
                description="A real time crime scene is created that needs to be observed by the participants and then solve the mystery lying ahead."
                image={img3}
                badaDescription='Experience a world where boundaries vanish as VR technology transports you to fantastical landscapes, heart-pounding adventures, and innovative simulations. Engage in interactive demos, explore alternate realities, and witness the future of entertainment and education within our captivating VR showcase.'
              />
              

            </TabPanel> */}
          </Tabs>
        </div>
      </div>
      <ParticleComponent />
    </div>
    </>
  );
}

export default Competitions;
