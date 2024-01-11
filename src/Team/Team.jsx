// Rocket.js

import React from 'react';
import './team.css';
import TeamCard from './TeamCard'
import img1 from "./imageex.jpg"
import chiragmittal from "./chiragmittal.jpg"
import aryangupta from './aryangupta.jpg'
import prajit from './prajit.jpg'
import gungun from './gungun.jpg'
import nanik from './nanik.jpg'
import abhay from './abhay.jpg'
import ayushbansal from './ayushbansal.jpg'
import swaraj from './swaraj.jpeg'
import eeshir from './eeshir.jpg'
import kaustubh from './kaustubh.jpg'
import adityakumar from './adityakumar.jpg'
import aryanguptatech from './aryanguptatech.jpeg' 
import pranav from './pranav.jpg' 
import arnit from './arnit.jpg'
import harshitdaga from './harshitdaga.jpg'
import mitali from './mitali.jpg'
import shourya from './shouryagupta.jpeg'

import tushar from './tushar.jpg' 
import deshna from './deshna.jpg'
import medhansh from './medhansh.jpg'
import pranjalmishra from './pranjalmishra.jpg'
import priyank from './priyank.jpg'
import kumarharsh from './kumarharsh.jpg'
import adityach from './adityach.jpeg'
import raj from './raj.jpg'
import ramsha from './ramsha.jpg'
import chetali from './chetali.webp'
import narang from './narang.jpeg'
import Cube from '../Cube/Cube';
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import ParticleComponent from '../Particle/ParticleComponent';
import Header1 from '../Header/Header';

