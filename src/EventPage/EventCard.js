// EventCard.js
import React from "react";
import PropTypes from "prop-types";
import "./Event.css";

const EventCard = ({ day, artist, description, image }) => {
  return (
    <div className="card1">
      <div className="img">
        <img src={image} alt="" />
        <div className="grad"></div>
      </div>
      <p className="day">{day}</p>
      <p className="artist">{artist}</p>
      <p className="desc">{description}</p>
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
