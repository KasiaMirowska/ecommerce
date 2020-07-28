import React from 'react';
import {shallow} from 'enzyme';
import CartItem from '../../components/CartItem/CartItem';


describe('CartItem', () => {
    const props = {
        imageUrl: 'url', 
        price: 3, 
        name: 'someName', 
        quantity: 1
    };

    it('renders as expected', () => {
        expect(shallow(<CartItem {...props}/>)).toMatchSnapshot();
    })
})