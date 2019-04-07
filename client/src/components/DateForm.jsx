import React from 'react';
import GuestsDropDown from './GuestsDropDown';
import GroupForm from './GroupForm';
import styled from 'styled-components';
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
    };
  }

  handleNumberOfGuests(e) {
    this.setState({ guests: e.target.value});
  }

  render() {
    const { guests } = this.state;
    const isLargeParty = guests >= 9;
    return (
      <div>
        <Form>
          <FormFields>
            <CheckInField checkIn={this.props.checkIn}/>
          </FormFields>
          <FormFields>
            <CheckOutField checkOut={this.props.checkOut} />
          </FormFields>
          <FormFields>
            <GuestsDropDown handleNumberOfGuests={this.handleNumberOfGuests.bind(this)}/>
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
