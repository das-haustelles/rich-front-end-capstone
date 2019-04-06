import React from 'react';
import GuestsDropDown from './GuestsDropDown';
import GroupForm from './GroupForm';
import styled from 'styled-components';

const Labels = styled.span`
  font-size: 12px;
  font-weight: bold;
  font-family: Noto, Helvetica, Arial, sans-serif;
  line-height: 12px;
  color: #666666;
`;
const SearchButton = styled.button`
  background: #ff622e;
  color: #ffffff;
  font-size: 15px;
  font-family: Noto, Helvetica, Arial, sans-serif;
  text-align: center;
  border-radius: 3px;
`;
const Inputs = styled.input`
  font-family: Noto, Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #666666;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px inset;
  border-radius: 3px;
`;
const Test = styled.div`
  display: flex;
  flex-direction: row;
`;

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
      <Test>
        <form>
          <span>
          <Labels className="form-label">Check In</Labels>
              <div className="calendar-container" pane-width="300">
                  <Inputs value={this.props.checkIn.format('DD MMM YYYY')} 
                        type="text" 
                        readOnly="readonly" 
                        className="datepicker"></Inputs>
                  <a>
                    <i>Calendar Image</i>
                  </a>
              </div>
            <Labels className="form-label">Check Out</Labels>
                <div className="calendar-container" pane-width="300">
                    <Inputs value={this.props.checkOut.format('DD MMM YYYY')} type="text" readOnly="readonly" className="datepicker"></Inputs>
                    <a>
                      <i>Calendar Image</i>
                    </a>
                </div>
            <GuestsDropDown handleNumberOfGuests={this.handleNumberOfGuests.bind(this)} />
          </span>
          <div className="search-submit-row">
            <span className="form-label"></span>
            <SearchButton type="submit" className="search-button">Search</SearchButton>
          </div>
        </form>
      </Test>
    )
  }
}
export default DateForm;