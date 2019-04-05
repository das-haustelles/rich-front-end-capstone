import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment'; 
import Calendar from './components/Calendar';
import DateForm from './components/DateForm';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkInDate: moment(),
      checkOutDate: moment().add(3, 'days'),
      newReservation: true,
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
        <div>
          <i>Calendar Image Placeholder</i>
          <span>{this.state.checkInDate.format('ddd D MMM YYYY-') + this.state.checkOutDate.format('ddd D MMM YYYY') }</span>
        </div>
      </div>
      <a>
        <i>Search Image Placeholder</i>
        <span onClick= {() => this.handleNewReservation()}>Change</span>
      </a>
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
        <h2>Check Availability</h2>
        {newReservation ? this.renderForm() : this.renderSummary()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



