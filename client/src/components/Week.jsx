import React from 'react';
import Day from './Day';
import styled from 'styled-components';

const CalendarWeek = styled.tr`
  border: 1px solid #ccc;
  color: #444;
  line-height: 22px;
  text-align: center;
`

const Week = ({ week, currentDate }) => {
  return (
    <CalendarWeek>
      {week.map((date) => (
        <Day date={date.date()}
                 currentDate={currentDate.date()}/>
      ))}
    </CalendarWeek>
  )
}

export default Week;