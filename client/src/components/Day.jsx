import React from 'react';
import styled from 'styled-components';

const CalendarDay = styled.td`
  border: 1px solid #ccc;
  color: #444;
  line-height: 22px;
  text-align: center;
  margin: 0;
  padding: 0;
`
const BookedDay = styled.td`
  border: 1px solid #ccc;
  color: #444;
  line-height: 22px;
  text-align: center;
  margin: 0;
  padding: 0;
  background: #444;
`

const Day = ({ date, currentDate, bookedDates }) => {
  const unavailableDates = bookedDates.map((booking) => booking.date());
  const isBookedDate = unavailableDates.indexOf(date) !== -1;
  const isCurrentDate = date === currentDate;
  return (
    <CalendarDay key={unavailableDates} >{date}</CalendarDay>
  )
}

export default Day;