import React from 'react';

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
              <li>
                <input id={"58-age-ranges-" + ages.indexOf(age)} type="checkbox" value={age}></input>
                <label htmlFor={"58-age-ranges-" + ages.indexOf(age)}>{age}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
  )
}

export default GroupForm;