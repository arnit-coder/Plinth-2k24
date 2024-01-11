import React, { useState } from "react";
import "./Profile.css";
import img1 from "./images/img1.png";

function Profile() {
  const [Phone, setPhone] = useState("");
  const [collegeName, setcollegeName] = useState("");
  const [attendingStatus, setAttendingStatus] = useState(null);

  return (
    <div className="profile-main">
      <div className="profile-left">
        <img src={img1} alt="" />
      </div>

      <div className="profile-right">
        <div className="profile-right-1">
          <h2>Profile</h2>
          <div className="profile-dot">.</div>
        </div>
        <div className="profile-right-2">
          <form className="profile-loginContainer" id="login">
            <h6 className="profile-h6tag">Phone Number.</h6>
            <div className="profile-input">
              <input
                id="Phone"
                name="Phone"
                type="Number"
                value={Phone}
                required
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                placeholder="Enter your Phone No."
              />
            </div>
            <h6 className="profile-h6tag">Name of your college.</h6>
            <div className="profile-input">
              <input
                id="Phone"
                name="college-Name"
                type="text"
                value={collegeName}
                required
                onChange={(e) => {
                  setcollegeName(e.target.value);
                }}
                placeholder="Enter your college."
              />
            </div>

            <h6 className="profile-h6tag">Are you a participant?</h6>
            <div className="profile-checkbox">
              <label>
                <input
                  type="radio"
                  name="attendingStatus"
                  value="Yes"
                  checked={attendingStatus === "Yes"}
                  onChange={() => setAttendingStatus("Yes")}
                />
                Yes
              </label>

              <label>
                <input
                  type="radio"
                  name="attendingStatus"
                  value="No"
                  checked={attendingStatus === "No"}
                  onChange={() => setAttendingStatus("No")}
                />
                No
              </label>
            </div>

            <div className="profile-hrtag">
              <hr />
            </div>

            <button type="submit" className="profile-login-button">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="profile-wrapper-div"></div>
    </div>
  );
}

export default Profile;
