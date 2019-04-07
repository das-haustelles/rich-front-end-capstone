import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const HeaderDisplay = styled.h2`
  font-family: Noto, Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #666;
  margin: 0 0 10px;
  text-align: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Header = ({ currentMonth, currentYear, handleNext, handlePrev }) => {
  const monthDisplay = moment().month(currentMonth).format('MMMM');
  const banner = monthDisplay + ' ' + currentYear; 
  return (
    <Div>
      <span>
        <button onClick= {(e) => handlePrev(e)}>Prev</button>
      </span>
      <span>
        <HeaderDisplay>{banner}</HeaderDisplay>
      </span>
      <span>
       <button onClick= {(e) => handleNext(e)}>Next</button>
      </span>
    </Div>
  )
}

export default Header; 