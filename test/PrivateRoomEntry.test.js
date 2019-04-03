import React from 'react';
import { shallow } from 'enzyme';

// Components
import PrivateRoomEntry from '../client/src/components/PrivateRoomEntry';

it('should render correctly with no props', () => {
  const component = shallow(<PrivateRoomEntry />);
  
  expect(component).toMatchSnapshot();
});