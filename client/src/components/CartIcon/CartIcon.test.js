import React from 'react';
import { shallow, mount } from 'enzyme';
import { CartIcon } from '../../components/CartIcon/CartIcon';


describe('CartIcon component', () => {

    let wrapper;
    let mockToggleCartHidden;
    beforeEach(() => {
        mockToggleCartHidden = jest.fn();

        const props = {
            itemCount: 3,
            toggleCartHidden: mockToggleCartHidden
        };

        wrapper = shallow(<CartIcon {...props} />);
    });
    it('renders as expected', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('onClick calls toggleCartHidden', () => {
        // wrapper.find('CartContainer').simulate('click');
        wrapper.find('.cart-icon').simulate('click')
        expect(mockToggleCartHidden).toHaveBeenCalled();
    })

    it('should render itemCount as text', () => {
        let amount = Number( wrapper.find('.item-count').text() );
        expect(amount).toBe(3)
    })
})