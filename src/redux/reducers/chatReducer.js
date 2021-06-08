import {RECEIVE_MSG, SEND_MSG } from '../actions/actionTypes';

const chatReducer = (state={ }, action) => {
    switch (action.type) {
        case RECEIVE_MSG :
            // let x={event: "send", from: "gimhana lahiru", to: "admin admin", content: "hello world"};

            // if (action.message) {
                if (state[action.message.from]) {
                    let msg={
                        direction: "RECEIVED",
                        message: action.message.content,
                        from: action.message.from,
                        to: action.message.to,
                    }
                    state={...state, [action.message.from] : [...state[action.message.from], msg]}
                } else {
                    let msg={
                        direction: "RECEIVED",
                        message: action.message.content,
                        from: action.message.from,
                        to: action.message.to,
                    }
                    state={...state, [action.message.from] : [msg]}
                }

                //style of final object
                // let users={
                // 	"gimhana":[{ "fname": "gimhana", "lname": 'lahiru'}, {"fcolor":'blue', "lcolor":'yello'}],
                // 	"sadun":[{ "fname": 'sadun', "lname": 'hasan'}, {"fcolor":'white', "lcolor":'black'}],
                // 	"nimal": [{ "fname": 'aaa', "lname": 'bbb'}, {"fcolor":'red', "lcolor":'green'}],
                // }
            // } 
            // state={...state};
            // console.log(`aa${state}`)
            return state;


            case SEND_MSG:

                    if(state[action.consumer_name]){
                        let msg={
                            direction: "SEND",
                            message: action.message,
                            from:action.producer_name,
                            to: action.consumer_name,
                        }
                        state={...state, [action.consumer_name] : [...state[action.consumer_name], msg]}
                        // state={...state, [sender_and_receiver] : [...state[sender_and_receiver], msg]}
                    } else {
                        let msg={
                            direction: "SEND",
                            message: action.message,
                            from:action.producer_name,
                            to: action.consumer_name,
                        }
                        state={...state, [action.consumer_name] : [msg]}
                        // state={...state, [sender_and_receiver] : [msg]}
                    }
            return state;   
               
        default:
            return state;       
    }
    // return state;       

}

export default chatReducer
