import React from 'react';
import Week from './Week';
import moment from 'moment';

class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      month: 0,
      year: 0,
      dates: [],
    }
  }

  componentDidMount() {
    const currentDate = moment();
    const currentYear = currentDate.year();
    const currentMonth = currentDate.month();
    const dates = this.generateDates(currentYear, currentMonth);
    this.setState({
      month: currentMonth,
      year: currentYear,
      dates: dates,
    });
  }

  generateFirstWeek (year, month) {
    const firstWeek = []
    const currentYear = moment().year(year);
    const currentMonth = moment().month(month);
    const firstDayIndex = parseInt(moment().year(year).month(month).startOf('month').format('d'));
    
    for (var i = 0; i < 7; i += 1) {
      const firstDayOfMonth = moment().year(year).month(month).startOf('month');

      if (i < firstDayIndex) {
        firstWeek.push(firstDayOfMonth.subtract((firstDayIndex - i), 'days'));
      } else if (i === firstDayIndex) {
        firstWeek.push(firstDayOfMonth);
      } else {
        firstWeek.push(firstDayOfMonth.add((i - firstDayIndex), 'days'));
      }
    }

    return firstWeek;
  }

  generateDates(year, month) {
    const dates = [];
    const firstWeek = this.generateFirstWeek(year, month);
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
    const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return(
      <div>
        <table>
          <thead>
            <th>{weekdays.map((day) => (<td>{day}</td>))}</th>
          </thead>
          <tbody>
            {this.state.dates.map((week) => (
              <tr><Week week={week} /></tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Calendar;


