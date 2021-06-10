import {React, useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ChatHistory.css';

//call visibale List reducer
import {msgCounter } from '../../../redux/actions/visibileAction';

function Chathistory(props) {
    let count=0;
    const dispatch=useDispatch();
  

    let chat_user_name=props.consumerData.data.FirstName;
    // let your_name;

    // const your_name = () => {
    //     let data = sessionStorage.getItem('userLoginSessionData');
    //     return JSON.parse(data).name;
    // };
    // console.log(your_name());
    

    const chat_data = useSelector(state => { return state.chat_list })
   
    var today = new Date();
    var time = today.getHours()%12 + ":" + today.getMinutes(); // + ":" + today.getSeconds();
    // var dateTime = time;
    // console.log(dateTime);


    const viewChatComponent=()=>{

        if (chat_data[chat_user_name]) {
            return(
                chat_data[chat_user_name].map(data =>{

                    if(data.direction==='RECEIVED'){
                      if(data.message && chat_user_name){
                        count++;
                        dispatch(msgCounter(count));
                    }
                        console.log(`${chat_user_name} msg count is ${count}`); 

                        return(
                            <div class="chat-bubble_received received" >
                                   <div class="content_received"><p>{data.message} <small><sub>{time}</sub></small></p></div>
                            </div>
                        );
                    }

                    if(data.direction==='SEND'){
                        return(
                            <div class="chat-bubble me">
                                <div class="content"><p>{data.message} <small><sub>{time}</sub></small></p></div>
                            </div>
                        );
                    }

                })           
            )
        }else{
            return(<></>);
        }
    }


    return (
        <div style={{height:"420px", backgroundColor:"#ECE5DD"}}>
            <div className='row'>
                {viewChatComponent()}
            </div>
        </div>
    )
}

export default Chathistory

