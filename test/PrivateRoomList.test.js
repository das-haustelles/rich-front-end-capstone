import React from 'react';
import { shallow } from 'enzyme';

// Components
import PrivateRoomList from '../client/src/components/PrivateRoomList';

it('should render correctly with no props', () => {
  const component = shallow(<PrivateRoomList />);
  
  expect(component).toMatchSnapshot();
});