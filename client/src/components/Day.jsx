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
`;
const BookedDay = styled.td`
  border: 1px solid #ccc;
  color: #444;
  line-height: 22px;
  text-align: center;
  margin: 0;
  padding: 0;
  background: #ffa8a8;
`;
const OtherDay = styled.td`
  border: 1px solid #ccc;
  color: #e2e2e2;
  line-height: 22px;
  text-align: center;
  margin: 0;
  padding: 0;
  background: #e2e2e2;
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