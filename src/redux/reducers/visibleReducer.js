import { SET_USER_FORM_MODE, FORM_CANCEL_MODE , NOTIFY_MSG} from '../actions/actionTypes';

const visibleReducer = (state = { visible: false, mode: "ADD" , data: {FirstName:''} }, action) => {
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

        // case FORM_VISIBLE:
            

        case SET_USER_FORM_MODE:
            console.log(action.mode);
            if(action.mode==="ADD"){
                state = { ...state, visible: action.visibility, mode: action.mode, data: {} }
                return state;
            }
            if(action.mode==="CHATUSER"){
                // let img={Picture:action.obj.picture.medium}
                let formData={Picture:action.obj.picture.medium,  FirstName: action.obj.name.first, LastName: action.obj.name.last }
                state = {...state, visible: action.visibility, mode: action.mode, data:formData }
                return state;
            }
            else{
                let imageNu = (action.obj.picture.medium).match(/\d+/g);
                let formData = { FirstName: action.obj.name.first, LastName: action.obj.name.last, City: action.obj.location.city, Id: action.obj.id, Picture: action.obj.picture.medium, imageNu: imageNu, keyId: action.key }
                state = { ...state, visible: true, mode: action.mode, data: formData }
                return state;
            }
  

        case FORM_CANCEL_MODE:
            state = { ...state, visible: false, mode: "", data: {} }
            return state;
 
        case NOTIFY_MSG:
            let msg_count={ MsgCount : action.count.count}
            state={ ...state, visible:true, mode:"", data:msg_count}

        default:
            // alert(state.data.formData.FirstName)
            return state
    }
}

export default visibleReducer;