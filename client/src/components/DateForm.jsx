import React from 'react';
import styled from 'styled-components';
import GroupForm from './GroupForm';
import GuestsDropDown from './GuestsDropDown';
import Calendar from './Calendar';
import CheckInField from './CheckInField';
import CheckOutField from './CheckOutField';

const SearchButton = styled.button`
  background: #ff7547;
  color: #ffffff;
  font-size: 15px;
  font-family: Noto, Helvetica, Arial, sans-serif;
  text-align: center;
  border-radius: 3px;
  height: 37px;
  width: 100%;
  margin-top: 8px;
`;
const FormFields = styled.div`
  width: 25%;
  padding: 0 1rem 0 0;
  display: flex;
  flex-direction: column;
`;
const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  width: auto;
`;

class DateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: 9,
      displayCheckInCalendar: false,
      displayCheckOutCalendar: false,
    };
    this.handleCheckInClick = this.handleCheckInClick.bind(this);
    this.handleCheckOutClick = this.handleCheckOutClick.bind(this);
    this.handleNumberOfGuests = this.handleNumberOfGuests.bind(this);
  }

  handleNumberOfGuests(e) {
    this.setState({ guests: e.target.value});
  }

  handleCheckInClick() {
    this.setState({
      displayCheckInCalendar: true,
      displayCheckOutCalendar: false,
    });
  }

  handleCheckOutClick() {
    this.setState({
      displayCheckInCalendar: false,
      displayCheckOutCalendar: true,
    });
  }

  render() {
    const { guests, displayCheckInCalendar, displayCheckOutCalendar } = this.state;
    const isLargeParty = guests >= 9;
    return (
      <div>
        <Form>
          <FormFields>
            <CheckInField checkIn={this.props.checkIn}
              handleCheckInClick={this.handleCheckInClick} />
            {displayCheckInCalendar ? <Calendar bookedDates= {this.props.bookedDates} handleNewDate={this.props.handleNewDate}/> : <React.Fragment></React.Fragment>}
          </FormFields>
          <FormFields>
            <CheckOutField checkOut={this.props.checkOut}
              handleCheckOutClick={this.handleCheckOutClick} />
            {displayCheckOutCalendar ? <Calendar bookedDates= {this.props.bookedDates} handleNewDate={this.props.handleNewDate}/> : <React.Fragment></React.Fragment>}
          </FormFields>
          <FormFields>
            <GuestsDropDown handleNumberOfGuests={this.handleNumberOfGuests} />
          </FormFields>
          <FormFields>
            <span></span>
            <SearchButton type="submit">Search</SearchButton>
          </FormFields>
        </Form>
        {isLargeParty ? <GroupForm /> : <React.Fragment></React.Fragment>}
      </div>
    );
  }
}
export default DateForm;
