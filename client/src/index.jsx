import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './components/Calendar';
import DateForm from './components/DateForm';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkInDate: new Date(),
      checkOutDate: new Date(),
      bookedDates: []
    }
  }
  render() {
    return(
    <div>
      <DateForm />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

