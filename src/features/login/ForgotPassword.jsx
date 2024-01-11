import React, { useState } from "react";
import mail_icon from "./images/gmail1.svg";
import "./forget.css";
import { getResetPasswordToken } from "../../services/operations/authAPI";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [email,setEmail] = useState("") ; 

  const handleSendOTP = () => {
    console.log("Sending OTP to:", email);
    setOtpSent(true);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(email);
    await getResetPasswordToken(email, setEmailSent);
  };

  return (
    <div className="forgot-main">
      <div className="forgot-password-container">
        <div className="forgot-right-1">
          <h2>Forgot Password</h2>
          <div className="forgot-dot">?</div>
        </div>
        <h6 className="forgot-h6tag">
          Please enter the OTP sent to your registered email address.
        </h6>
        <div className="forgot-input">
          <input
            id="email"
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

        <h6 className="forgot-h6tag">
          An OTP (One Time Password) will be sent.
        </h6>
        {!otpSent ? (
       <Link to='/verifyPass' className="forgot-login-button">   <button onClick={submitHandler} className="forgot-login-button">
          Send OTP
        </button></Link>
        ) : (
          <div>
            {/* <p className="forgot-otp-sent-text">
              An OTP has been sent to your email address. Please check your
              inbox and enter the OTP below.
            </p> */}
            {/* Include the OTP input and verification logic here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
