import React, { useState, useRef, useEffect } from "react";
import "./verify.css";

const MobileOTPForm = () => {
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([0, 1, 2, 3, 4, 5].map(() => React.createRef()));

  const handlePaste = (ev) => {
    const clip = ev.clipboardData.getData("text").trim();
    if (!/^\d{6}$/.test(clip)) {
      ev.preventDefault();
      return;
    }

    const characters = clip.split("").slice(0, 6);
    const newOtpValues = characters.concat(
      Array(6 - characters.length).fill("")
    );
    setOtpValues(newOtpValues);
  };

  const handleInput = (index, value) => {
    if (/^\d$/.test(value)) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;

      if (index < 5 && value) {
        focusNextInput(index);
      }

      setOtpValues(newOtpValues);
    }
  };

  const focusNextInput = (currentIndex) => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < 6 && inputRefs.current[nextIndex].current) {
      inputRefs.current[nextIndex].current.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace") {
      handleBackspace(index);
    }
  };

  const handleBackspace = (index) => {
    if (index > 0) {
      const newOtpValues = [...otpValues];
      newOtpValues[index - 1] = "";
      setOtpValues(newOtpValues);
      inputRefs.current[index - 1].current.focus();
    } else if (index === 0) {
      const newOtpValues = ["", ...otpValues.slice(0, 5)];
      setOtpValues(newOtpValues);
      inputRefs.current[0].current.focus();
    }
  };

  useEffect(() => {
    const otpValue = otpValues.join("");
    console.log("Verification Code:", otpValue);
  }, [otpValues]);

  return (
    <div className="verify-main">
      <div className="verify-section">
        <form className="mobile-otp">
          <div className="verify-right-1">
            <h2>Verify Email</h2>
            <div className="verify-dot">.</div>
          </div>
          <h6 className="verify-h6tag">
            Please enter the OTP sent to your registered email address.
          </h6>
          <div className="verify-otp-container">
            {otpValues.map((value, index) => (
              <input
                key={index}
                type="text"
                className="verift-otp-input"
                pattern="\d"
                maxLength="1"
                value={value}
                onPaste={handlePaste}
                onInput={(e) => handleInput(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={inputRefs.current[index]}
              />
            ))}
          </div>
          <button type="submit" className="verify-login-button">
              Verify
            </button>
        </form>
      </div>
    </div>
  );
};

export default MobileOTPForm;
