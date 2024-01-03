import React from 'react';
import ExploreCss from './Explore.module.css';
import { Link, useLocation } from 'react-router-dom';

const Explore = () => {
    const location=useLocation();
    const props=location.state
  const { artist, day, badaDescription, pricepool, image, rulebook, googleform } = props;
    // console.log(props)
  return (
    <div className={ExploreCss.main}>
      <div className={ExploreCss.heading}>
        <div className={ExploreCss.title}>
          {artist}
        </div>
        <div className={ExploreCss.clubHeading}>
          {day}
        </div>
      </div>
      <div className={ExploreCss.container}>
        <div className={ExploreCss.leftDiv}>
          <div className={ExploreCss.badaDescription}>
            {badaDescription}
          </div>
          <div className={ExploreCss.pricepoolDiv}>
            <h6 className={ExploreCss.pricepool}>PRICE POOL - {pricepool}</h6>
          </div>
          <button className={ExploreCss.register}> <a href={googleform}>REGISTER</a></button>
        </div>
        <div className={ExploreCss.rightDiv}>
          <div className={ExploreCss.imageDiv}>
            {/* image using framer-motion */}
            <img className={ExploreCss.image} src={image} alt="Event" />
          </div>
          {/* Rule book */}
          <button className={ExploreCss.rulebookbutton}>
            <Link className={ExploreCss.link} to={rulebook}>RULE BOOK</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
