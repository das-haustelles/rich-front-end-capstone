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

const Day = ({ date, currentDate }) => {
  const isCurrentDate = date === currentDate;
  const dayClass = isCurrentDate ? 'calendar-day-today' : 'calendar-day'
  return (
    <CalendarDay key={date} className={dayClass} >{date}</CalendarDay>
  )
}

export default Day;