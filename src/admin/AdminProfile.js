import React from 'react'
import { Link } from 'react-router-dom'
function admin(props) {
  return (
    <div>
      <div className="admin-profile">
        <h1>Name : {props.adminName}</h1>
        <h1>Roll No : {props.adminRollNo}</h1>
      </div>

      <div className="addevent">
      <Link to={"/Admin/AddEvent"}><button type="button" class="btn btn-success">Add Event</button></Link>
      <br />
      <Link to={"/Admin/ViewEvents"}><button type="button" class="btn btn-success mt-3">View Events</button></Link>
      </div>
    </div>
  )
}

export default admin
