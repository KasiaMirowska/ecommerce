import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, CheckOut } from './CheckOut';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

describe('CheckOut component', () => {
    const props = {
        cartItems: [
            {
                id: 1,
                price: 2,
                name: 'item1',
                imageUrl: 'itemUrl1',
                quantity: 1
            },
            {
                id: 2,
                price: 5,
                name: 'item2',
                imageUrl: 'itemUrl2',
                quantity: 1
            }
        ],
        total: 234
    }

    let wrapper = shallow(<CheckOut {...props} />);
    
    it('renders as expected', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the correct amount of items in the cart', () => {
        expect(wrapper.find(CheckoutItem).length).toEqual(props.cartItems.length);
      });

});
