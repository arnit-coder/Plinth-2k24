// Event.js
import React from "react";
import Image from "./bg.jpeg";
import EventCard from "./EventCard"; // Import EventCard component
import "./Event.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Day2 from "./Day2/Day2";

import img1 from "./img1.jpeg";
import img2 from "./img2.png";
import img3 from "./img3.jpeg";

function Event() {
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
          <div className="cards">
            {/* Use EventCard component and pass values as props */}
            <EventCard
              day="DAY 1"
              artist="RHYTM DIVINE"
              description="RHYTM DIVINE's captivating performance on the plinth mesmerized the crowd with its infectious beats, creating a rhythmic, unforgettable experience."
              image={img1}
            />
            <Link to='/Day2'>
            <EventCard
              day="DAY 2"
              artist="MOHD. IRFAN"
              description="Mohammed Irfan's Plinth performance wowed the audience with his enchanting voice and stage charisma, leaving a lasting impression."
              image={img2}
            />
            </Link>
            <EventCard
              day="DAY 2"
              artist="STEBIN BEN"
              description="Stebin Ben electrified the crowd at Plinth, a fest, with his mesmerizing performance. His soulful voice and stage presence left the audience in awe, creating unforgettable memories."
              image={img3}
            />
            <EventCard
              day="DAY 1"
              artist="RHYTM DIVINE"
              description="RHYTM DIVINE's captivating performance on the plinth mesmerized the crowd with its infectious beats, creating a rhythmic, unforgettable experience."
              image={img1}
            />
            <EventCard
              day="DAY 2"
              artist="MOHD. IRFAN"
              description="Mohammed Irfan's Plinth performance wowed the audience with his enchanting voice and stage charisma, leaving a lasting impression."
              image={img2}
            />
            <EventCard
              day="DAY 2"
              artist="STEBIN BEN"
              description="Stebin Ben electrified the crowd at Plinth, a fest, with his mesmerizing performance. His soulful voice and stage presence left the audience in awe, creating unforgettable memories."
              image={img3}
            />
            {/* Add more EventCard components for other events */}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Event;
