import React from 'react';
import ReactDOM from 'react-dom';
import PrivateRoomList from './components/PrivateRoomList';
import DormBedList from './components/DormBedList';

const App = () => {
  return (
    <div>
      <PrivateRoomList /> <br></br>
      <DormBedList />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));

