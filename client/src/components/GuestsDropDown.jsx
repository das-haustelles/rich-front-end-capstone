import React from 'react';

const GuestsDropDown = ({ handleNumberOfGuests }) => {
  const options = [];
  for (var i = 2; i <= 80; i += 1) {
    options.push(i);
  }
  return(
    <div className="search-form guests-field">
      <span className="form-label">Guests</span>
      <select name="number_of_guests" onChange={(e) => handleNumberOfGuests(e)}>
        <option value="1">1 Guest</option>
        {options.map((option) => (
          <option value={option + ""}>{option} Guests</option>
        ))}
      </select>
    </div>
  )
}

export default GuestsDropDown;