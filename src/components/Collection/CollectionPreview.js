import React from 'react';
import './CollectionPreview.styles.scss';
import CollectionItem from '../collectionItem/CollectionItem';

export default function CollectionPreview({ title, items }) {
    console.log(items)
    const displayed = items
        //displaying only first 4 items in the collection preview
        .filter((item, idx) => idx < 4)
        .map(item => (
            <CollectionItem
                key={item.id}
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
            />
        ))

    return (
        <div className='collection '>
            <h1 className='title' >{title}</h1>
            <div className='preview'>
                {displayed}
            </div>
        </div>
    )
}