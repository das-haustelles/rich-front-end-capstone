import React from 'react';
import Calendar from './Calendar';
import styled from 'styled-components';

const CheckInInput = ({ checkIn }) => {
  return(
    <div className="search-form checkin-field">
      <span className="form-label">Check In</span>
      <div>
        <div className="calendar-container" pane-width="300">
          <div> 
            <input value={checkIn.format('DD MMM YYYY')} 
                   type="text" 
                   readOnly="readonly" 
                   className="datepicker"></input>
            <a>
              <i>Calendar Image</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )

}

export default CheckInInput;