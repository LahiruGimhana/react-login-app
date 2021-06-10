import {RECEIVE_MSG, SEND_MSG } from '../actions/actionTypes';
import produce from "immer";

const INITIAL_STATE = {}

const chatReducer=produce((draft, action)=>{
    switch (action.type) {
        case RECEIVE_MSG :
            if(draft[action.message.from]){
                let msg={
                    direction: "RECEIVED",
                    message: action.message.content,
                    from: action.message.from,
                    to: action.message.to,
                }
                    //  [draft[action.message.from]] = msg;    
            }
            else{
                let msg={
                    direction: "RECEIVED",
                    message: action.message.content,
                    from: action.message.from,
                    to: action.message.to,
                }
                    draft={[action.message.from] : [msg]}
            }
        }
    }, INITIAL_STATE)
            // if (state[action.message.from]) {
            //     let msg={
            //         direction: "RECEIVED",
            //         message: action.message.content,
            //         from: action.message.from,
            //         to: action.message.to,
            //     }
            //     state={...state, [action.message.from] : [...state[action.message.from], msg]}
            // } else {
            //     let msg={
            //         direction: "RECEIVED",
            //         message: action.message.content,
            //         from: action.message.from,
            //         to: action.message.to,
            //     }
            //     state={...state, [action.message.from] : [msg]}
            // }
        // return state;

// const chatReducer = (state={ }, action) => {
//     switch (action.type) {
//         case RECEIVE_MSG :
//                 if (state[action.message.from]) {
//                     let msg={
//                         direction: "RECEIVED",
//                         message: action.message.content,
//                         from: action.message.from,
//                         to: action.message.to,
//                     }
//                     state={...state, [action.message.from] : [...state[action.message.from], msg]}
//                 } else {
//                     let msg={
//                         direction: "RECEIVED",
//                         message: action.message.content,
//                         from: action.message.from,
//                         to: action.message.to,
//                     }
//                     state={...state, [action.message.from] : [msg]}
//                 }
//             return state;


//             case SEND_MSG:

//                     if(state[action.consumer_name]){
//                         let msg={
//                             direction: "SEND",
//                             message: action.message,
//                             from:action.producer_name,
//                             to: action.consumer_name,
//                         }
//                         state={...state, [action.consumer_name] : [...state[action.consumer_name], msg]}
//                         // state={...state, [sender_and_receiver] : [...state[sender_and_receiver], msg]}
//                     } else {
//                         let msg={
//                             direction: "SEND",
//                             message: action.message,
//                             from:action.producer_name,
//                             to: action.consumer_name,
//                         }
//                         state={...state, [action.consumer_name] : [msg]}
//                         // state={...state, [sender_and_receiver] : [msg]}
//                     }
//             return state;   
               
//         default:
//             return state;       
//     }
//     // return state;       

// }

export default chatReducer
