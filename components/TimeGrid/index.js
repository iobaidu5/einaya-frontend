import React from 'react';

const TimeGrid = ({ selectedTime, handleTimeSelection }) => {
  const times = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
  ];

  const handleTimeClick = (time) => {
    handleTimeSelection(time);
  };

  return (
    <div className="time-grid">
      {times.map(time => (
        <label key={time} className={`time-option ${selectedTime === time ? 'selected' : ''}`}>
          <input
            type="radio"
            name="selectedTime"
            value={time}
            checked={selectedTime === time}
            onChange={() => handleTimeClick(time)}
          />
          <div className="time-grid-inside">
          <span className='time-option--time'>{time}</span>
          <span className='time-option--availability'>Avaliable</span>
          </div>
        </label>
      ))}
    </div>
  );
};

export default TimeGrid;
