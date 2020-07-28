import React from 'react';
import {shallow} from 'enzyme';
import HomePage from './HomePage';

it('renders as expected', () => {
    expect(shallow(<HomePage />)).toMatchSnapshot();
})