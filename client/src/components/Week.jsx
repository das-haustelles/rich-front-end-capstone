import React from 'react';
import Day from './Day';

const Week = ({ week, currentDate }) => {
  return (
    <div>
      {week.map((date) => (
        <td><Day date={date.date()}
                 currentDate={currentDate.date()}/></td>
      ))}
    </div>
  )
}

export default Week;