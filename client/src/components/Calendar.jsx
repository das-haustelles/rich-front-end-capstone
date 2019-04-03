import React from 'react';
import Dates from './Dates';
import moment from 'moment';

class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      month: 0,
      year: 0,
      firstDay: 0,
    }
  }

  componentDidMount() {
    const currentDate = moment();
    this.setState({
      month: currentDate.month(),
      year: currentDate.year(),
      firstDay: currentDate.day(),
    });
  }

  getFirstDayOfMonth() {
    const firstDay = new Date(this.state.year, this.state.month, 1);
    this.setState({firstDay: firstDay});
  }

  render() {
    const weekdays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    return(
      <div>
        
      </div>
    )
  }
}

export default Calendar;

// Calendar is a 7 x 7 table
  // Table header is static with weekday abbrieviations
  // Table body is dynamic and has 6 rows and 6 columns

// Date Object
//// 0 - 11 represents month of the year
//// 0 - 30/31 represents day of the month
