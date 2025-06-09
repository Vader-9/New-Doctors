

import './All doctors.css';
import { useState } from 'react';
import { specialityData, doctors } from './assets/assets';

function Alldoctors() {
  const [selectedSpeciality, setSelectedSpeciality] = useState('All');
  const [doctorInfo, setDoctorInfo] = useState(false);

  const handleFilter = (speciality) => {
    setSelectedSpeciality(speciality);
  };

  const handleDoctorInfo = () => {
    setDoctorInfo(true);
  };

  const filteredDoctors = selectedSpeciality === 'All'
    ? doctors
    : doctors.filter((doctor) => doctor.speciality === selectedSpeciality);

  
  if (doctorInfo) {
    return <p>omo</p>;
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
            <div className="doctor" key={index} onClick={handleDoctorInfo}>
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

