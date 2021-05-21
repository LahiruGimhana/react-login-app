// import {FORM_VISIBLE, EDIT, ADD, VIEW} from './actionTypes';
import {FORM_VISIBLE, SET_USER_FORM_MODE} from './actionTypes';


export const viewVisible= (key, obj) => {
    return { type: SET_USER_FORM_MODE , mode:'VIEW', key, obj};
}
export const editVisible= (key, obj) => {
    return { type: SET_USER_FORM_MODE, mode:'EDIT', key, obj};
}
export const addVisible= () => {
    return { type: SET_USER_FORM_MODE, mode:'ADD' };
}

export const userFormVisible= (val) => {
    return { type: FORM_VISIBLE, val };
}
