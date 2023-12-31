import React from "react";
import "./OurTeam.css";

const TeamCard = (props) => {
  return (
    <div className="card1-t">
      <div className="img">
        <img src={props.image} alt="" />
        <div className="grad"></div>
      </div>
      <p className="artist">{props.namex}</p>
      <p className="desc">{props.role}</p>
      <p className="desc">{props.phone}</p>
    </div>
  );
};


export default TeamCard;
