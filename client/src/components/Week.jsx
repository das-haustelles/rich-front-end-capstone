import React from 'react';
import Day from './Day';

const Week = ({ week, currentDate }) => {
  return (
    <div>
      {week.map((date) => (
        <Day date={date.date()}
                 currentDate={currentDate.date()}/>
      ))}
    </div>
  )
}

export default Week;