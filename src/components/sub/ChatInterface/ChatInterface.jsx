import {React, useState , useEffect} from 'react';
import SendMsg from './SendMsg';
import Chathistory from './ChatHistory';
import UserDetails from './UserDetails';

import {useDispatch, useSelector } from 'react-redux';

function ChatInterface() {


    const [visibility, setVisibility] = useState(false);
    const [name, setName] = useState("")
    // let visibility = false;
    let dispatch = useDispatch();
    const form_data = useSelector(state => { return state.visible_list })

    // useEffect(() => {
    //     // console.log(form_data);
    //     // console.log(`props pass data is ${form_data.data.FirstName}`);

    //     // setImage(form_data.data);
    //     setVisibility(form_data.visible);
    //     setName(form_data.data.FirstName);
    // }, [form_data.data])

    // visibility = form_data.visible;

    return (
        <>
            {!visibility &&
            <div>
                <UserDetails/>
                <Chathistory/>
                <SendMsg consumerData={form_data}/>
            </div>
            }
        </>
    )
}

export default ChatInterface
