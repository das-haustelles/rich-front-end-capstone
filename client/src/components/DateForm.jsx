import React from 'react';
import CheckInInput from './CheckInInput';
import CheckOutInput from './CheckOutInput';
import GuestsDropDown from './GuestsDropDown';

const DateForm = () => {
  return(
    <div>
      <form>
        <span>
          <CheckInInput />
          <CheckOutInput />
          <GuestsDropDown />
        </span>
      </form>
    </div>
  )
}

export default DateForm;