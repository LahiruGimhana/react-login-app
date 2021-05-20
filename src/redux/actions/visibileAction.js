import {FORM_VISIBLE, EDIT, ADD, VIEW} from './actionTypes';


export const viewVisible= () => {
    return { type: VIEW };
}
export const editVisible= () => {
    return { type: EDIT };
}
export const addVisible= () => {
    return { type: ADD };
}
export const userFormVisible= (val) => {
    return { type: FORM_VISIBLE, val };
}
