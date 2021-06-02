import {RECEIVE_MSG } from '../actions/actionTypes';

const chatReducer = (state={receivedMsg:{}, }, action) => {
    switch (action.type) {
        case RECEIVE_MSG :
            // console.log(action.message.content);
            let x={event: "send", from: "gimhana lahiru", to: "admin admin", content: "hello world"};
            let newMsg=action.message;
            state={...state, receivedMsg:newMsg };
            return state;
            // if (action.message) {
            //     let message = Object.keys(action.message).reduce((acc, key) => {

            //         if (typeof action.message[key] === 'object') {
            //             action.message[key].userId = key;
            //             acc[key] = action.message[key];

            //         }

            //         return acc;

            //     }, {})
            //     state = { ...message };

            // }
            // return state;
               
        default:
            return state;       
    }
    // return state;       

}

export default chatReducer
