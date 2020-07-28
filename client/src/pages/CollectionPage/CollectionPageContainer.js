import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionPage from './CollectionPage';

export const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
})

const CollectionPageContainer = (props) => {
    return ( 
        <CollectionPage {...props} />
    )
}

export default connect(mapStateToProps)(CollectionPageContainer);