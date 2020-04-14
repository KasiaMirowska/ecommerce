import React from 'react';
import {Link} from 'react-router-dom';
import './CollectionPreview.styles.scss';
import CollectionItem from '../collectionItem/CollectionItem';

export default function CollectionPreview({ title, items }) {
    const displayed = items
        //displaying only first 4 items in the collection preview
        .filter((item, idx) => idx < 4)
        .map(item => (
            <CollectionItem
                key={item.id}
                item={item}
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
            />
        ))

    return (
        <div className='collection '>
            <Link to={`/shop/${title.toLowerCase()}`}>
            <h1 className='title' >{title}</h1>
            </Link>
            <div className='preview'>
                {displayed}
            </div>
        </div>
    )
}