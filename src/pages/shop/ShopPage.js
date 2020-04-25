import React from 'react';
import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverview-Container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import CollectionContainer from '../CollectionPage/Collection-Container';
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

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount = () => {
        this.props.fetchCollectionsStart()
    }

    render() {
        return (
            <div className='shop-page'>
                {/* <Route exact path={`${this.props.match.path}`} render={(props) => (<CollectionsOverviewWithSpinner isLoading={!this.props.isCollectionFetching} {...props} />)} /> */}
                <Route exact path={`${this.props.match.path}`} component={CollectionsOverviewContainer} />
                {/* <Route path={`${this.props.match.path}/:collectionId`} render={(props) => (<CollectionPageWithSpinner isLoading={!this.props.isCollectionsLoaded} {...props} />)} /> */}
                <Route path={`${this.props.match.path}/:collectionId`} component={CollectionContainer} />
            </div>
        )
    }

}

export default connect(null, mapDispatchToProps)(ShopPage);