import React from 'react';
import styled from 'styled-components';

const AvailableDay = styled.td`
  border: 1px solid #ccc;
  color: #444;
  line-height: 22px;
  text-align: center;
  margin: 0;
  padding: 0;
  background: #cef9b6;
  &:hover {
    background: #a8cc94;
  }
`;
const BookedDay = styled.td`
  border: 1px solid #ccc;
  color: #444;
  line-height: 22px;
  text-align: center;
  margin: 0;
  padding: 0;
  background: #ffa8a8;
  &:hover {
    background: #db8c8c;
  }
`;
const OtherDay = styled.td`
  border: 1px solid #ccc;
  color: #ccc9c9;
  line-height: 22px;
  text-align: center;
  margin: 0;
  padding: 0;
  background: #e2e2e2;
  &:hover {
    background: #efe1c9;
  }
`;

const Day = ({ date, currentDate, bookedDates, month, handleNewDate }) => {
  const unavailableDates = bookedDates.map((booking) => booking.format('YYYY-MM-DD'));
  const isBookedDate = unavailableDates.indexOf(date.format('YYYY-MM-DD')) === -1;
  const isCurrentDate = date.format('YYYY-MM-DD') === currentDate.format('YYYY-MM-DD');
  const isOtherDay = date.month() !== month;

  if (isOtherDay ) {
    return <OtherDay key={date.date()} onClick={(e) => handleNewDate(date)}>{date.date()}</OtherDay>
  } else if (!isBookedDate) {
    return <BookedDay key={date.date()} onClick={(e) => handleNewDate(date)}>{date.date()}</BookedDay>
  } else {
    return <AvailableDay key={date.date()} onClick={(e) => handleNewDate(date)}>{date.date()}</AvailableDay>
  }
}

export default Day;