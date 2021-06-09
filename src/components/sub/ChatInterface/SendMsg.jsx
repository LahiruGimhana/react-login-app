import { React, useState, usetextValue } from 'react';
import {useHistory} from 'react-router-dom';
import { sendMessage } from '../../../socket';
import { useDispatch, useSelector } from 'react-redux';
import {sendNewMsgToList} from '../../../redux/actions/chatAction';

function SendMsg(props) {

    let dispatch = useDispatch();
    let history = useHistory();
    // let visible=false;
    const [visible, setVisible] = useState(false);
  
    
    // console.log(`props pass data is ${props.consumerData.data.FirstName}`);
    let consumer_name = props.consumerData.data.FirstName; // + ' ' + props.consumerData.data.LastName;

    //take login user name using session
    let sessionData = sessionStorage.getItem('userLoginSessionData');

    let producer_name = sessionData? JSON.parse(sessionData).name: history.push('./login');
    // console.log(`session data is ${producer_name}`);

    //send text message
    const [textValue, setTextValue] = useState({ textMessage: "" });

    const handleInput = event => {
        setVisible(true);
        if (event.target.value == '') {
            setVisible(false);
        }
        setTextValue({ textMessage: event.target.value });
    };

    const sendTextMsg = (evt) => {
        // alert(textValue.textMessage);
        sendMessage(producer_name, consumer_name, textValue.textMessage);
        dispatch(sendNewMsgToList(producer_name, consumer_name, textValue.textMessage));
        setTextValue({ textMessage: " " });
        setVisible(false);
    }

    const check=()=>{
        if(props.consumerData.data.FirstName!=''){
            return(
                <div>
                    <div class="form-group" style={{ width: "290%", paddingRight: "10px", display:'flex' }}>
                        <input type="text" class="form-control" id="inputChat" placeholder="enter msg" value={textValue.textMessage} onChange={handleInput} />
                    </div>
                </div>
            );
        }
    }

    return (
        <div>
            <form onSubmit={(e)=>{
                //this is use for change default behavior of the form submit
                // try to go to a link.. end url in "?"
                e.preventDefault();
            }}>
                <div class="form-row" style={{ margin: "5px" }}>
                    {/* <div class="form-group" style={{ width: "90%", paddingRight: "10px" }}>
                        <input type="text" class="form-control" id="inputChat" placeholder="enter msg" value={textValue.textMessage} onChange={handleInput} />
                    </div> */}
                    {check()}

                    
                    <div style={{float:'right', paddingLeft:'430px'}}>{visible &&
                        <div className="btn btn-primary  h-65" onClick={sendTextMsg}>
                        send
                    </div>}
                    </div>
                    
                    
                </div>
            </form>
        </div>
    )
}

export default SendMsg;
