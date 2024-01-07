
import React, { useEffect } from 'react';
import './team.css';
import VanillaTilt from 'vanilla-tilt';

const Card = ({ image, namex, role, phone, mail }) => {
  useEffect(() => {
    const tiltOptions = {
      glare: true,
      reverse: true,
      'max-glare': 0.15,
    };
    VanillaTilt.init(document.querySelectorAll('.card'), tiltOptions);
  }, []);

  return (
    <div className="card">
      <img alt="" className="card-image" src={image} />
      <div className="card-text">
        <h2>{namex}</h2>
        <p className="desc">{role} <br /> {phone} <br /> {mail} </p>
        
      </div>
    </div>
  );
};

export default Card;