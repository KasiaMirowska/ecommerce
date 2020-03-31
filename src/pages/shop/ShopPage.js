import React from 'react';
import DATA from '../../dummyData';
import CollectionPreview from '../../components/Collection/CollectionPreview';


export default class ShopPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collections : DATA.inventory,
        }
    }

    render() {
        const {collections} =this.state;
        const list = collections.map(collection => (
            <CollectionPreview 
                key={collection.id}
                title={collection.title}
                items={collection.items}
                route={collection.routeName}
            />
        ))
        return (
            <div className='shop-page'>
               {list}
            </div>
        )
    }
}