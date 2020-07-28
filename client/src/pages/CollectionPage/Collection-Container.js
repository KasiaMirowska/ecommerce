import {compose} from 'redux';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import { selectCollection } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/WithSpinner';
import CollectionPageContainer from '../CollectionPage/CollectionPageContainer';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state),
    //isLoading: !selectIsCollectionsLoaded, //selector expects the function so we have to do it as above
})
//writing this component so that we dont drill props from ShopPage ...containers dont render anything, they just pass props to components
//const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview)) wrapped components get hard to read so we can use Compose
const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(CollectionPageContainer);

export default CollectionContainer;