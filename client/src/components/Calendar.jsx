import React from 'react';

class Calendar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const weekdays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    return(
      <div>
        <table>
          <th>
            <tr>
            {weekdays.map((day) => (<td id= {day}> {day}</td>))}
            </tr>
          </th>
          <tbody> </tbody>
        </table>
      </div>
    )
  }
}

export default Calendar;

// Calendar is a 7 x 7 table
  // Table header is static with weekday abbrieviations
  // Table body is dynamic and has 6 rows and 6 columns