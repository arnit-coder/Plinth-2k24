import React from "react";
import logo from "./asset/Plinth 2024 logo 2.svg";
import img1 from "./asset/Group 318.svg";
import img2 from "./asset/Group 319.svg";
import img3 from "./asset/Group 320.svg";
import img4 from "./asset/Group 321.svg";
import img5 from "./asset/DSC Logo-01 1.svg";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer-main">
        <div className="footer-1">
          <div className="footer-11">
            <img
              src={logo}
              style={{ height: "111px", width: "247px" }}
              alt=""
            />
          </div>
          <div className="footer-11">
            <p>PLINTH 2024</p>
            <p>PLINTH 2024</p>
            <p>PLINTH 2024</p>
            <p>PLINTH 2024</p>
          </div>
          <div className="footer-11">
            <p>PLINTH 2024</p>
            <p>PLINTH 2024</p>
          </div>
          <div className="footer-11">
            <p>PLINTH 2024</p>
            <p>PLINTH 2024</p>
          </div>
          <div className="footer-11">
            <p>PLINTH 2024</p>
          </div>
        </div>
        <div className="footer-2">
          <div className="footer-21">
            <img src={img4} alt="" />
            <img src={img3} alt="" />
            <img src={img2} alt="" />
            <img src={img1} alt="" />
          </div>
          <p>Copyright . All rights reserved</p>
        </div>
        <div className="footer-3">
          <div className="footer-31">
            <img src={img5} alt="" />
          </div>
          <div className="footer-32">
            <p>Designed and Developed by GDSC LNMIIT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
