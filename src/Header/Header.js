import React from 'react';
import { Link } from 'react-router-dom';  // Import Link

import "./Header.css";
import logo from "./asset/Plinth 2024 logo 1.svg";
import image from "./asset/image.svg"
import home from "./asset/home.svg";
import dashboard from "./asset/layout.svg";
import shopping from "./asset/shopping-bag.svg";
import message from "./asset/mail.svg";
import gallery from "./asset/image.svg";
import calander from "./asset/calendar.svg";
import users from "./asset/users.svg";
import document from "./asset/file-text.svg";
import login from "./asset/icons8-login-100.png"
import signup from "./asset/icons8-sign-up-64.png";

function Header() {
  return (
    <div className="nav-main">
      
      <span>
        <Link to="/">
          <img className='test' src={home} alt="" />
          <p>Home</p>
        </Link>
      </span>
      <span>
        <Link to="/login">
          <img className='test' src={login} alt="" />
          <p>Login</p>
        </Link>
      </span>
      <span>
        <Link to="/signup">
          <img className='test' src={signup} alt="" />
          <p>SignUp</p>
        </Link>
      </span>
      <span>
        <Link to="/competitions">
          <img className='test' src={document} alt="" />
          <p style={{paddingTop:"10%"}}>Competitions</p>
        </Link>
      </span>
      {/* <span>
        <Link to="/messages">
          <img className='test' src={message} alt="" />
          <p>Messages</p>
        </Link>
      </span> */}
      {/* <span>
        <Link to="/gallery">
          <img className='test' src={gallery} alt="" />
          <p>Gallery</p>
        </Link>
      </span> */}
      <span>
        <Link to="/events">
          <img className='test' src={calander} alt="" />
          <p>Events</p>
        </Link>
      </span>
      {/* <span>
        <Link to="/activity">
          <img className='test' src={users} alt="" />
          <p>Activity</p>
        </Link>
      </span> */}

    </div>
  );
}

export default Header;
