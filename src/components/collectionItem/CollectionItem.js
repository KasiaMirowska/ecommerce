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


const CollectionItem = (props) => {
    
    const {id, name, price, imageUrl} = props.item;
    return (
        <div className='collection-item' >
            <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton className='invertedColor custom-button' onClick={()=> props.addCartItems(props.item)}>ADD TO CART</CustomButton>
        </div>
    )
}
export default connect(null, mapDispatchToProps)(CollectionItem);