import React from 'react';

const PrivateRoomList = () => {
  return(
    <div>
      <table className= 'room availability table'>
        <thead>
          <tr>
            <th>
              <h4>PRIVATE ROOMS</h4>
              <span>Prices are per room</span>  
            </th>
            <th>Average price per night</th>
            <th>Rooms</th>
          </tr>
        </thead>
        <tbody>
          {/* Private Room Entry Component goes here */}
        </tbody>
      </table>
    </div>
  )
}

export default PrivateRoomList;