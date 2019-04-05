import React from 'react';
import moment from 'moment';

const Header = ({ currentMonth, currentYear, handleNext, handlePrev }) => {
  const monthDisplay = moment().month(currentMonth).format('MMMM');
  const banner = monthDisplay + ' ' + currentYear; 
  return(
    <div>
      <button className="calendar-button button-prev" onClick= {() => handlePrev()}> Prev </button>
      <h2>{banner}</h2>
      <button className="calendar-button button-next" onClick= {() => handleNext()}> Next </button>
    </div>
  )
}

export default Header; 