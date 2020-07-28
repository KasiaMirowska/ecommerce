import React from 'react';
import {shallow} from 'enzyme';
import CollectionPreview from '../../components/Collection/CollectionPreview';
import CollectionItem from '../../components/collectionItem/CollectionItem';


describe('CollectionPreview', () => {
    const props = {
        title: 'Hats',
        items: [{item:'hat1'}, {item:'hat2'}, {item:'hat3'}, {item:'hat4'}]
    }
    const wrapper = shallow(<CollectionPreview {...props} />);

    it('renders as expected', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('renders only 4 items in the proeview', () => {
        expect(wrapper.find(CollectionItem).length).toBe(4);
    })
})