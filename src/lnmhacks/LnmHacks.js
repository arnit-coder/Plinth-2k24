import React from "react";
import image from "../lnmhacksassets/Plinth Website Poster.png"
import "./Lnmhacks.css";

function LnmHacks() {
  return (
    <div>
      <div className="page1">
        <div className="section2">
          <div className="section2-left">
            <h1>LNM HACKS</h1>
            <p>
              LNMIIT is hosting its 6th annual flagship hackathon, LNM-hacks
              6.0, a 72-hour event focusing on blockchain and the web3
              ecosystem. The event offers multiple tracks for hackers to build
              solutions to industry problems. Winning teams receive prizes,
              mentorship, and incubation opportunities. Participants can
              showcase their skills to potential employers and investors.
              Bounties on coding various optimum solutions will be presented to
              winners. The event will take place from January 19-21, 2019.
            </p>
          </div>
          <div className="section2-right">
            <img src={image} alt="" />
            <button>OUR WEBSITE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LnmHacks;
