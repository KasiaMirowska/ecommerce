import React from 'react';
import './CollectionItem.styles.scss';
import CustomButton from '../CustomButton/CustomButton';
import {connect} from 'react-redux';
import {addItemToCart} from '../../redux/cart/cart.actions';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import { withRouter } from 'react-router-dom';


const mapDispatchToProps = dispatch => {
    return ({
        addCartItems: item => dispatch(addItemToCart(item))
    })
}
const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state),
});

const CollectionItem = (props) => {
    
    const {name, price, imageUrl} = props.item;

    return (
        <div className='collection-item' >
            <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton className='invertedColor custom-button' onClick={()=> props.currentUser? props.addCartItems(props.item) : props.history.push('/signin')}>ADD TO CART</CustomButton>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CollectionItem));