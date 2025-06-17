import './All doctors.css';
import WeekDays from './weekdays';
import { useState } from 'react';
import { specialityData, doctors } from './assets/assets';

function Alldoctors() {
  const [selectedSpeciality, setSelectedSpeciality] = useState('All');
  const [doctorInfo, setDoctorInfo] = useState('');
  
  
  


  const handleFilter = (speciality) => {
    setSelectedSpeciality(speciality);
  };

  

  const filteredDoctors = selectedSpeciality === 'All'
    ? doctors
    : doctors.filter((doctor) => doctor.speciality === selectedSpeciality);


   
const relatedDoc = doctors.filter((doc)=>{
  return doc.speciality === doctorInfo.speciality 
})



  if (doctorInfo) {
     
     return (
      <div key={doctorInfo._id} className='doctorInfo'>
        <div className="doctorInfo-Header">
          <img src={doctorInfo.image} alt="" />
          <div className="doctorInfo-Header-writeup">
            <h2>{doctorInfo.name}</h2>
            <div className="doctorInfo-degree">
              <div className="degreeInfo">
                <p>{doctorInfo.degree}-{doctorInfo.speciality} <button>{doctorInfo.experience}</button></p>
              </div>
              <h3>About</h3>
              <p>{doctorInfo.about}</p>
              <p>Appointment fee:${doctorInfo.fees}</p>
            </div>
          </div>
        </div>
        <div className="doctorInfo-appointment">
           <div className="Bookingslots">
            <h4>Booking slots</h4>
            <div className="week-days">
           <WeekDays></WeekDays>
            </div>
           </div>
        </div>
        <div className="doctorInfo-Related">
          <div className="doctorInfo-Related-h1">
            <h1>Related Doctors</h1>
            <p>Simply browse through our extensive list of trusted doctors.</p>
          </div>
           <div className="doctorInfo-Related-Doctors">
            {relatedDoc.map((doctor, index) => (
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
        </div>
     
      </div>
    )

  }


  return (
    <div className='all-doctors'>
      <p>Browse through the doctors specialist.</p>

      <div className="doc-filter">
        <div className="doc-btns">
          <button className='doc-btn' onClick={() => handleFilter('All')}>
            All
          </button>

          {specialityData.map((doc, index) => (
            <button
              className='doc-btn'
              key={index}
              onClick={() => handleFilter(doc.speciality)}
            >
              {doc.speciality}
            </button>
          ))}
        </div>

        <div className="doc-img">
          {filteredDoctors.map((doctor, index) => (
            <div className="doctor" key={index} onClick={() => setDoctorInfo(doctor)}>
              <img src={doctor.image} alt={doctor.name} />
              <div className="doc-info">
                <li>Available</li>
                <h3>{doctor.name}</h3>
                <p>{doctor.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Alldoctors;

