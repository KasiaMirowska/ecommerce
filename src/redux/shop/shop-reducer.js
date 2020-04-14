import DATA from '../../dummyData';

const INITIAL_STATE = {
    collections: DATA.inventory,
}

const shopReducer = (state =INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default shopReducer;