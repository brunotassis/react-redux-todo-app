const INITAL_STATE = { description: '' };

const DESCRIPTION_CHANGED = 'DESCRIPTION_CHANGED';
const TODO_SEARCHED       = 'TODO_SEARCHED';
const CLEAR_DESCRIPTION   = 'CLEAR_DESCRIPTION';

export default function(state = INITAL_STATE, action) {
    switch (action.type) {
        case DESCRIPTION_CHANGED:
            return { ...state, description: action.payload };
        case TODO_SEARCHED:
            return { ...state, list: action.payload };
        case CLEAR_DESCRIPTION:
            return { ...state, description: '' };

        default:
            return state;
    }
}
