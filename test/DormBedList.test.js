import React from 'react';
import { shallow } from 'enzyme';

// Components
import DormBedList from '../client/src/components/DormBedList';

it('should render correctly with no props', () => {
  const component = shallow(<DormBedList />);
  
  expect(component).toMatchSnapshot();
});