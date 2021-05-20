import { GET_USER_LIST, REMOVE_USER_LIST ,EDIT_USER_LIST ,ADD_NEW_USER_TO_LIST} from '../actions/actionTypes';

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_USER_LIST:
            if (action.userList) {
                let usrList = Object.keys(action.userList).reduce((acc, key) => {
                    action.userList[key].userId = key;
                    acc[key] = action.userList[key];

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
            // let tempPrev = { ...state };
            // delete tempPrev[action.id];
            // state = tempPrev;
            // const editTodo = (id, text) => {
                // let editTodos = state.map((todo) => {
                //   if (todo.id === action.id) {
                //     todo.text = text;
                //   }
                //   state=editTodos;
                //   return state
                // });

            console.log(action.obj.key);

            console.log(action.obj.user);
            console.log('/////////////////////');
            
        //   Object.keys(action.obj)

            let allkeys= Object.keys(state);
            allkeys.reduce((accumulator, value)=>{
                if(value===action.obj.key){
                    const st= { ...state, [action.obj.key]: action.obj.user };
                    state=st;
                    return state;
                }
                
            },0);
            return state;
            // state = x;



            // if(action.obj.key==state.)
            // return state;
            
        case ADD_NEW_USER_TO_LIST:
            const st= { ...state, [action.user.key]: action.user.user };
            state=st;

        return state;

        default:
            return state
    }
}

export default userReducer;