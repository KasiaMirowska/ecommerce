import React from 'react';
import {shallow} from 'enzyme';
import LoginRegister from './LoginRegister';

it ('LoginRegister renders as expected', () => {
    expect(shallow(<LoginRegister />)).toMatchSnapshot();
})