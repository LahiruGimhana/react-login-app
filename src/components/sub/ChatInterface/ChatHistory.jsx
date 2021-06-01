import {React, useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';


function Chathistory() {
    const [chat, setChat] = useState({})

    const chat_data = useSelector(state => { return state.chat_list })

    useEffect(() => {
        setChat(chat_data);
    }, [chat_data])


    return (
        <div style={{height:"420px", backgroundColor:"#ECE5DD"}}>
            <p></p>
        </div>
    )
}

export default Chathistory
