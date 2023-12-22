import axios from "axios";
import React, { useContext } from "react";
import { CreateCompetition } from "../services/operations/competitionAPI";
import UserContext from "../ContextApi/UserContext";

function AddEvent() {
  const [value, setValue] = React.useState({
    clubOrganizingName: "",
    time: "",
    nameOfCompetition: "",
    image: "",
    soloOrTeam: "",
    about: "",
    prize: "",
    rulebook: "",
    contacts: [{ name: "", number: "" }],
    teams: "",
    minTeamMember: "",
    maxTeamMember: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await CreateCompetition(value, localStorage.getItem("Plinth2k24AdminToken"));
  };

  return (
    <div className="container mt-3">
      <form onSubmit={handleSubmit}>
        <h1 className="mb-4">Enter The Details</h1>

        {/* Club Organizing Name */}
        <div className="mb-3">
          <label htmlFor="clubOrganizingName" className=" imp-admin">Club Organizing Name</label>
          <input
            required
            type="text"
            id="clubOrganizingName"
            className="form-control"
            onChange={(e) => setValue({ ...value, clubOrganizingName: e.target.value })}
            value={value.clubOrganizingName}
          />
        </div>

        {/* Time */}
        <div className="mb-3">
          <label htmlFor="time" className=" imp-admin">Time</label>
          <input
            required
            type="time"
            id="time"
            className="form-control"
            onChange={(e) => setValue({ ...value, time: e.target.value })}
            value={value.time}
          />
        </div>

        {/* Name of Competition */}
        <div className="mb-3">
          <label htmlFor="nameOfCompetition" className=" imp-admin">Name of Competition</label>
          <input
            required
            type="text"
            id="nameOfCompetition"
            className="form-control"
            onChange={(e) => setValue({ ...value, nameOfCompetition: e.target.value })}
            value={value.nameOfCompetition}
          />
        </div>

        {/* Image */}
        <div className="mb-3">
          <label htmlFor="image" className=" imp-admin">Image URL</label>
          <input
            required
            type="text"
            id="image"
            className="form-control"
            onChange={(e) => setValue({ ...value, image: e.target.value })}
            value={value.image}
          />
        </div>

        {/* Solo or Team */}
        <div className="mb-3">
          <label htmlFor="soloOrTeam" className=" imp-admin">Solo or Team</label>
          <input
            required
            type="text"
            id="soloOrTeam"
            className="form-control"
            onChange={(e) => setValue({ ...value, soloOrTeam: e.target.value })}
            value={value.soloOrTeam}
          />
        </div>

        {/* About */}
        <div className="mb-3">
          <label htmlFor="about" className=" imp-admin">About</label>
          <input
            required
            type="text"
            id="about"
            className="form-control"
            onChange={(e) => setValue({ ...value, about: e.target.value })}
            value={value.about}
          />
        </div>

        {/* Prize */}
        <div className="mb-3">
          <label htmlFor="prize" className=" imp-admin">Prize</label>
          <input
            required
            type="text"
            id="prize"
            className="form-control"
            onChange={(e) => setValue({ ...value, prize: e.target.value })}
            value={value.prize}
          />
        </div>

        {/* Rulebook */}
        <div className="mb-3">
          <label htmlFor="rulebook" className=" imp-admin">Rulebook URL</label>
          <input
            required
            type="text"
            id="rulebook"
            className="form-control"
            onChange={(e) => setValue({ ...value, rulebook: e.target.value })}
            value={value.rulebook}
          />
        </div>

        {/* Contacts section */}
        <div className="mb-3">
          <label className=" imp-admin">Contacts</label>
          <div className="input-group">
            <span className="input-group-text" id="contactNameAddon">Name</span>
            <input
              required
              type="text"
              className="form-control"
              aria-label="Contact Name"
              aria-describedby="contactNameAddon"
              onChange={(e) => setValue({ ...value, contacts: [{ name: e.target.value, number: value.contacts[0].number }] })}
              value={value.contacts[0].name}
            />
          </div>
          <div className="input-group mt-2">
            <span className="input-group-text" id="contactNumberAddon">Number</span>
            <input
              required
              type="number"
              className="form-control"
              aria-label="Contact Number"
              aria-describedby="contactNumberAddon"
              onChange={(e) => setValue({ ...value, contacts: [{ name: value.contacts[0].name, number: e.target.value }] })}
              value={value.contacts[0].number}
            />
          </div>
        </div>

        {/* Teams */}
        <div className="mb-3">
          <label htmlFor="teams" className=" imp-admin">Teams</label>
          <input
            required
            type="text"
            id="teams"
            className="form-control"
            onChange={(e) => setValue({ ...value, teams: e.target.value })}
            value={value.teams}
          />
        </div>

        {/* Min Team Member */}
        <div className="mb-3">
          <label htmlFor="minTeamMember" className=" imp-admin">Min Team Member</label>
          <input
            required
            type="number"
            id="minTeamMember"
            className="form-control"
            onChange={(e) => setValue({ ...value, minTeamMember: e.target.value })}
            value={value.minTeamMember}
          />
        </div>

        {/* Max Team Member */}
        <div className="mb-3">
          <label htmlFor="maxTeamMember" className=" imp-admin">Max Team Member</label>
          <input
            required
            type="number"
            id="maxTeamMember"
            className="form-control"
            onChange={(e) => setValue({ ...value, maxTeamMember: e.target.value })}
            value={value.maxTeamMember}
          />
        </div>

        {/* Submit Button */}
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Save Details
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEvent;