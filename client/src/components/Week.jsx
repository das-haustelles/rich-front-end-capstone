import React from 'react';
import Day from './Day';

const Week = ({ week, currentDate }) => {
  return (
    <tr>
      {week.map((date) => (
        <Day date={date.date()}
                 currentDate={currentDate.date()}/>
      ))}
    </tr>
  )
}

export default Week;