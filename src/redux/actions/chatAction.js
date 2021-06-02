import {RECEIVE_MSG, SEND_MSG } from '../actions/actionTypes';

// export default onViewChat=(obj)=>{
//     return {}
// }
export const receivedNewMsgToList = (message) => {
    return { type: RECEIVE_MSG, message };
}

export const sendNewMsgToList = (message) => {
    return { type: SEND_MSG, message };
}