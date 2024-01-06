import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom"; // Import Link
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import "./Header.css";
import { Flex ,IconButton , useBreakpointValue} from '@chakra-ui/react';

import logo from "./asset/Plinth 2024 logo 1.svg";
import image from "./asset/image.svg";
import home from "./asset/home.svg";
import dashboard from "./asset/layout.svg";
import shopping from "./asset/shopping-bag.svg";
import message from "./asset/mail.svg";
import gallery from "./asset/image.svg";
import calander from "./asset/calendar.svg";
import users from "./asset/users.svg";
import document from "./asset/file-text.svg";
import login from "./asset/icons8-login-100.png";
import signup from "./asset/icons8-sign-up-64.png";
import ambassador from "./asset/ambassador.png";
import room from "./asset/room.png";
import UserContext from "../ContextApi/UserContext";
import { calcLength } from "framer-motion";
import { MdLineAxis } from "react-icons/md";
function Header() {
  const isDesktop=useBreakpointValue({base:false,md:false,lg:true})
  const user = useContext(UserContext);
  const handleLogout = () => {
    localStorage.removeItem("token");
    user.setUser(null);
    toast.success("Logged out successfully");
    navigate("/");
  };

  const [active,setActive]=useState(true);

    const handleNavbar=()=>{
      setActive(!active)
    }
    const mainDivNav = {
      
      width: '30px',
      height: '70vh',
      border: '0px',
      position: 'sticky',
      top:'50px',
      right:'300px',
      transition: 'width .8s linear'

      
    };
    const navLinks = [
      { to: "/", text: "HOME", icon: home },
      { to: "/competitions", text: "COMPETITIONS", icon: document },
      { to: "/lnm-hacks" , text: "LNM HACKS" , icon: ambassador},
      { to: "/accomodation" , text: "ACCOMODATION" , icon: room},
      { to: "/campus-ambassador" , text: "AMBASSADOR" , icon: ambassador},
      { to: "/Team" , text: "OUR TEAM" , icon: ambassador},
      { to: "/signup" , text: "SIGN UP" , icon: signup}
    ];
    
    // const authLinks = user.user ? (
    //   <div style={{ position: "absolute", bottom: "0" }}>
    //     <span>
    //       <Link to="/login">
    //         <img className="test" src={login} alt="" />
    //         <p>Login</p>
    //       </Link>
    //     </span>
    //     <span>
    //       <Link to="/signup">
    //         <img className="test" src={signup} alt="" />
    //         <p>SignUp</p>
    //       </Link>
    //     </span>
    //   </div>
    // ) : (
    //   <span onClick={handleLogout}>
    //     <div>
    //       <img className="test" src={login} alt="" />
    //       <p>Logout</p>
    //     </div>
    //   </span>
    // );

    // const combinedLinks = user.user ? [...navLinks, authLinks] : navLinks;


  return (
      <div style={mainDivNav}  >
        <div className="hamburger">
        <IconButton
      // aria-label='edit'
      border='2px'
      borderColor='white'
      bg='#212121'
      _hover={{ bg: 'grey' }}
      onClick={handleNavbar}

    >
      {active ? <RxCross1 color='white' /> : <RxHamburgerMenu color='white' />}
    </IconButton>

        </div>
      {active && (
        <Flex
        className="flexbox"
          as="nav"
          borderColor="grey"
          h="60vh"
          borderWidth="2px"
          display="flex"
          flexDirection="column"
          borderRadius="15px"
          w="200px"
          justifyContent="space-between"
        >
          <ul className="ul" >
            {navLinks.map((link, index) => (
              <ul className="ul1" key={index} >
                <NavLink className="ul1"  to={link.to} activeClassName="active-link">
                  <img className="test" src={link.icon} alt="" />
                  <p className="linkName">{link.text}</p>
                </NavLink>
              </ul>
            ))}
          </ul>
        </Flex>
  )}
      </div> 
    // <div className="nav-main">
    //   <span>
    //     <Link to="/">
    //       <img className="test" src={home} alt="" />
    //       <p>Home</p>
    //     </Link>
    //   </span>
      
    //   <span>
    //     <Link to="/competitions">
    //       <img className="test" src={document} alt="" />
    //       <p style={{ paddingTop: "10%" }}>Competitions</p>
    //     </Link>
    //   </span>
    //   {/* <span>
    //     <Link to="/Profile">
    //       <img className='test' src={message} alt="" />
    //       <p>Profile</p>
    //     </Link>
    //   </span> */}
    //   {/* <span>
    //     <Link to="/events">
    //       <img className="test" src={calander} alt="" />
    //       <p>Events</p>
    //     </Link>
    //   </span> */}
    //   <span>
    //     <Link to="/lnm-hacks">
    //       <img className="test" src={ambassador} alt="" />
    //       <p style={{ paddingTop: "6%" }}>LnmHacks</p>
    //     </Link>
    //   </span>
    //   <span>
    //     <Link to="/campus-ambassador">
    //       <img className="test" src={ambassador} alt="" />
    //       <p style={{ paddingTop: "8%" }}>Ambassador</p>
    //     </Link>
    //   </span>
    //   <span>
    //     <Link to="/accomodation">
    //       <img className="test" src={room} alt="" />
    //       <p style={{ paddingTop: "10%" }}>Accommodation</p>
    //     </Link>
    //   </span>
      
      
    //   <span>
    //     <Link to="/Team">
    //       <img className='test' src={ambassador} alt="" />
    //       <p style={{paddingTop:"8%"}}>OurTeam</p>
    //     </Link>
    //   </span>

    //   {user.user ? (
    //     <div style={{position:"absolute",bottom:"0"}}>
    //       <span>
    //         <Link to="/login">
    //           <img className="test" src={login} alt="" />
    //           <p>Login</p>
    //         </Link>
    //       </span>
    //       <span>
    //         <Link to="/signup">
    //           <img className="test" src={signup} alt="" />
    //           <p>SignUp</p>
    //         </Link>
    //       </span>
    //     </div>
    //   ) : (
    //     <span onClick={handleLogout}>
    //       <div >
    //         <img className="test" src={login} alt=""  />
    //         <p>Logout</p>
    //       </div >
    //     </span >
    //   )}
    // </div>

  );
}

export default Header;
