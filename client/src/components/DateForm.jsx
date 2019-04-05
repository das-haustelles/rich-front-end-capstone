import React from 'react';
import CheckInInput from './CheckInInput';
import CheckOutInput from './CheckOutInput';
import GuestsDropDown from './GuestsDropDown';
import GroupForm from './GroupForm';

class DateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      guests: 1
    }
  }

  handleNumberOfGuests(e) {
    this.setState({ guests: e.target.value});
  }

  render() {
    const largeParty = this.state.guests >= 9;
    return(
      <div>
        <form>
          <span>
            <CheckInInput checkIn={this.props.checkIn}/>
            <CheckOutInput checkOut={this.props.checkOut}/>
            {largeParty ? <div> <GuestsDropDown handleNumberOfGuests={this.handleNumberOfGuests.bind(this)} /> <GroupForm /></div> 
              : <GuestsDropDown handleNumberOfGuests={this.handleNumberOfGuests.bind(this)}/>}
          </span>
          <div className="search-submit-row">
            <span className="form-label"></span>
            <button type="submit" className="search-button">Search</button>
          </div>
        </form>
      </div>
    )
  }
}
export default DateForm;