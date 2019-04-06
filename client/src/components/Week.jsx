import React from 'react';
import Day from './Day';
import styled from 'styled-components';

const CalendarWeek = styled.tr`
  border: 1px solid #ccc;
  color: #444;
  line-height: 22px;
  text-align: center;
`

const Week = ({ week, currentDate, bookedDates, month, handleNewDate }) => {
  return (
    <CalendarWeek>
      {week.map((date) => (
        <Day date={date}
             month={month}
             currentDate={currentDate}
             bookedDates={bookedDates}
             handleNewDate={handleNewDate}/>
      ))}
    </CalendarWeek>
  )
}

export default Week;