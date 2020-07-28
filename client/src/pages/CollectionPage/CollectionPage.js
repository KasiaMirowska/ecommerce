import React from 'react';
import {CollectionPageStyles, Title, ItemsContainer} from './CollectionPage.styles';
//import './CollectionPage.styles.scss';
import CollectionItem from '../../components/collectionItem/CollectionItem';


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

export default CollectionPage;