import { GET_USER_LIST, REMOVE_USER_LIST, EDIT_USER_LIST, ADD_NEW_USER_TO_LIST } from '../actions/actionTypes';

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_USER_LIST:
            if (action.userList) {
                // console.log("ppppppppppppppppppppppppp");
                // console.log(action.userList);
                let usrList = Object.keys(action.userList).reduce((acc, key) => {
                   
                    if (typeof action.userList[key] === 'object') {
                        action.userList[key].userId = key;
                        acc[key] = action.userList[key];
                    }
                    // console.log("tttttttttttttttttttt");
                    // console.log(acc);

                    return acc;

                }, {})
                state = { ...usrList };

            }
            return state;

        case REMOVE_USER_LIST:
            let tempPrev = { ...state };
            delete tempPrev[action.id];
            state = tempPrev;
            return state;

        case EDIT_USER_LIST:
            console.log(action.obj.key);

            console.log(action.obj.user);
            // console.log('/////////////////////');

            //   Object.keys(action.obj)

            state = { ...state, [action.obj.key]: action.obj.user }
            return state;

        case ADD_NEW_USER_TO_LIST:
            state = { ...state, [action.user.key]: action.user.user };
            return state;

        default:
            return state
    }
}

export default userReducer;