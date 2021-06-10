// import {FORM_VISIBLE, EDIT, ADD, VIEW} from './actionTypes';
import {SET_USER_FORM_MODE, FORM_CANCEL_MODE , NOTIFY_MSG} from './actionTypes';


export const viewVisible= (key, obj) => {
    return { type: SET_USER_FORM_MODE , mode:'VIEW', key, obj};
}
export const editVisible= (key, obj) => {
    return { type: SET_USER_FORM_MODE, mode:'EDIT', key, obj};
}
export const addVisible= (visibility) => {
    return { type: SET_USER_FORM_MODE, mode:'ADD', visibility };
}

export const userFormCancelVisible=()=>{
    return {type: FORM_CANCEL_MODE};
}


//view image in userChat

export const onViewChatt = (obj) => {
    return {type: SET_USER_FORM_MODE, mode:'CHATUSER', obj};
}


//notify unseen msg count
export const msgCounter=(count)=>{
    return { type:NOTIFY_MSG, count};
}