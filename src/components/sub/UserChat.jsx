import React, { useImperativeHandle } from 'react'
import { UserHandler } from '../../UserData/UserData';
let userHandler = new UserHandler();


const UserChat = ((ref, props) => {
    const [userData, setUserData] = useState({FirstName:"", LastName:""})

    useImperativeHandle(ref,() => ({
            openUserChatPanel : (val)=>{
                setFormData(initialState);
                setVisibility(val);
                // setFormState("ADD");
            }
        }))

    return (
        <>
           {
               <div>
                    <div className="input-group mb-3">
                        <span className="input-group-addon m-1"> {userData.FirstName} {userData.LastName}</span>
                    </div>
                    <div>
                        <span>chat history</span>
                    </div>
                    <form>
                    <textarea id="w3review" name="w3review" rows="4" cols="50">
                    
                    </textarea>
                    {formState === 'ADD' && <button className="btn btn-primary m-2" type="submit" >Submit</button>}
                    <button className="btn btn-danger m-2" onClick={() => {
                        setVisibility(false);
                    }}>Cancel</button>
                    </form>
               </div>
            }
        </>
    )
})


export default UserChat
