import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App', () => {
  const props = {
    checkUserSession: jest.fn(),
    currentUser: 'user1'
  }

  const appWrapper = shallow(<App  {...props} />);

  it('renders as expected2', () => {
    expect(appWrapper).toMatchSnapshot();
  })

})

