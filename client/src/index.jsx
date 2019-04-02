import React from 'react';
import ReactDOM from 'react-dom';
import PrivateRoomList from './components/PrivateRoomList';

const App = () => {
  return (
    <div>
      <PrivateRoomList />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));

