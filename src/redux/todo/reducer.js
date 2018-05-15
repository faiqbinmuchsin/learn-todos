import initialState from './initial-state';
import type from './type';

const todos = (state = initialState, action) => {
    switch (action.type) {
        case type.ADD_TODO:
            return [
                // ...initialState,
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case type.TOGGLE_TODO:
            // return initialState.map(item => 
            return state.map(item => 
                (item.id === action.id)?
                    {...item, completed: !item.completed}:
                    item
            )
        default:
            return state
    }
}

export default todos;