import React from 'react';
import { shallow } from 'enzyme';

// Components
import DormBedEntry from '../client/src/components/DormBedEntry';

it('should render correctly with no props', () => {
  const component = shallow(<DormBedEntry />);
  
  expect(component).toMatchSnapshot();
});