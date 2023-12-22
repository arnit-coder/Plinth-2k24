import Header from "../Header/Header";
import "./home.css";

export const Home = () => {
  return (
    <div className="home">
      <img src="/home.jpeg" className="home-img" />
      <img src="/hometxt.png" className="home-txt" />
      <div className="grad"></div>
      <Header /> 
    </div>
  );
};
