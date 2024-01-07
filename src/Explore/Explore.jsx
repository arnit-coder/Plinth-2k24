import React from 'react';
import ExploreCss from './Explore.module.css';
import { Link, useLocation } from 'react-router-dom';
import ParticleComponent from '../Particle/ParticleComponent';

const Explore = () => {
    const location=useLocation();
    const props=location.state
  const { artist, day, badaDescription, pricepool, image, rulebook, googleform } = props;
    // console.log(props)
  return (
    <div className={ExploreCss.main}>
      
      <div className={ExploreCss.container}>
        
        <div className={ExploreCss.leftDiv}>
        <div className={ExploreCss.heading}>
        <div className={ExploreCss.clubHeading}>
          {day}
        </div>
        <div className={ExploreCss.title}>
          {artist}
        </div>
        
      </div>
          <div className={ExploreCss.badaDescription}>
            {badaDescription}
          </div>
          <div className={ExploreCss.pricepoolDiv}>
            <h6 className={ExploreCss.pricepool}>PRICE POOL - {pricepool}</h6>
          </div>
          <a href={googleform} className={ExploreCss.register}>    <button className={ExploreCss.register}>REGISTER </button></a>   
        </div>
        <div className={ExploreCss.rightDiv}>
          <div className={ExploreCss.imageDiv}>
            {/* image using framer-motion */}
            <img className={ExploreCss.image} src={image} alt="Event" />
          </div>
          {/* Rule book */}
          <Link className={ExploreCss.rulebookbutton} to={rulebook}>   <button className={ExploreCss.rulebookbutton}>
       RULE BOOK
          </button></Link>
        </div>
      </div>
      <ParticleComponent />
    </div>
  );
};

export default Explore;
