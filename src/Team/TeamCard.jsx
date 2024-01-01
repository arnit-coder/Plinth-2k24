
import React, { useEffect } from 'react';
import './team.css';
import VanillaTilt from 'vanilla-tilt';

const Card = ({ imageUrl, title, time, venue }) => {
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
      <img alt="" className="card-image" src={imageUrl} />
      <div className="card-text">
        <h2>{title}</h2>
        <p className="desc">{time} <br /><br /> {venue}</p>
        
      </div>
    </div>
  );
};

export default Card;
