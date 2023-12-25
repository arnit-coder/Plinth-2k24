import Header from "../Header/Header";
import "./home.css";
import Countdown from "./countdown";
export const Home = () => {
  
  return (
    
    <div className="home">
      <img src="/home.jpeg" className="home-img" />
      <img src="/hometxt.png" className="home-txt"></img>
      <div className="grad"></div>
      <button className="button-x">REGISTER</button>
      <div className="ctd"><Countdown /></div>
      <Header />
    </div>
  );
};
