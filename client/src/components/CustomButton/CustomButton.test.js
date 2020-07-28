import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import CustomButton from '../../components/CustomButton/CustomButton';


describe('CustomButton', () => {
    const props = {};

    const wrapper = shallow(<CustomButton {...props} />);

    it('renders as expected', () => {
        expect(wrapper).toMatchSnapshot();
        const div = document.createElement('div');
        const item = renderer.create(<CustomButton {...props}/>, div);
        expect(item.toJSON()).toMatchSnapshot();
    });
})