const Team = () => {
    const cubeStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
      };
  const TeamData=[
    {
        image:nanik,
        namex:"Nanik Chaturvedi",
        role:"General Secretary",
        phone:"+91 8209393282",
        mail:"",
        insta:"",
        linkedin:"https://www.linkedin.com/in/nanik-chaturvedi-4b283b247/"
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
        image:eeshir,
        namex:"Eeshir Gupta",
        role:"Finance Convenor",
        phone:"+91 9252066636",
        mail:"",
        insta:"https://www.instagram.com/eeshir_gupta",
        linkedin:"https://www.linkedin.com/in/eeshir-gupta-410bb1227/"
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
        image:aryangupta,
        namex:"Aryan Gupta",
        role:"Sponsorship Lead",
        phone:"+91 7726031952",
        mail:"",
        insta:"https://www.instagram.com/_a_r_yan__/",
        linkedin:"https://www.linkedin.com/in/aryan-gupta-a90a67204/"
    },
    {
        image:pranav,
        namex:"Pranav Agarwal",
        role:"PR Head",
        phone:"+91 9106177115",
        mail:"",
        insta:"https://www.instagram.com/pranav.agarwal18/?next=%2F",
        linkedin:"https://www.linkedin.com/in/pranav-agarwal-535928227/"
    },
    {
        image:img1,
        namex:"Manvi Gupta",
        role:"PR Head",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:abhay,
        namex:"Abhay Deep Choudhary",
        role:"PR Lead",
        phone:"+91 8209049877",
        mail:"",
        insta:"https://www.instagram.com/who.isabhay?igsh=NTYzOWQzNmJjMA==",
        linkedin:"https://www.linkedin.com/in/abhay-deep-chaudhary-a15750234"
    },
    {
        image:chetali,
        namex:"Chetali Goyal",
        role:"PR Lead",
        phone:"+91 7973358356",
        mail:"",
        insta:"",
        linkedin:"https://www.linkedin.com/in/chetali-goyal-020860227"
    },
    {
        image:priyank,
        namex:"Priyank Saini",
        role:"Creative Head",
        phone:"+91 8689031239",
        mail:"",
        insta:"https://www.instagram.com/priyank___saini?igsh=MXNhMXo1dHZ2dWs5eQ==",
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
        image:gungun,
        namex:"Gungun",
        role:"Creative Lead",
        phone:"+91 7976156293",
        mail:"",
        insta:"",
        linkedin:"https://www.linkedin.com/in/gungun-hinduja21uec055/"
    },
    {
        image:narang,
        namex:"Aditya Narang",
        role:"Creative Lead",
        phone:"+91 9399056819",
        mail:"",
        insta:"https://www.instagram.com/narang_adi01?igsh=ODA1NTc5OTg5Nw==",
        linkedin:"https://www.linkedin.com/in/aditya-n-045977253"
    },
    {
        image:prajit,
        namex:"Prajit Kaushik",
        role:"Event Head",
        phone:"+91 9667368656",
        mail:"",
        insta:"https://www.instagram.com/__hunterzz?igsh=Z2J1MjdyOGRscTNz",
        linkedin:""
    },
    {
        image:kaustubh,
        namex:"Kaustubh Agarwal",
        role:"Event Head",
        phone:"+91 76072220062",
        mail:"",
        insta:"https://www.instagram.com/a_kaustubh_02?igsh=ZGNjOWZkYTE3MQ== ",
        linkedin:"https://www.linkedin.com/in/kaushtubh-agrawal-650b40229?"
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
        image:medhansh,
        namex:"Medhansh Sharma",
        role:"Content Head",
        phone:"+91 8209516918",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:deshna,
        namex:"Deshna Thakur",
        role:"Content Head",
        phone:"+91 7339899087",
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
        image:priyank,
        namex:"Priyank Saini",
        role:"UI/UX Head",
        phone:"+91 123456789",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:arnit,
        namex:"Arnit Gupta",
        role:"Tech Head",
        phone:"+91 6367880107",
        mail:"21ucs029@lnmiit.ac.in",
        insta:"https://www.instagram.com/arnit04/",
        linkedin:"https://www.linkedin.com/in/arnit04/"
    },
    {
        image:pranjalmishra,
        namex:"Pranjal Mishra",
        role:"Tech Head",
        phone:"+91 7651815073",
        mail:"21UCS156@lnmiit.ac.in",
        insta:"",
        linkedin:""
    },
    {
        image:ramsha,
        namex:"Ramsha Iqbal",
        role:"Tech Head",
        phone:"+91 9555369500",
        mail:"21UME042@lnmiit.ac.in",
        insta:"",
        linkedin:""
    },
    {
        image:adityakumar,
        namex:"Aditya Kumar",
        role:"Fullstack Developer",
        phone:"+91 8240423970",
        mail:"22ucc056@lnmiit.ac.in",
        insta:"https://www.instagram.com/adi_rocks_007",
        linkedin:"https://www.linkedin.com/in/aditya-kumar007"
    }, 
    {
        image:swaraj,
        namex:"Swaraj Layek",
        role:"Fullstack Developer",
        phone:"+91 7810909767",
        mail:"22ucs216@lnmiit.ac.in",
        insta:"https://www.instagram.com/swaraj_layek_/",
        linkedin:"https://www.linkedin.com/in/swaraj-layek/"
    },
    {
        image:harshitdaga,
        namex:"Harshit Daga",
        role:"Fullstack Developer",
        phone:"+91 9331959900",
        mail:"22ucs236@lnmiit.ac.in",
        insta:"https://www.instagram.com/harshitdaga03/",
        linkedin:"https://www.linkedin.com/in/harshit-daga-54a816203/"
    },
    {
        image:chiragmittal,
        namex:"Chirag Mittal",
        role:"Frontend Developer",
        phone:"+91 7206466491",
        mail:"21ucs053@lnmiit.ac.in",
        insta:"",
        linkedin:"www.linkedin.com/in/ chirag-71941a2a6"
    },
    {
        image:kumarharsh,
        namex:"Kumar Harsh",
        role:"Frontend Developer",
        phone:"+91 9973750456",
        mail:"22ucc010@lnmiit.ac.in",
        insta:"",
        linkedin:"https://www.linkedin.com/in/kumarharsh-p"
    },
    {
        image:mitali,
        namex:"Mitali Manya",
        role:"Frontend Developer",
        phone:"+91 7023761771",
        mail:"",
        insta:"",
        linkedin:"https://www.linkedin.com/in/mitali-manya-796921251"
    },
    {
        image:ayushbansal,
        namex:"Ayush Bansal",
        role:"Frontend Developer",
        phone:"+91 9142588433",
        mail:"",
        insta:"",
        linkedin:""
    },
    {
        image:adityach,
        namex:"Aditya Chaudhary",
        role:"Backend Developer",
        phone:"+91 9116304181",
        mail:"",
        insta:"https://www.instagram.com/_adityathejaat_/",
        linkedin:"https://www.linkedin.com/in/aditya-chaudhary-763047249/"
    },
    {
        image:tushar,
        namex:"Tushar Sukhwal",
        role:"Backend Developer",
        phone:"+91 7727999881",
        mail:"",
        insta:"",
        linkedin:"https://www.linkedin.com/in/tushar-sukhwal-57463a251/"
    },
    //  {
    //       image:aryanguptatech,
    //       namex:"Aryan Gupta",
    //       role:"Tech Advisor",
    //       phone:"+91 9064280911",
    //       mail:"",
    //       insta:"https://www.instagram.com/_a_ryan_gupt_a_",
    //       linkedin:"https://www.linkedin.com/in/aryanng"
    //   },
    {
      image:raj,
      namex:"Aditya Raj",
      role:"Fest Head",
      phone:"+91 7903613803",
      mail:"",
      insta:"https://linktr.ee/08adityaraj",
      linkedin:"https://www.linkedin.com/in/aditya-raj-606b73201/"
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
  {
    image:shourya,
    namex:"Shourya Gupta",
    role:"UI/UX Designer",
    phone:"+91 123456789",
    mail:"22ucs202@lnmiit.ac.in",
    insta:"https://www.instagram.com/harshitdaga03/",
    linkedin:"https://www.linkedin.com/in/harshit-daga-54a816203/"
},
    
    

];


return (
  <>
  <div className="Header1"><Header1 /></div>
  {/* <Header /> */}
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
        <div className='team-section'>
        {TeamData.slice(43, 44).map((member, index) => (
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
    </>
  );
};

export default Team;