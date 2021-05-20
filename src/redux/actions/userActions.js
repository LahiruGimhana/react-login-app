import { GET_USER_LIST, REMOVE_USER_LIST, EDIT_USER_LIST ,ADD_NEW_USER_TO_LIST} from './actionTypes';


export const getUserList = (userList) => {
    return { type: GET_USER_LIST, userList };
}

export const removeUserList = (id) => {
    return { type: REMOVE_USER_LIST, id };
}

export const editUserList = (obj) => {
    return { type: EDIT_USER_LIST, obj};
}

export const addNewUserToList = (user) => {
    return { type: ADD_NEW_USER_TO_LIST, user };
}