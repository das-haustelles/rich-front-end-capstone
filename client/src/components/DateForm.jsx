import React from 'react';
import GuestsDropDown from './GuestsDropDown';
import GroupForm from './GroupForm';

class DateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      guests: 9
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
          <span className="form-label">Check In</span>
              <div className="calendar-container" pane-width="300">
                  <input value={this.props.checkIn.format('DD MMM YYYY')} 
                        type="text" 
                        readOnly="readonly" 
                        className="datepicker"></input>
                  <a>
                    <i>Calendar Image</i>
                  </a>
              </div>
            <span className="form-label">Check Out</span>
                <div className="calendar-container" pane-width="300">
                    <input value={this.props.checkOut.format('DD MMM YYYY')} type="text" readOnly="readonly" className="datepicker"></input>
                    <a>
                      <i>Calendar Image</i>
                    </a>
                </div>
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