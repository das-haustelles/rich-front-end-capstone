import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Week from './Week';
import Header from './Header';
import generateDates from '../../utils/generateDates';

const Table = styled.table`
  font-family: Noto, Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #666;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  background: #fff;
  border: 1px solid #ccc;
  text-align: center;
  width: 100%;
  border-collapse: collapse;
`;
class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment(),
      month: moment().month(),
      year: moment().year(),
      dates: [],
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  componentDidMount() {
    const { year, month } = this.state;
    const dates = generateDates(year, month);
    this.setState({
      dates,
    });
  }

  handleNext() {
    const { year, month } = this.state;
    const dateObject = moment([year, month]).add(1, 'month');
    const nextMonth = dateObject.month();
    const currentYear = dateObject.year();
    const dates = generateDates(currentYear, nextMonth);
    this.setState({
      month: nextMonth,
      year: currentYear,
      dates,
    });
  }

  handlePrev() {
    const { year, month } = this.state;
    const dateObject = moment.max(moment(), moment([year, month]).subtract(1, 'month'));
    const prevMonth = dateObject.month();
    const currentYear = dateObject.year();
    const dates = generateDates(currentYear, prevMonth);
    this.setState({
      month: prevMonth,
      year: currentYear,
      dates,
    });
  }

  render() {
    const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const {
      year, month, currentDate, dates,
    } = this.state;
    const { bookedDates, handleNewDate } = this.props;

    return (
      <div>
        <Header
          currentMonth={month}
          currentYear={year}
          handleNext={this.handleNext}
          handlePrev={this.handlePrev}
        />
        <Table>
          <thead>
            <tr>{weekdays.map(day => <td>{day}</td>)}</tr>
          </thead>
          <tbody>
            {dates.map(week => 
              <Week week={week}
                month={month}
                currentDate={currentDate}
                bookedDates={bookedDates}
                handleNewDate={handleNewDate} />)}
          </tbody>
        </Table>
        <div>
          <span>Available</span>
          <span>Sold Out</span>
        </div>
      </div>
    );
  }
}

export default Calendar;

