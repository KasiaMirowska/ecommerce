import React from 'react';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.util';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/WithSpinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

class ShopPage extends React.Component {
    state = {
        loading: true,
    }
    //fetching data from db
    unsubscribeFromSnapshot = null;

    componentDidMount = () => {
        const collectionRef = firestore.collection('collections')
        collectionRef.onSnapshot(async snapshot=> {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot)
            this.props.updateCollections(collectionsMap)
            this.setState({
                loading: false,
            })
        })
      
        

        
    }
    render() {

        return (
            <div className='shop-page'>
                <Route exact path={`${this.props.match.path}`} render={(props) => (<CollectionsOverviewWithSpinner isLoading={this.state.loading} {...props} />)} />
                <Route path={`${this.props.match.path}/:collectionId`} render={(props) => (<CollectionPageWithSpinner isLoading={this.state.loading} {...props} />)} />
            </div>
        )
    }

}

export default connect(null, mapDispatchToProps)(ShopPage);