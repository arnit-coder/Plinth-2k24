// Rocket.js

import React from 'react';
import './team.css';
import TeamCard from './TeamCard'

const Competitions = () => {
  const competitionsData = [
    {
      imageUrl: "",
      title: "NAINIK CHATURVEDI",
      time: "GSEC",
      venue: "123456789",
    },
    {
      imageUrl: "",
      title: "NAINIK CHATURVEDI",
      time: "GSEC",
      venue: "123456789",
    },
    {
      imageUrl: "",
      title: "NAINIK CHATURVEDI",
      time: "GSEC",
      venue: "123456789",
    },
    {
      imageUrl: "",
      title: "NAINIK CHATURVEDI",
      time: "GSEC",
      venue: "123456789",
    },
    {
      imageUrl: "",
      title: "NAINIK CHATURVEDI",
      time: "GSEC",
      venue: "123456789",
    },
    {
      imageUrl: "",
      title: "NAINIK CHATURVEDI",
      time: "GSEC",
      venue: "123456789",
    }
  ];

  return (
    <div className='main' id='Team'>
     
      <div className="team-container">

        {competitionsData.map((competition, index) => (
          <TeamCard
            key={index}
            imageUrl={competition.imageUrl}
            title={competition.title}
            time={competition.time}
            venue={competition.venue}
          />
        ))}
      </div>
    </div>



  );
};

export default Competitions;
