import React from 'react';
import styled from 'styled-components';

const Inputs = styled.input`
  font-family: Noto, Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #666;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  background-color: #fff;
  border: 1px solid #bbb;
  background-position-x: 100%;
  border-radius: 3px;
  width: 100%;
  height: 37px;
`;

const Labels = styled.span`
  font-size: 12px;
  font-weight: bold;
  font-family: Noto, Helvetica, Arial, sans-serif;
  line-height: 12px;
  color: #666666;
  margin-bottom: 8px;
`;

const CheckInField = ({ checkIn, handleCheckInClick }) => {
  return (
    <React.Fragment>
      <Labels>Check In</Labels>
      <Inputs value={checkIn.format('DD MMM YYYY')} type="text" readOnly="readonly" onClick={() => handleCheckInClick()}></Inputs>
    </React.Fragment>
  );
};


export default CheckInField;
