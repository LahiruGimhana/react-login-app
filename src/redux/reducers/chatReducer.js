import {RECEIVE_MSG } from '../actions/actionTypes';

const chatReducer = (state={ }, action) => {
    switch (action.type) {
        case RECEIVE_MSG :
            // let x={event: "send", from: "gimhana lahiru", to: "admin admin", content: "hello world"};

            if (action.message) {
                // let message = Object.keys(action.message).reduce((acc, key, val) => {
                //     // console.log(action.message[key].val);
                    
                //     acc[key] = action.message[key];
                //     // console.log(`${key}  is ${acc[key]}`);

                //     // console.log('bbbbbbbb');
                //     // console.log(acc[key]);
                   
                //     return acc;
               
                // }, {})
                // let data={message}
                //     console.log('aaaaaaaaaaaaaaaaaaa');
                //     console.log(data)
                    const objArray = [];
                        Object.keys(action.message).forEach(key => objArray.push({
                           name: key,
                           rating: action.message[key]
                        }));
                    console.log('aaaaaaaaaaaaaaaaaaa');
                        console.log(objArray);
                    // }
                //     return acc;

                // let obj={};
                // obj={...obj, ob}
              
        

                // }, {})
                // // state = { ...message };
                // state = { ...state, message };
                // console.log(`state is ${state}`);

            }
            return state;
               
        default:
            return state;       
    }
    // return state;       

}

export default chatReducer
