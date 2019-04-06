import React from 'react';
import styled from 'styled-components';

const InputLabels = styled.span`
  font-size: 12px;
  font-weight: bold;
  font-family: Noto, Helvetica, Arial, sans-serif;
  line-height: 12px;
  color: #666666;
`;

const GuestsDropDown = ({ handleNumberOfGuests }) => {
  const options = [];
  for (var i = 2; i <= 80; i += 1) {
    options.push(i);
  }
  return(
    <div className="search-form guests-field">
      <InputLabels className="form-label">Guests</InputLabels>
      <select name="number_of_guests" onChange={(e) => handleNumberOfGuests(e)}>
        <option value="1">1 Guest</option>
        {options.map((option) => (
          <option value={option}>{option} Guests</option>
        ))}
      </select>
    </div>
  )
}

export default GuestsDropDown;