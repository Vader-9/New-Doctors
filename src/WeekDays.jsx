  import React, { useState, useEffect } from 'react';
  import './WeekDays.css';

function WeekDays() {
  const [weekData, setWeekData] = useState([]);

  useEffect(() => {
    const currentDate = new Date();
    const daysList = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(currentDate.getTime() + i * 24 * 60 * 60 * 1000);
      const day = date.toLocaleString('en-US', { weekday: 'short' }); // e.g., 'Tue'
      const dateNum = date.getDate(); // e.g., 16
      daysList.push(`${day}${dateNum}`);
    }

    setWeekData(daysList);
  }, []);

  

  return (
    <div>
      
      <div className='weeks'>
        {weekData.map((entry, index) => (
          <div className='week'>
            {entry}
          </div>
         
        ))}
      </div>
    </div>
  );
}

export default WeekDays;
