import {React, useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ChatHistory.css';


function Chathistory(props) {

    // let dispatch = useDispatch();
    const [chat, setChat] = useState({})

    const chat_data = useSelector(state => { return state.chat_list })
   


    useEffect(() => {
        setChat(chat_data);
    }, [chat_data])

    let sender_name;
    let user_name=props.consumerData.data.FirstName;

    // if(sender_name===user_name){
    //     alert('ffffffffffffffff')
    // }

    const viewChatComponent=()=>{
        
        return(
            Object.keys(chat).map((key) =>{
                
                let x=chat[key].reduce(y=>{
                    console.log(`${y} is value`)
                    return y;
                });
                
                //print message
                // alert(props.consumerData.data.FirstName);
                // if(x.from==props.consumerData.data.FirstName){
                    sender_name=x.from;
                    // alert(props.consumerData.data.FirstName);
                // }
                
                // return(
                    // <div>
                        {/* <p>{x.message}</p> */}
                    {/* </div> */}
                // );
                if (x.direction ==='SEND') {
                    return(
                        <div className='float-right m-3 p-2  badge-success' id='result_chat'>
                            <p>{x.message}</p>
                        </div>
                    );
                }
                else if(sender_name===user_name && x.direction ==='RECEIVED'){
                    return(
                        <div className='float-left m-3 p-2  badge-dark' id='result_chat'>
                            <p>{x.message}</p>
                        </div>
                    );
                }
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
