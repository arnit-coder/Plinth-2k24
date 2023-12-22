// Event.js
import React from "react";
import Image from "./bg.jpeg";
import EventCard from "./EventCard"; // Import EventCard component
import "./Event.css";
import Header from "../Header/Header";

import img1 from "./img1.jpeg";
import img2 from "./img2.png";
import img3 from "./img3.jpeg";

function Competitions() {
  return (
    <div id="competitions">
      <div className="main">
        <div className="page1">
          <img src={Image} alt="" />
          <h1 style={{ fontSize: "7.5vw" }}>COMPETITIONS</h1>
          <div className="bottom"></div>
        </div>
        <div className="page2">
          <h1>Lorem</h1>
          <div className="cards">
            {/* Use EventCard component and pass values as props */}
            <EventCard
              day="Quizzinga"
              artist="Cryptex"
              description="Cryptex is an online quiz competition with a format similar to a treasure hunt."
              image={img1}
            />
            <EventCard
              day="Quizzinga"
              artist="IPL Auction"
              description="IPL Auction is a real-life simulation of the auction we witness before every IPL season."
              image={img2}
            />
            <EventCard
              day="Quizzinga"
              artist="Brandwagon"
              description="Brandwagon is Quizzinga's flagship business quiz every year during Plinth."
              image={img3}
            />
            <EventCard
              day="Cybros"
              artist="CP DUELS"
              description="CP DUEL is an in-person 1v1 knockout tournament. As the meaning of duel suggests, this will be a coding combat between 2 individuals, i.e. both the participants will be given the same problem and the first person to solve it wins."
              image={img1}
            />
            <EventCard
              day="Cybros"
              artist=" C PEAK"
              description="C PEAK is a tournament in which contestants are eliminated based on their problem-solving speed"
              image={img2}
            />
            <EventCard
              day="Cybros"
              artist=" IUPC"
              description="The contest will be ICPC style with a 10-minute penalty for each wrong submission and will follow the ICPC format."
              image={img3}
            />
            <EventCard
              day="Cybros"
              artist=" ENIGMA"
              description="This is Cybros' flagship-rated contest. It is a regular one-person competitive programming contest."
              image={img3}
            />
            <EventCard
              day="E-Cell"
              artist="  Job Fair"
              description="Embark on a journey of boundless possibilities during our dynamic 2-day job fair, an unparalleled realm of professional excellence."
              image={img3}
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
              image={img3}
            />
            <EventCard
              day="DebSoc"
              artist=" Model United Nations"
              description="At a MUN conference, delegates(students) will each represent a nation/organization to solve world problems by working with other delegates."
              image={img3}
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
            <EventCard
              day=" Astronomy"
              artist="Odin's Eye"
              description="Odin’s Eye is an astronomy-themed treasure hunt; the faster you solve the mind boggling riddles, the closer you get to the finishing line."
              image={img3}
            />
            <EventCard
              day="Astronomy"
              artist=" Brahmaand
              "
              description="The Astronomy club presents a partial online event Brahmaand where teams will have to submit a well-researched and cited presentation based on their ideas.
              "
              image={img3}
            />
            <EventCard
              day="Astronomy"
              artist=" Dhoomketu - Telescopic Sky Gazing"
              description="The events are designed in a way that there is something for everybody.
              "
              image={img3}
            />
            <EventCard
              day="Astronomy"
              artist="StarPix"
              description="It is an online event in which you have to send us photographs of the night sky you took yourself, coupled with your original and creative touch, which displays deep-sky objects, solar system objects, or an Astro-landscape."
              image={img3}
            />
            <EventCard
              day="Astronomy"
              artist=" Astro Photography Workshop"
              description=""
              image={img3}
            />
            <EventCard
              day="Astronomy"
              artist=" ISRO Scientist Talk"
              description=""
              image={img3}
            />
            <EventCard
              day="Phoenix"
              artist=" RoboWar"
              description="Robot Combat Competition where participants battle each other for the coveted Robowars Champion Title."
              image={img3}
            />
            <EventCard
              day="Phoenix"
              artist=" Maze Solver"
              description="Teams must create an autonomous robot that can navigate a maze by following a black line and keeping track of directions."
              image={img3}
            />
            <EventCard
              day="Phoenix"
              artist=" Robo Soccer"
              description="That means it will be a 2v2 match. Initially, both the bots of each team should be on their side of the half."
              image={img3}
            />
            <EventCard
              day="Phoenix"
              artist=" Robo Race"
              description="Teams must create a manually operated bot that can move on difficult terrain and complete the designed track below-mentioned elements."
              image={img3}
            />
            <EventCard
              day="Phoenix"
              artist=" Transporter"
              description="Teams must create a manually operated bot that can perform simple tasks such as grasping objects and placing them in target zones to complete the course while avoiding the obstacles in its way."
              image={img3}
            />
            <EventCard
              day="Phoenix"
              artist="  Boat Race"
              description="Design and build a manually controlled boat to sail through the obstacles in the arena and complete the race task before the other boat."
              image={img3}
            />
            <EventCard
              day="Phoenix"
              artist=" Tech Exhibition"
              description="The Exhibition event offers you an amazing opportunity to show off your ideas and innovations !! Stay tuned for more updates."
              image={img3}
            />

            <EventCard
              day="Cipher"
              artist=" LNM HACKS 6.0"
              description="LNMHacks 6.0 will be a 48-hour hackathon with a wide range of tracks."
              image={img3}
            />
            <EventCard
              day="ASME LNMIIT"
              artist=" Drone Race"
              description="Teams have to design and build a wireless remote-controlled flying platform to complete an obstacle course in minimum time without crashing."
              image={img3}
            />
            <EventCard
              day="ASME LNMIIT"
              artist=" RC Plane"
              description="Build your RC Plane which is aerodynamically sound and within the specified dimensions to achieve a successful flight."
              image={img3}
            />
            <EventCard
              day="ASME LNMIIT"
              artist=" Spaghetti Tower"
              description="It's a fun event lasting up to 20 to 25 mins."
              image={img3}
            />
            <EventCard
              day="ASME LNMIIT"
              artist="Fox Hunt"
              description="Embark on an electrifying adventure at our college-wide treasure hunt event!"
              image={img3}
            />
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
              image={img3}
            />

            {/* Add more EventCard components for other events */}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Competitions;