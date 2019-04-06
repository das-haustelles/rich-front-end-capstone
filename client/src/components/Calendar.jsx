import React from 'react';
import Week from './Week';
import moment from 'moment';
import Header from './Header';
import generateDates from '../../utils/generateDates';
import styled from 'styled-components';

const Table = styled.table`
  background: #fff;
  border: 1px solid #ccc;
  text-align: center;
  color: #222;
  font-family: "Noto",Helvetica,Arial,sans-serif;
  font-size: 13px;
  width: 100%;
  border-collapse: collapse;
`
class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentDate: moment(),
      month: moment().month(),
      year: moment().year(),
      dates: [],
    }
  }

  componentDidMount() {
    const dates = generateDates(this.state.year, this.state.month);
    this.setState({
      dates: dates,
    });
  }

  handleNext() {
    const dateObject = moment([this.state.year, this.state.month]).add(1, 'month');
    const nextMonth = dateObject.month();
    const currentYear = dateObject.year();
    const dates = generateDates(currentYear, nextMonth);
    this.setState({
      month: nextMonth,
      year: currentYear,
      dates: dates,
    });
  }

  handlePrev() {
    const dateObject = moment.max(moment(), moment([this.state.year, this.state.month]).subtract(1, 'month'));
    const prevMonth = dateObject.month();
    const currentYear = dateObject.year();
    const dates = generateDates(currentYear, prevMonth);
    this.setState({
      month: prevMonth,
      year: currentYear,
      dates: dates,
    });
  }

  render() {
    const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return(
      <div>
        <Header currentMonth={this.state.month}
                currentYear={this.state.year}
                handleNext={this.handleNext.bind(this)}
                handlePrev={this.handlePrev.bind(this)} />
        <Table>
          <thead>
            <tr>{weekdays.map((day) => (<td>{day}</td>))}</tr>
          </thead>
          <tbody>
            {this.state.dates.map((week) => (
              <Week week={week}
                    month={this.state.month}
                    currentDate={this.state.currentDate}
                    bookedDates={this.props.bookedDates} />
            ))}
          </tbody>
        </Table>
          <div>
            <span>Available</span>
            <span>Sold Out</span>
          </div>
      </div>
    )
  }
}

export default Calendar;

