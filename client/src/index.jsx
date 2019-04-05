import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment'; 
import Calendar from './components/Calendar';
import DateForm from './components/DateForm';
import styled from 'styled-components';

const Header = styled.h2`
  font-size: 1.4rem;
  font-family: "Noto",Helvetica,Arial,sans-serif;
  font-weight: 300;
  line-height: 1.4;
  color: #444;
  margin-top: 0;
  margin-bottom: .5rem;
  display: block;
`;

const DateRange = styled.div`
  color: #333;
  font-size: .8rem;
  margin-left: .25rem;
  font-family: "Noto",Helvetica,Arial,sans-serif;
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
      <div>
        <Header>Check Availability</Header>
        {newReservation ? this.renderForm() : this.renderSummary()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



