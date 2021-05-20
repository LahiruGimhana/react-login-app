import {FORM_VISIBLE, EDIT, ADD, VIEW} from '../actions/actionTypes';

const visibleReducer = (state = {}, action) => {
    switch (action.type) {
        case FORM_VISIBLE:
            
            state=action.val;
            console.log(state);
            alert(state);
    }
}

export default visibleReducer;