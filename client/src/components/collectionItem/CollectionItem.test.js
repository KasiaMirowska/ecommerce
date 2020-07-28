import React from 'react';
import { shallow } from 'enzyme';
import { CollectionItem } from '../../components/collectionItem/CollectionItem';

describe('CollectionItem', () => {
    let wrapper1;
    let wrapper2;
    const mockUser = {
        state: {
            user: {
                currentUser: 'user1'
            },
        },
    };
    const mockAddCartItems = jest.fn();
    const mockItemProps = {
        name: 'name',
        price: 34,
        imageUrl: 'url'
    }
    const mockHistory = {
        push: jest.fn()
    }

    beforeEach(() => {
        const props1 = {
            currentUser: mockUser,
            addCartItems: mockAddCartItems,
            item: mockItemProps,
            history: mockHistory,
        }
        const props2 = {
            addCartItems: mockAddCartItems,
            item: mockItemProps,
            history: mockHistory,
        }
        wrapper1 = shallow(<CollectionItem {...props1} />);
        wrapper2 = shallow(<CollectionItem {...props2} />);
    })

    it('renders as expected', () => {
        expect(wrapper1).toMatchSnapshot();
    });

    it('on click adds item to cart or directs to signIn page', () => {

        let button1 = wrapper1.find('CustomButton');
        let button2 = wrapper2.find('CustomButton');
        button1.simulate('click');
        expect(mockAddCartItems).toHaveBeenCalled();
        button2.simulate('click');
        expect(mockHistory.push).toHaveBeenCalled();
    });

    it('should render name prop in NameContainer', () => {
        expect(wrapper1.find('.name').text()).toBe(mockItemProps.name);
    });

    it('should render price prop in PriceContainer', () => {
        const price = parseInt(wrapper1.find('.price').text());
        expect(price).toBe(mockItemProps.price);
    });
})