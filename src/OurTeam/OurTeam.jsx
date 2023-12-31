import React from "react";
import "./OurTeam.css";
import props from "./props";
import TeamCard from "./TeamCard";

function OurTeam(){
    return (
        <>
        {props.map((member) => (
        <TeamCard
          image={member.image}
          namex={member.namex}
          role={member.role}
          phone={member.phone}
          mail={member.mail}
          insta={member.insta}
          linkedin={member.linkedin}
        />
      ))} 
        </>
    );
}

export default OurTeam;