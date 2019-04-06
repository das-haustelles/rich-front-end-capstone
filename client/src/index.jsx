import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment'; 
import Calendar from './components/Calendar';
import DateForm from './components/DateForm';
import styled from 'styled-components';

const Availability = styled.div`
  background-color: #f4f4f4;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  display: block;
`
const Header = styled.h2`
  font-size: 22px;
  font-family: "Noto",Helvetica,Arial,sans-serif;
  font-weight: 300;
  line-height: 32px;
  color: #444444;
  display: block;
  text-align: start;
`;

const DateRange = styled.div`
  color: #333333;
  font-size: 12px;
  line-height: 19px;
  font-family: "Noto",Helvetica,Arial,sans-serif;
  text-align: start;
`;

const Change = styled.a`
  margin-left: .25rem;  
  box-sizing: border-box;
  font-size: .8rem;
  color: #ff7547;
`;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkInDate: moment(),
      checkOutDate: moment().add(3, 'days'),
      newReservation: false,
      bookedDates: [],
    }
  }

  handleNewReservation() {
    this.setState({ newReservation: true });
  }

  renderSummary() {
    return(
      <div>
      <div>
        <DateRange>
          <i>Calendar Image Placeholder</i>
          <span>{this.state.checkInDate.format('ddd D MMM YYYY-') + this.state.checkOutDate.format('ddd D MMM YYYY') }</span>
        </DateRange>
      </div>
      <Change>
        <i>Search Image Placeholder</i>
        <span onClick= {() => this.handleNewReservation()}>Change</span>
      </Change>
    </div>
    )
  }

  renderForm() {
    return(
      <div>
        <DateForm checkIn= {this.state.checkInDate} 
                  checkOut={this.state.checkOutDate} 
                  bookedDates= {this.state.bookedDates} />
      </div>
    )
  }

  render() {
    const newReservation = this.state.newReservation;
    return(
      <Availability>
        <Header>Check Availability</Header>
        {newReservation ? this.renderForm() : this.renderSummary()}
      </Availability>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



