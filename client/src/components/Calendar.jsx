import React from 'react';
import Dates from './Dates';
import moment from 'moment';

class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      month: 0,
      year: 0,
    }
  }

  componentDidMount() {
    const currentDate = moment();
    this.setState({
      month: currentDate.month(),
      year: currentDate.year(),
    });
    console.log(this.generateDates());
  }

  getFirstDayOfMonth() {
    const firstDay = new Date(this.state.year, this.state.month, 1);
    this.setState({firstDay: firstDay});
  }

  generateFirstWeek () {
    const firstWeek = []
    const currentYear = moment().year();
    const currentMonth = moment().month();
    const firstDayIndex = parseInt(moment().startOf('month').format('d'));
    
    for (var i = 0; i < 7; i += 1) {
      const firstDayOfMonth = moment().startOf('month');

      if (i < firstDayIndex) {
        firstWeek.push(firstDayOfMonth.subtract((firstDayIndex - i), 'days'));
      } else if (i === firstDayIndex) {
        firstWeek.push(moment().startOf('month'));
      } else {
        firstWeek.push(firstDayOfMonth.add((i - firstDayIndex), 'days'));
      }
    }
  
    return firstWeek;
  }

  generateDates () {
    const dates = [];
    const firstWeek = this.generateFirstWeek();
    dates.push(firstWeek);

    for (var i = 0; i < 5; i += 1) {
      const week = dates[dates.length - 1];
      const nextWeek = week.map((date) => {
        return moment(date).add(7, 'days');
      });
      dates.push(nextWeek);
    }

    return dates;
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


