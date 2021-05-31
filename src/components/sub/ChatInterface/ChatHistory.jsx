import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


function Chathistory() {

    const chat_data = useSelector(state => { return state.chat_list })

    return (
        <div style={{height:"420px", backgroundColor:"#ECE5DD"}}>
            <p>

            </p>
        </div>
    )
}

export default Chathistory
