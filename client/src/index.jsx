import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './components/Calendar';
import DateForm from './components/DateForm';

const App = () => {
  return (
    <div>
      <DateForm />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));

