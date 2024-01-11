import React, { useContext, useState } from "react";
import loginRobot from "./images/img1.png";
import mail_icon from "./images/gmail.svg";
import { FcGoogle } from "react-icons/fc";
import eye_icon from "./images/eye.svg";
import google_icon from "./images/google.svg";
import rectangle from "./images/Rectangle 166 (1).png";
import "./Mittal.css";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { signinGoogle } from "../services/operations/googleLogin";
import { LogIN } from "../services/operations/authAPI";
import UserContext from "../ContextApi/UserContext";

function Mittal() {

  
      const users = useContext(UserContext);
    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

    const handleGoogleLoginSuccess = async (tokenResponse) => {
      try {
        const accessToken = tokenResponse.access_token;
        console.log(accessToken);
        await signinGoogle(accessToken,navigate,users);

      } catch (error) {
        toast.error("error while signing in with google");
      }
  	};
  	const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });
    const submitHandler = async (e) => {
      e.preventDefault();
      const data = {email, password};
      const response = await LogIN(data, navigate,users);
      setUser(response?.data.user)
      if(response){
        toast.success("Login Successful!")
        const date = new Date();
        date.setDate(date.getDate() + 30)
  // const token = response.data.userToReturn.token;
  // setCookie("token", token, {path:'/', expires:date});
      }
    }
  return (
    <div className="mittal-main">
      <div className="mittal-left">
        <img src={loginRobot} alt="" />
      </div>

      <div className="mittal-right">
        <div className="mittal-right-1">
          <h2>Login</h2>
          <div className="mittal-dot">.</div>
        </div>
        <div className="mittal-right-2">
          <form onSubmit={submitHandler} className="mittal-loginContainer" id="login">
            <div className="mittal-input">
              <input
                id="mittal-email"
                name="email"
                type="email"
                value={email}
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
              />
              <img src={mail_icon} alt="" />
            </div>

            <div className="mittal-input">
              <input
                type={showPassword ? "text" : "password"}
                id="pass"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <img className="mittal-mail-pic" src={eye_icon} onClick={togglePasswordVisibility} alt="" />
            </div>
            <Link to="/forgot-password">
            <div className="mittal-forget">Forget Password?</div>
            </Link>

            <button type="submit" className="account">
          Login
        </button>
            <div className="signupDiv">
            <FcGoogle className="logo3" />
          <div className="sign" onClick={login}>
            Login with Google
          </div>
        </div>

            <div className="mittal-hrtag">
              
              <hr />
            </div>
          </form>
        </div>
      </div>

      <div className="mittal-wrapper-div">
      </div>
    </div>
  );
}

export default Mittal;
