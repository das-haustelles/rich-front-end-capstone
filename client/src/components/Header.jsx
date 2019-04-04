import React from 'react';
import moment from 'moment';

const Header = ({ currentMonth, currentYear, handleNext }) => {
  const monthDisplay = moment().month(currentMonth).format('MMM');
  const banner = monthDisplay + ' ' + currentYear; 
  return(
    <div>
      <button> Prev </button>
      <h2>{banner}</h2>
      <button onClick= {() => handleNext()}> Next </button>
    </div>
  )
}

export default Header; 