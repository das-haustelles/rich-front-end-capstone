import React from 'react';

const CheckOutInput = () => {
  return(
    <div className="search-form checkout-field">
      <span className="form-label">Check Out</span>
      <div>
        <div className="calendar-container" pane-width="300">
          <div>
            <input type="text" readOnly="readonly" className="datepicker"></input>
            <a>
              <i>Calendar Image</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOutInput;