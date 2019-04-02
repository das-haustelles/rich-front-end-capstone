import React from 'react';

const DormBedList = () => {
  return(
    <div>
      <table className= 'room availability table'>
        <thead>
          <tr>
            <th>
              <h4>DORM BEDS</h4>
              <span>Prices are per bed</span>  
            </th>
            <th>Average price per night</th>
            <th>Beds</th>
          </tr>
        </thead>
        <tbody>
          {/* Private Room Entry Component goes here */}
        </tbody>
      </table>
    </div>
  )
}

export default DormBedList;