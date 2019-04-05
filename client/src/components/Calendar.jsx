import React from 'react';
import Week from './Week';
import moment from 'moment';
import Header from './Header';
import generateFirstWeek from '../../utils/generateFirstWeek';
import generateDates from '../../utils/generateDate';

class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentDate: moment(),
      month: 0,
      year: 0,
      dates: [],
    }
  }

  componentDidMount() {
    const currentDate = moment();
    const currentYear = currentDate.year();
    const currentMonth = currentDate.month();
    const dates = generateDates(currentYear, currentMonth);
    this.setState({
      currentDate: currentDate,
      month: currentMonth,
      year: currentYear,
      dates: dates,
    });
  }

  handleNext() {
    const currentMonth = moment().month(this.state.month);
    const nextMonth = currentMonth.add(1, 'month').month();
    const currentYear = currentMonth.add(1, 'month').year();
    console.log(currentMonth.add(1, 'month').year());
    const dates = generateDates(this.state.year, nextMonth);
    this.setState({
      month: nextMonth,
      dates: dates,
      year: currentYear,
    });

  }

  render() {
    const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return(
      <div>
        <Header currentMonth={this.state.month}
                currentYear={this.state.year}
                handleNext={this.handleNext.bind(this)}/>
        <table>
          <thead>
            <th>{weekdays.map((day) => (<td>{day}</td>))}</th>
          </thead>
          <tbody>
            {this.state.dates.map((week) => (
              <tr><Week week={week}
                        currentDate={this.state.currentDate} /></tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Calendar;

