import React from 'react';
import CheckInInput from './CheckInInput';
import CheckOutInput from './CheckOutInput';
import GuestsDropDown from './GuestsDropDown';

const DateForm = ({ checkIn, checkOut, bookedDates }) => {
  return(
    <div>
      <form>
        <span>
          <CheckInInput checkIn={checkIn} />
          <CheckOutInput checkOut={checkOut}/>
          <GuestsDropDown />
        </span>
        <div className="search-submit-row">
          <span className="form-label"></span>
          <button type="submit" className="search-button">Search</button>
        </div>
      </form>
    </div>
  )
}

export default DateForm;