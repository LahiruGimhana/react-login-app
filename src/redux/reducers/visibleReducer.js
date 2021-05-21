import { FORM_VISIBLE, SET_USER_FORM_MODE } from '../actions/actionTypes';

const visibleReducer = (state = { visible: false, mode: "ADD", data: {} }, action, obj, key) => {
    switch (action.type) {
        case FORM_VISIBLE:
            state = { ...state, visible: action.val, mode: "ADD", data: {} }
            state = { ...state, mode: "ADD" }
            return state;

        case SET_USER_FORM_MODE:

            let imageNu = (action.obj.picture.medium).match(/\d+/g);
            let formData = { FirstName: action.obj.name.first, LastName: action.obj.name.last, City: action.obj.location.city, Id: action.obj.id, Picture: action.obj.picture.medium, imageNu: imageNu, keyId: action.key }
            state = { ...state, visible: true, mode: action.mode, data: formData }

            return state;

        default:
            return state
    }
}

export default visibleReducer;