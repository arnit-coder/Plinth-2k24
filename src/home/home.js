import Header from "../Header/Header";
import "./home.css";

export const Home = () => {
  return (
    <div className="home">
      <img src="/home.jpeg" className="home-img" />
      <div className="grad"></div>
      <div className="xpr">
        <div><h3>LNMIIT'S</h3></div>
        <div></div>
        <div><h3>19th-21st JAN</h3></div>
      </div>
      <div className="xpr2"><h1>PLINTH</h1></div>
      <div className="xpr3"><h4>A COGNITO CASCADE</h4></div>
      <Header /> 
    </div>
  );
};
