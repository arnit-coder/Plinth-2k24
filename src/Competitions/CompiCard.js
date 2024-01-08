// EventCard.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate, Link } from "react-router-dom";
import Explore from '../Explore/Explore.jsx';



const EventCard = ({ day, artist, description, image, googleform, badaDescription,rulebook, pricepool }) => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const swaraj={
      width: "100%",
      height: "100%",
      background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)",
      position: "absolute",
      zIndex: "100"
  }
  const handleClick = () => {
     ("/explore")
    const propsTosend={
      googleform:googleform,
      day:day,
      artist:artist,
      badaDescription:badaDescription,
      image:image,
      // eventUrl:url
      pricepool: pricepool,
      rulebook: rulebook
    }
    navigate('/explore', {
      state: propsTosend
    });

    // <Explore /> 
    setClicked(true);
  };

  return (
    <div className="card2">
     <div className="img">
     <div style={swaraj}></div>
        <img src={image} alt="" />
        
      </div>
      <p className="day">{day}</p>
      <p className="artist">{artist}</p>
      <p className="desc">{description}</p>
      <button className="button-63-1" onClick={handleClick}>Explore
      </button>

     {/* Render Explore component when the button is clicked */}
      {/* {clicked && (
        <div className='explore'>
          <Explore artist={artist} day={day} badaDescription={description} pricepool="TDA" image={image} rulebook="https://plinth.co.in/" />
        </div>
      )} */}
    </div>
  );
};

// EventCard.propTypes = {
//   day: PropTypes.string.isRequired,
//   artist: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired,
// }; 

export default EventCard;
