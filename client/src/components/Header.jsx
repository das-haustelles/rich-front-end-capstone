import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const HeaderDisplay = styled.h2`
  font-family: "Noto",Helvetica,Arial,sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 10px;
  text-align: center;
`;

const Header = ({ currentMonth, currentYear, handleNext, handlePrev }) => {
  const monthDisplay = moment().month(currentMonth).format('MMMM');
  const banner = monthDisplay + ' ' + currentYear; 
  return(
    <div>
      <button className="calendar-button button-prev" onClick= {() => handlePrev()}> Prev </button>
      <HeaderDisplay>{banner}</HeaderDisplay>
      <button className="calendar-button button-next" onClick= {() => handleNext()}> Next </button>
    </div>
  )
}

export default Header; 