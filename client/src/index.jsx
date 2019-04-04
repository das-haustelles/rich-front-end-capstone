import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './components/Calendar';
import Availability from './components/Availability';

const App = () => {
  return (
    <div>
      <Availability />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));

