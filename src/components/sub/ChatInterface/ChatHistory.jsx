import {React, useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';



function Chathistory() {

    // let dispatch = useDispatch();
    const [chat, setChat] = useState({})

    const chat_data = useSelector(state => { return state.chat_list })

    useEffect(() => {
        setChat(chat_data);
    }, [chat_data])

    const viewChatComponent=()=>{
        return(
            Object.keys(chat).map(key =>{
                console.log(chat[key]);
                return(
                    <div>
                        <p>{chat}</p>
                    </div>
                );
            })
        );
    }

    return (
        <div style={{height:"420px", backgroundColor:"#ECE5DD"}}>
            <div>
                {viewChatComponent()}
            </div>
        </div>
    )
}

export default Chathistory
