import { FORM_VISIBLE, SET_USER_FORM_MODE, FORM_CANCEL_BUTTON } from '../actions/actionTypes';

const visibleReducer = (state = { visible: false, mode: "ADD", data: {} }, action) => {
    switch (action.type) {
        // case FORM_VISIBLE:
        //     state = { ...state, visible: action.val, mode: "ADD", data: {} }
        //     state = { ...state, mode: "ADD" }
        //     return state;

        // case SET_USER_FORM_MODE:

        //     let imageNu = (action.obj.picture.medium).match(/\d+/g);
        //     let formData = { FirstName: action.obj.name.first, LastName: action.obj.name.last, City: action.obj.location.city, Id: action.obj.id, Picture: action.obj.picture.medium, imageNu: imageNu, keyId: action.key }
        //     state = { ...state, visible: true, mode: action.mode, data: formData }

        //     return state;

        case FORM_VISIBLE:
            

        case SET_USER_FORM_MODE:
            console.log(action.mode);
            if(action.mode==="ADD"){
                state = { ...state, visible: action.visibility, mode: action.mode, data: {} }
                return state;
            }
            else{
                let imageNu = (action.obj.picture.medium).match(/\d+/g);
                let formData = { FirstName: action.obj.name.first, LastName: action.obj.name.last, City: action.obj.location.city, Id: action.obj.id, Picture: action.obj.picture.medium, imageNu: imageNu, keyId: action.key }
                state = { ...state, visible: true, mode: action.mode, data: formData }
                return state;
            }

        case FORM_CANCEL_BUTTON:
            state = { ...state, visible: false, mode: {}, data: {} }
            return state

        default:
            return state
    }
}

export default visibleReducer;