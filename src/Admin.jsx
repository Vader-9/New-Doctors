import { assets } from './assets/assets';
import { doctors } from './assets/assets';
import './Admin.css'
import { useState } from 'react';

function Admin() {

  const [dash, setDash] = useState("")

  const allDoctors = <div className="doc-img">
    {doctors.map((doctor, index) => (
      <div className="doctor" key={index}>
        <img src={doctor.image} alt={doctor.name} />
        <div className="doc-info">
          <li>Available</li>
          <h3>{doctor.name}</h3>
          <p>{doctor.speciality}</p>
        </div>
      </div>
    ))}
  </div>

  const addDoctors =

    <div className='addDoctors'>

      <div className="profile-pic">
        <img src={assets.upload_area} alt="" />
        <div className="upload-doc">
          <p>Upload doctor</p>
          <p>picture</p>
        </div>
      </div>
      <div className="addDoctors-input">
        <div className="right-input">
          <p>Doctor name</p>
          <div className="rightInput">
            <input type="text" placeholder='Name' />
          </div>
          <p>Doctor Email</p>
          <div className="rightInput">
            <input type="text" placeholder='Your email' />
          </div>
          <p>Doctor Password</p>
          <div className="rightInput">
            <input type="text" placeholder='Password' />
          </div>
          <p>Experience</p>
          <div className="rightInput">
            <input type="text" placeholder='Experience' />
          </div>
          <p>Fees</p>
          <div className="rightInput">
            <input type="text" placeholder='Your fees' />
          </div>

        </div>
        <div className="left-input">
          <p>Speciality</p>
          <div className="leftInput">
            <input type="text" placeholder='General physician' />
          </div>
          <p>Education</p>
          <div className="leftInput">
            <input type="text" placeholder='Education' />
          </div>
          <p>Address</p>
          <div className="leftInput">
            <input type="text" placeholder='Address 1' />
          </div>

          <div className="leftInput">
            <input type="text" placeholder='Address 2' />
          </div>


        </div>
      </div>
      
        <p>About me</p>
        <div className="about-text">
          <p>write about yourself</p>
        </div>
       
       <button id='specbtn'>Add doctor</button>

    </div>

  return (
    <div className="Admin ">
      <div className="admin-header">
        <div className="admin-header-img">
          <img src={assets.admin_logo} alt="Logo" />
          <button id='Admin-header-button'>Admin</button>
        </div>
        <button>Logout</button>
      </div>
      <div id="admin-display">
        <div className="sidebar">
          <div className="side-bar-items">
            <img src={assets.home_icon} alt="" />
            <p>Dashboard</p>
          </div>
          <div className="side-bar-items">
            <img src={assets.appointment_icon} alt="" />
            <p>Appointment</p>
          </div>
          <div className="side-bar-items" onClick={() => setDash(addDoctors)}>
            <img src={assets.add_icon} alt="" />
            <p>Add Doctor</p>
          </div>
          <div className="side-bar-items" onClick={() => setDash(allDoctors)}>
            <img src={assets.people_icon} alt="" />
            <p>Doctors List</p>
          </div>
        </div>
        <div className="admin-display">
          {dash}
        </div>
      </div>
    </div>
  )
}

export default Admin