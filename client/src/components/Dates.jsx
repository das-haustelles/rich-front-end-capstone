import React from 'react';

const Dates = () => {
  const date1 = [1, 2, 3, 4, 5, 6, 7];
  const date2 = date1.map((date) => (date + 7));
  const date3 = date2.map((date) => (date + 7));
  const date4 = date3.map((date) => (date + 7));
  const date5 = date4.map((date) => (date + 7));
  const date6 = date5.map((date) => (date + 7));
  return (
    <tbody>
      <tr>{date1.map((date) => (<td id={date}>{date}</td>))}</tr>
      <tr>{date2.map((date) => (<td id={date}>{date}</td>))}</tr>
      <tr>{date3.map((date) => (<td id={date}>{date}</td>))}</tr>
      <tr>{date4.map((date) => (<td id={date}>{date}</td>))}</tr>
      <tr>{date5.map((date) => (<td id={date}>{date}</td>))}</tr>
      <tr>{date6.map((date) => (<td id={date}>{date}</td>))}</tr>
    </tbody>
  )
}

export default Dates;