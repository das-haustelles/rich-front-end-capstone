import React from 'react';
import Day from './Day';

const Week = ({week}) => {
  return (
    <div>
      {week.map((date) => (
        <td><Day date={date.date()}/></td>
      ))}
    </div>
  )
}

export default Week;