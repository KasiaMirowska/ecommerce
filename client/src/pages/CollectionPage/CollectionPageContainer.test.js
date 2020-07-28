
import {mapStateToProps} from './CollectionPageContainer';

describe('mapStateToProps', () => {
    it ('return collection of items', () => {
        const mockState = {
            shop: {
                collections: {
                    'hats': {
                        id: 'a',
                        items: [
                            {
                                "id":1,
                                imageUrl: 'imageUrl',
                                name: 'testName',
                                price: 10
                            }
                        ],
                        routeName: 'hats',
                        title: 'hats',
                    }
                }
            }
        };
        const mockProps = {
            match: {
                params: {
                    collectionId: 'hats'
                }
            }
        };
        
        
        expect(mapStateToProps(mockState,mockProps)).toEqual({
            collection: { 
                id: 'a', 
                items: [ 
                    {
                        id: 1,
                        imageUrl: 'imageUrl',
                        name: 'testName',
                        price: 10
                    } 
                ], 
                routeName: 'hats', 
                title: 'hats' 
            }
        });
    });
});
