import React from 'react';
import {firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.util';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions'

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

class ShopPage extends React.Component {
   
    //fetching data from db
    unsubscribeFromSnapshot = null;

    componentDidMount = () => {
        const collectionRef = firestore.collection('collections')
        collectionRef.onSnapshot(async snapshot=> {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot)
            this.props.updateCollections(collectionsMap)
        })
    }
    render() {
        
        return (
            <div className='shop-page'>
                <Route exact path={`${this.props.match.path}`} component={CollectionsOverview} />
                <Route path={`${this.props.match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    }

}

export default connect(null, mapDispatchToProps)(ShopPage);