import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment'; 
import axios from 'axios';
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
  componentDidMount() {
    axios.get('/hostels/2')
      .then((response) => {
        const checkInDate = moment(response.data.checkInDate);
        const checkOutDate = moment(response.data.checkOutDate);
        this.setState({
          checkInDate,
          checkOutDate
        });
      });
    axios.get('/hostels/2/bookings')
    .then((response) => {
      const dates = response.data;
      const bookedDates = dates.map((date) => moment(date));
      this.setState({
        bookedDates
      });
    });
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



