import React from 'react';
import { shallow, mount } from 'enzyme';
import { CollectionsOverview } from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPreview from '../../components/Collection/CollectionPreview';


describe('CollectionsOverview', () => {
    const props = {
        collections: [{col: 1}, {col: 2}, {col: 3}, {col: 4}]
    }
    const wrapper = shallow(<CollectionsOverview {...props} />);

    it('renders as expected', () => {
        const div = document.createElement('div');
        expect(wrapper).toMatchSnapshot();
    });

    it('displays all collections', () => {
        expect(wrapper.find(CollectionPreview).length).toEqual(props.collections.length);
    })
})