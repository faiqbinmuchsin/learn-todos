import initialState from './initial-state';
import type from './type';

const visibilityFilter = (state = initialState, action) => {
    switch(action.type) {
        case type.SET_VISIBILITY_FILTER:
            return action.filter
        default:
            // return initialState
            return state
    }
}

export default visibilityFilter;