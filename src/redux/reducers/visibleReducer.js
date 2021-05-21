import {FORM_VISIBLE, EDIT, ADD, VIEW} from '../actions/actionTypes';

const visibleReducer = (state = {first: "", last:"", city:"", id:""}, action, data={}) => {
    switch (action.type) {
        case FORM_VISIBLE:
            state={...state, visible: action.val}
            state={...state, mode:"ADD"}

            return state;

        case EDIT:
            // console.log('========= EDIT ==========');
            state={...state, visible: true}
            state={...state, mode:"EDIT"}
            // console.log(state);

            return state;

        case ADD:
            // console.log('============ ADD =============');
            state={...state, visible: true}
            // console.log(state);

            return state;

        case VIEW:
            // console.log('============ VIEW ==============');
            state={...state, visible: true}
            state={...state, mode:"VIEW"}
            // console.log(state);

            return state;

        default:
            return state
    }
}

export default visibleReducer;