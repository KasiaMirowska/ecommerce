import React, { useEffect, lazy, Suspense } from 'react';
import {
    fetchCollectionsStart,
    // fetchCollectionsFailure 
} from '../../redux/shop/shop.actions';

import Spinner from '../../components/Spinner/Spinner';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
//import { createStructuredSelector } from 'reselect';
//import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

//CONTAINER PATTERN OPTIMIZATION to keep concerns seperate to each component

//const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview); moved this logic to CollectionOverviewContainer
//const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// const mapStateToProps = createStructuredSelector({
//     //isCollectionFetching: selectIsCollectionFetching,
//     // isCollectionsLoaded: selectIsCollectionsLoaded,
// })

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

const CollectionsOverviewContainer = lazy(() => import('../../components/CollectionsOverview/CollectionsOverview-Container'));
const CollectionContainer = lazy(() => import('../CollectionPage/Collection-Container'))


const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart])

    return (
        <div className='shop-page'>
            {/* <Route exact path={`${this.props.match.path}`} render={(props) => (<CollectionsOverviewWithSpinner isLoading={!this.props.isCollectionFetching} {...props} />)} /> */}
            <Suspense fallback={<Spinner />}>
                <Route exact path={`${match.path}`}
                    component={CollectionsOverviewContainer}
                />
                {/* <Route path={`${this.props.match.path}/:collectionId`} render={(props) => (<CollectionPageWithSpinner isLoading={!this.props.isCollectionsLoaded} {...props} />)} /> */}
                <Route path={`${match.path}/:collectionId`}
                    component={CollectionContainer}
                />
            </Suspense>
        </div>
    )
}


export default connect(null, mapDispatchToProps)(ShopPage);