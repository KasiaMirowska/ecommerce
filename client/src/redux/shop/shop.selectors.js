import {createSelector} from 'reselect';

//input selector: 
const selectShop = state => {
    return state.shop;
}

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)
//after data normalization we have objects instead of arrays so rendering components is broken hence we should convert that object into an array here:
export const selectCollectionsForPreview = createSelector(
   [selectShopCollections],
    collections => collections? Object.keys(collections).map(key => collections[key]) : [],
)
//currying
export const selectCollection = collectionUrlParam => {
    return createSelector(
        [selectShopCollections],
        collections => {
            if (collections) {
                console.log(collections[collectionUrlParam], 'URL PARAM OF COLLECTION')
                return collections[collectionUrlParam]
            } else {
                return null;
            } //after data normalization we have an object with titled smaller objects holding the collection items
        })
}

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections //creating a boolean value from property to check if collections are loaded
)