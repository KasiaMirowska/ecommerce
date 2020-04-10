import React from 'react';
import './CollectionItem.styles.scss';
import CustomButton from '../CustomButton/CustomButton';

export default function CollectionItem({ id, name, price, imageUrl }) {
    return (
        <div className='collection-item'>
            <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton className='invertedColor custom-button'>ADD TO CART</CustomButton>
        </div>
    )
}
