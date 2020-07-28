import React from 'react';
import {shallow} from 'enzyme';
import CollectionPage from './CollectionPage';
import CollectionItem from '../../components/collectionItem/CollectionItem';

describe('CollectionPage component', () => {
    const mockItems = [{id:1} , {id:2}, {id:3}];
    let collectionWrapper;
    
    beforeEach(() => {
        const mockCollection = {items: mockItems, title: 'Test Collection'};
        collectionWrapper = shallow(<CollectionPage collection={mockCollection} />)
    })
    
    
    
    it('renders as expected', () => {
        expect(collectionWrapper).toMatchSnapshot();
    });

    it('should render the same number of CollectionItems as collection array', () => {
        expect(collectionWrapper.find(CollectionItem).length).toBe(mockItems.length);
      });
})