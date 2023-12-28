import Header from "../Header/Header";
import "./home.css";
import Countdown from "./countdown";
export const Home = () => {
  
  return (
    
    <div className="home">
      <img src="/home.jpeg" className="home-img" />
      <img src="/hometxt.png" className="home-txt"></img>
      <div className="grad"></div>
      <div className="btn-p"><div className="button-p"><button className="button-x">REGISTER</button></div></div>
      <div className="ctd-p"><div className="ctd"><Countdown /></div></div>
    </div>
  );
};
