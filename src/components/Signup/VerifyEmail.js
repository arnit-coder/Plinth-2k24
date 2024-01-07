import React, { useState, useEffect, useContext } from "react";
import { BiArrowBack } from "react-icons/bi";
import OTPInput from "react-otp-input";
import { RxCountdownTimer } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../ContextApi/UserContext";
import { SignUP, SendOtp } from "../../services/operations/authAPI";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const { signData, setUser, user } = useContext(UserContext);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!signData) {
  //     navigate("/signup");
  //   }
  // }, []);
  const submitHandler = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password } = signData;
    const body = { firstName, lastName, email, password, otp };

    const response = await SignUP(body, navigate);
    if (response) {
      setUser(response.data.user);
      console.log(user);
    }
  };
  return (
    <div className="min-h-[calc(100vh-3.5rem)] grid place-items-center">
      <div className="max-w-[500px] p-4 lg:p-8">
        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem] text-center">
          Verify Email
        </h1>
        <p className="text-[1.125rem] leading-[1.625rem] my-4 text-richblack-100">
          A verification code has been sent to you. Enter the code below
        </p>
        <form onSubmit={submitHandler}>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => (
              <input
                {...props}
                placeholder="-"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-[48px] lg:w-full border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
              />
            )}
          />
          <button
            type="submit"
            className="w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"
          >
            Verify Email
          </button>
        </form>
        <div className="mt-6 flex items-center justify-between">
          <Link to="/signup">
            <p className="text-richblack-5 flex items-center gap-x-2">
              <BiArrowBack /> Back To Signup
            </p>
          </Link>
          <button
            className="flex items-center text-blue-100 gap-x-2"
            onClick={async () => await SendOtp(signData.email, navigate)}
          >
            <RxCountdownTimer />
            Resend it
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
