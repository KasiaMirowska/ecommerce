import React from 'react';
import { connect } from 'react-redux';
import {CollectionPageStyles, Title, ItemsContainer} from './CollectionPage.styles';
//import './CollectionPage.styles.scss';
import CollectionItem from '../../components/collectionItem/CollectionItem';
import { selectCollection } from '../../redux/shop/shop.selectors';

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
})

const CollectionPage = (props) => {
    const content = props.collection.items.map(item => {
        return (
            <CollectionItem key={item.id} item={item} />
        )
    })
    return ( 
        <CollectionPageStyles>
            <Title>
                <h2>{`${props.collection.title}`}</h2>
            </Title> 
            <ItemsContainer>
                {content}
            </ItemsContainer>
        </CollectionPageStyles>
    )
}

export default connect(mapStateToProps)(CollectionPage);