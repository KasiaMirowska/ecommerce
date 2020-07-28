import React from 'react';
import { shallow, mount } from 'enzyme';
import { Directory } from '../../components/Directory/Directory';
import MenuItem from '../menu-item/MenuItem';


describe('Directory', () => {
    const props = {
        sections: [{section: 1}, {section: 2}, {section: 3}]
    };

    const wrapper = shallow(<Directory {...props} />);
    
    it('renders as expected', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders all sections', () => {
        expect(wrapper.find(MenuItem).length).toEqual(props.sections.length);
    })
})