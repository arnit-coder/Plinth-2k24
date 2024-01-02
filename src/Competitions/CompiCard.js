// EventCard.js
import React from "react";
import PropTypes from "prop-types";

import "./Event.css";
import { Link } from "react-router-dom";


const EventCard = ({ day, artist, description, image }) => {
  return (
    <div className="card2">
      <div className="img">
        <img src={image} alt="" />
        <div className="grad"></div>
      </div>
      <p className="day">{day}</p>
      <p className="artist">{artist}</p>
      <p className="desc">{description}</p>
      <Link to='/explore'><button className="button-63">Explore</button></Link>
    </div>
  );
};

EventCard.propTypes = {
  day: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default EventCard;
