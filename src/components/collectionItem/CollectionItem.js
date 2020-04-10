import React from 'react';
import './CollectionItem.styles.scss';
import CustomButton from '../CustomButton/CustomButton';
import {connect} from 'react-redux';
import {addItemToCart} from '../../redux/cart/cart.actions';

const mapDispatchToProps = dispatch => {
    return ({
        addCartItems: item => dispatch(addItemToCart(item))
    })
}
const CollectionItem = ({ item, addCartItems }) => {
    const {id, name, price, imageUrl} = item;
    return (
        <div className='collection-item' >
            <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton className='invertedColor custom-button' onClick={()=> addCartItems(item)}>ADD TO CART</CustomButton>
        </div>
    )
}
export default connect(null, mapDispatchToProps)(CollectionItem)