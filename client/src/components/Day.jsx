import React from 'react';

const Day = ({ date, currentDate }) => {
  const isCurrentDate = date === currentDate;
  const dayClass = isCurrentDate ? 'calendar-day-today' : 'calendar-day'
  return (
    <td key={date} className={dayClass} >{date}</td>
  )
}

export default Day;