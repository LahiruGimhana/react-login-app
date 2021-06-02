import { React, useState, usetextValue } from 'react';
import send from '../../img/send.png';
import { sendMessage } from '../../../socket';

function SendMsg(props) {
    // let visible=false;
    const [visible, setVisible] = useState(false)
    // console.log(`props pass data is ${props.consumerData.data.FirstName}`);
    let consumer_name = props.consumerData.data.FirstName;// + ' ' + props.consumerData.data.LastName;

    //take login user name using session
    let sessionData = sessionStorage.getItem('userLoginSessionData');

    let producer_name = JSON.parse(sessionData).name;
    // console.log(`session data is ${producer_name}`);




    //send text message
    const [textValue, setTextValue] = useState({ textMessage: "" });

    const handleInput = event => {
        // setVisible(true);
        if (event.target.value == '') {
            // setVisible(false);
        }
        setTextValue({ textMessage: event.target.value });
    };

    const sendTextMsg = (evt) => {
        // alert(textValue.textMessage);
        sendMessage(producer_name, consumer_name, textValue.textMessage);
    }

    return (
        <div>
            <form>
                <div class="form-row" style={{ margin: "5px" }}>
                    <div class="form-group" style={{ width: "90%", paddingRight: "10px" }}>
                        {/* <label for="inputAddress">Address</label> */}
                        <input type="text" class="form-control" id="inputChat" placeholder="enter msg" onChange={handleInput} />
                    </div>
                    {/* <a href={sendText}> */}
                    <div className="btn btn-primary btn-sm" onClick={sendTextMsg}>
                        send
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SendMsg;
