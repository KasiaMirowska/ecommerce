import React from 'react';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import {fetchCollectionsStartAsync, fetchCollectionsStart} from '../../redux/shop/shop.actions';
import CollectionPage from '../CollectionPage/CollectionPage';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching, selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/WithSpinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const mapStateToProps = createStructuredSelector({
    isCollectionFetching : selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded,
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync : () => dispatch(fetchCollectionsStartAsync())
}) 

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;
    
    componentDidMount = () => {
       this.props.fetchCollectionsStartAsync()
    }
    
    
    render() {
         return (
            <div className='shop-page'>
                <Route exact path={`${this.props.match.path}`} render={(props) => (<CollectionsOverviewWithSpinner isLoading={!this.props.isCollectionsLoaded} {...props}/> )}/>
                <Route path={`${this.props.match.path}/:collectionId`} render={(props) => ( <CollectionPageWithSpinner  isLoading={!this.props.isCollectionsLoaded} {...props} /> )} />
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);