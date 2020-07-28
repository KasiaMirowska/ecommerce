import React from 'react';
import { connect } from 'react-redux';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';
import './CollectionsOverview.styles.scss';
import CollectionPreview from '../../components/Collection/CollectionPreview';

const mapStateToProps = state => ({
    collections: selectCollectionsForPreview(state),
})

export const CollectionsOverview = (props) => {
    const list = props.collections.map(collection => (
        <CollectionPreview
            key={collection.id}
            title={collection.title}
            items={collection.items}
            route={collection.routeName}
        />
    ))
    return (
        <div className='collection-overview'>
            {list}
        </div>
    )
}

export default connect(mapStateToProps )(CollectionsOverview);