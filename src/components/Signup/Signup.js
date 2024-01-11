import React, { useContext, useState } from "react";
import SignupCss from "./Signup.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { signupGoogle } from "../../services/operations/googleLogin";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { SendOtp, SignUP } from "../../services/operations/authAPI";
import UserContext from "../../ContextApi/UserContext";
import Header1 from '../../Header/Header'
import { Link } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const users = useContext(UserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eye,setEye]=useState(true);
  const handleGoogleLoginSuccess = async (tokenResponse) => {
    const accessToken = tokenResponse.access_token;
    console.log(accessToken);
    await signupGoogle(accessToken, navigate, users);
  };
  const { setSignData } = useContext(UserContext);
  const signUp = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });
  const submitHandler = async (event) => {
    event.preventDefault();
    setSignData({ firstName, lastName, email, password });
    await SendOtp(email, navigate);
  };

  const handleEyeClick =()=>{
      setEye(!eye)
  }



  return (
    <>
    {/* <div className="main"> */}

    <div className="Header1">
      <Header1 />
    </div>
    <form onSubmit={submitHandler} className={SignupCss.main} id="signup">
      <div className={SignupCss.box}>
        <h1 className={SignupCss.create}>Create new account</h1>
        <p className={SignupCss.already}>
          Already a member? <Link to="/login"> <span  className={SignupCss.log}>Login</span> </Link> 
        </p>

        <div className={SignupCss.name}>
          <div className={SignupCss.inputContainer2}>
            {" "}
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className={SignupCss.first}
            />
            <BsFillPersonFill className={SignupCss.logo1} />
          </div>
          <div className={SignupCss.inputContainer2}>
            {" "}
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className={SignupCss.first}
            />
            <BsFillPersonFill className={SignupCss.logo1} />
          </div>
        </div>

        <div className={SignupCss.inputContainer1}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className={SignupCss.email}
          />
          <BiLogoGmail className={SignupCss.logo2} />
        </div>
        <div className={SignupCss.inputContainer1}>
          <input
            type={eye ? "password" : "text"}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className={SignupCss.email}
          />
          <BsFillEyeFill onClick={handleEyeClick} className={SignupCss.logo2} />
        </div>
        <button type="submit" className={SignupCss.account}>
          Create Account
        </button>
        <div className={SignupCss.line}></div>

        <div className={SignupCss.signupDiv}>
        <FcGoogle className={SignupCss.logo3} />
          <div className={SignupCss.sign} onClick={signUp}>
            Sign up with Google
          </div>
        </div>
      </div>
    </form>
    </>
  );
  
};

export default Signup;
