// Rocket.js

import React from 'react';
import './team.css';
import TeamCard from './TeamCard'
import img1 from "./imageex.jpg"
import Cube from '../Cube/Cube';
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import ParticleComponent from '../Particle/ParticleComponent';
const Team = () => {
    const cubeStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
      };
  const TeamData=[
    {
        image:img1,
        namex:"Nanik Chaturvedi",
        role:"General Secretary",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Aakanksha Singh",
        role:"Associate General Secretary",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Eeshir Gupta",
        role:"Finance Convenor",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Amaan Yalagi",
        role:"Sponsorship Head",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Divyam Agarwal",
        role:"Sponsorship Head",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Vilansh Sharma",
        role:"Sponsorship Head",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Varun Ashok",
        role:"Sponsorship Head",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Mani Bajpai",
        role:"Sponsorship Lead",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Aryan Gupta",
        role:"Sponsorship Lead",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Pranav Agarwal",
        role:"PR Head",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Mani Bajpai",
        role:"PR Head",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Abhay Deep Choudhary",
        role:"PR Lead",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Chetali Goyal",
        role:"PR Lead",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Priyank Saini",
        role:"Creative Head",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Vansh Bulchandani",
        role:"Creative Head",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Anwesh Mohanty",
        role:"Creative Head",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Gungun",
        role:"Creative Lead",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Aditya Narang",
        role:"Creative Lead",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Prajit Kaushik",
        role:"Event Head",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Kaustubh Agarwal",
        role:"Event Head",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Paras Jain",
        role:"Event Lead",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Medhansh Sharma",
        role:"Content Head",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Deshna Thakur",
        role:"Content Head",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Himanshi Sharma",
        role:"Social media Head",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Lokesh Dhandwani",
        role:"Social media Head",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Bal Narayan Singh",
        role:"Social media Executive",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Krish Shah",
        role:"Social media Executive",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Saiyam Munot",
        role:"Social media Executive",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Priyank Saini",
        role:"UI/UX Head",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Arnit Gupta",
        role:"Tech Head",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Pranjal Mishra",
        role:"Tech Lead",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Ramsha Iqbal",
        role:"Tech Lead",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Aditya Kumar",
        role:"Frontend Developer",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    }, 
    {
        image:img1,
        namex:"Swaraj Layek",
        role:"Frontend Developer",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Harshit Daga",
        role:"Frontend Developer",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Chirag Mittal",
        role:"Frontend Developer",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Kumar Harsh",
        role:"Frontend Developer",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Mitali Manya",
        role:"Frontend Developer",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Ayush Bansal",
        role:"Frontend Developer",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Aditya Chaudhary",
        role:"Backend Developer",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Tushar Sukhwal",
        role:"Backend Developer",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Aditya Raj",
        role:"Fest Head",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:img1,
        namex:"Ashutosh Jha",
        role:"Fest Head",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },

];


return (
    <div className='main' id='Team'>
        <div className="epg">
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
          {/* <img src={Image} alt="" /> */}
          <h1 style={{textAlign: 'center', fontSize: '80px'}}>OUR TEAM</h1>
          <div className="bottom"></div>
        </div>
      <div className="team-container">
        {/* Council team (3 cards) */}
        <div className='team-m'>
        <h2 className='sec-head'>Council team</h2>
        <div className="team-section">
         
          {TeamData.slice(0, 3).map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              namex={member.namex}
              role={member.role}
              phone={member.phone}
              mail={member.mail}
            />
          ))}
        </div>
        </div>
        <div className='team-m'>
        <h2>Fest Heads</h2>
        <div className="team-section">
          
          {TeamData.slice(41, 43).map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              namex={member.namex}
              role={member.role}
              phone={member.phone}
              mail={member.mail}
            />
          ))}
        </div>
        </div>

        {/* Tech (12 cards) */}
        <div className='team-m'>
        <h2>Tech</h2>
        <div className="team-section">
          
          {TeamData.slice(29, 41).map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              namex={member.namex}
              role={member.role}
              phone={member.phone}
              mail={member.mail}
            />
          ))}
        </div>
        </div>

        {/* Creative (5 cards) */}
        <div className='team-m'>
        <h2>Creative</h2>
        <div className="team-section">
          
          {TeamData.slice(13, 18).map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              namex={member.namex}
              role={member.role}
              phone={member.phone}
              mail={member.mail}
            />
          ))}
        </div>
        </div>

        {/* Content (2 cards) */}
        <div className='team-m'>
        <h2>Content</h2>
        <div className="team-section">
          
          {TeamData.slice(21, 23).map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              namex={member.namex}
              role={member.role}
              phone={member.phone}
              mail={member.mail}
            />
          ))}
        </div>
        </div>

        {/* Sponsorship (6 cards) */}
        <div className='team-m'>
        <h2>Sponsorship</h2>
        <div className="team-section">
          
          {TeamData.slice(3, 9).map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              namex={member.namex}
              role={member.role}
              phone={member.phone}
              mail={member.mail}
            />
          ))}
        </div>
        </div>

        {/* PR (4 cards) */}
        <div className='team-m'>
        <h2>PR</h2>
        <div className="team-section">
          
          {TeamData.slice(9, 13).map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              namex={member.namex}
              role={member.role}
              phone={member.phone}
              mail={member.mail}
            />
          ))}
        </div>
        </div>

        

        {/* Event (3 cards) */}
        <div className='team-m'>
        <h2>Event</h2>
        <div className="team-section">
          
          {TeamData.slice(18, 21).map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              namex={member.namex}
              role={member.role}
              phone={member.phone}
              mail={member.mail}
            />
          ))}
        </div>
        </div>

        

        {/* Social Media (5 cards) */}
        <div className='team-m'>
        <h2>Social Media</h2>
        <div className="team-section">
          
          {TeamData.slice(23, 28).map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              namex={member.namex}
              role={member.role}
              phone={member.phone}
              mail={member.mail}
            />
          ))}
        </div>
        </div>

        {/* UI/UX (1 card) */}
        <div className='team-m'>
        <h2>UI/UX</h2>
        <div className="team-section">
          
          {TeamData.slice(28, 29).map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              namex={member.namex}
              role={member.role}
              phone={member.phone}
              mail={member.mail}
            />
          ))}
        </div>
        </div>
        {/* UI/UX (1 card) */}
        

        
      </div>
      <ParticleComponent />
    </div>
  );
};

export default Team;