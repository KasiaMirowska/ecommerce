import {compose} from 'redux';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/WithSpinner';
import CollectionsOverview from './CollectionsOverview';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded,
})
//writing this component so that we dont drill props from ShopPage ...
//const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview)) wrapped components get hard to read so we can use Compose
const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;