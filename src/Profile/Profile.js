import React from "react";
import "./Profile.css"
import Header from "../Header/Header";

function Profile() {
  return (
      <div className="profile-main">
        <div className="profile-page1">
            <h1>PROFILE</h1>
        </div>
        <div className="profile-page2">
            <div className="profile-cards">
              <div className="profile-card">
                <h2>User Profile</h2>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Name</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Registered email</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Registered mobile</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>college</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Address</p>
                <p className="profile-input"></p>
              </div>
              <div className="profile-card">
              <h2>Accommodations.</h2>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Hostel</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Members</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Amount Paid</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>college</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Address</p>
                <p className="profile-input"></p>
              </div>
              <div className="profile-card">
              <h2>Team Members</h2>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px"}}>Team Captain</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Member 2</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Member 3</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Member 4</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Member 5</p>
                <p className="profile-input"></p>
              </div>
              <div className="profile-card">
              <h2>Events Registered</h2>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Event Name</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Event Day</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Event Timing</p>
                <p className="profile-input"></p>
                <p style={{marginLeft: "10px" , fontSize : "12px", marginTop:"12px" , color : "#dadada"}}>Amount paid</p>
                <p className="profile-input">$12</p>


              </div>
            </div>
        </div>
        <Header /> 
      </div>
  );
}

export default Profile;
