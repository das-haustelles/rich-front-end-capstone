import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  font-size: .8125rem;
  color: #333;
  padding: .5rem;
  margin: .125rem .5rem;
  border: .0625rem solid #ccc;
  background-color: #fff;
  text-align: center;
  width: 100%;
  white-space: nowrap;
  border-radius: .1875rem;
`

const List = styled.li`
  width: 16.66667%;
  font-family: "Noto",Helvetica,Arial,sans-serif;
  padding: .5rem .5rem 0;
  float: left;
  box-sizing: border-box;
  list-style: none;
`
const Input = styled.input`
  position: absolute;
  visibility: hidden;
`

const GroupForm = () => {
  const options = [
    'Holiday with Friends',
    'Junior / Primary School',
    'High / Secondary School',
    'College / University',
    'Business Trip',
    'Stag/Hen/Bachelor Party',
    'Sports Group',
    'Cultural Group'
  ];
  const ages = ['0-12', '12-18', '18-21', '21-35', '35-50', '50+'];
  return (
    <div className="search-form-groups">
        <div className="search-form-row">
          <span className="form-label">Group Types</span>
          <select>
            <option>Group Type</option>
            {options.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="search-form-list">
          <span className="form-label">Age Ranges</span>
          <ul className="age-ranges-list">
            {ages.map((age) =>(
              <List>
                <Input id={"58-age-ranges-" + ages.indexOf(age)} type="checkbox" value={age}></Input>
                <Label htmlFor={"58-age-ranges-" + ages.indexOf(age)}>{age}</Label>
              </List>
            ))}
          </ul>
        </div>
      </div>
  )
}

export default GroupForm;