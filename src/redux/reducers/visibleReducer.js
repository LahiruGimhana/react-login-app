import {FORM_VISIBLE, SET_USER_FORM_MODE} from '../actions/actionTypes';

const visibleReducer = (state = {user_form_visibility:false, usr:''}, action, obj ,key) => {
    switch (action.type) {
        case FORM_VISIBLE:
            state={...state, visible: action.val}
            state={...state, mode:"ADD"}
            return state;

        case SET_USER_FORM_MODE:
            state={...state, visible: true}
            state={...state, mode:action.mode}
            let imageNu = (action.obj.picture.medium).match(/\d+/g);

            let formData={FirstName: action.obj.name.first, LastName: action.obj.name.last, City: action.obj.location.city, Id: action.obj.id, Picture: action.obj.picture.medium ,imageNu:imageNu, keyId: action.key};
            state={...state, formData};

            return state;

        default:
            return state
    }
}

export default visibleReducer;