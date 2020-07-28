import React from 'react';
import {shallow} from 'enzyme';
import {CheckoutItem} from '../../components/CheckoutItem/CheckoutItem';


describe('CheckoutItem', () => {
    const mockAddItem = jest.fn();
    const mockRemoveItem = jest.fn();
    const mockClearItem = jest.fn();

    const props = {
        imageUrl: 'url', 
        name: 'brown hat', 
        quantity: 1, 
        price: 24, 
        clearItemFromCart: mockClearItem , 
        addItem: mockAddItem, 
        removeItem: mockRemoveItem }

    const wrapper = shallow(<CheckoutItem {...props} />);

    it('renders as expected', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('on click increases or decreases quantity', () => {
        let increase = wrapper.find('#increase');
        increase.simulate('click');
        expect(mockAddItem).toHaveBeenCalled();
        expect(props.quantity).toBe(+1);

        let decrease = wrapper.find('#decrease');
        decrease.simulate('click');
        expect(mockRemoveItem).toHaveBeenCalled();
        expect(props.quantity).toBe(1);
    });

    it('clears the cart on click', () => {
        let cleared = wrapper.find('.remove-button');
        cleared.simulate('click');
        expect(mockClearItem).toHaveBeenCalled();
    })

})
