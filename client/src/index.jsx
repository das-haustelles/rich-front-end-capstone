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
      bookedDates: []
    }
  }
  render() {
    return(
    <div>
      <DateForm checkIn= {this.state.checkInDate} 
                checkOut={this.state.checkOutDate} 
                bookedDates= {this.state.bookedDates} />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

