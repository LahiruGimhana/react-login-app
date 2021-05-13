import React, { useState, forwardRef, useImperativeHandle } from 'react'

let UserForm = forwardRef((props, ref) => {

    const initialState={ FirstName: "", LastName: "",City: "", Id: "", Picture:""};
    const [formData, setFormData] = useState(initialState);

    const [visibility, setVisibility] = useState(false);
    const [viewVisible, setViewVisible] = useState(true);
    const [editVisible, setEditVisible] = useState(true);

    useImperativeHandle(ref, () => ({
        openAddUserPanel: (val) => {
            setFormData(initialState);
            setVisibility(val);
            setViewVisible(true);
            setEditVisible(true);
        },
        viewSelectUserFormData: (obj)=>{
        // alert(` success acces view data ${obj.name.first}`);
            setVisibility(true);
            setViewVisible(false);
            
            //state set - click karana userta adalawa 
            setFormData({ FirstName: obj.name.first, LastName: obj.name.last, City: obj.location.city, Id: obj.id, Picture: obj.picture.medium});
            // console.log(`==================================`)
            console.log(obj)
            // getName(obj);
        },
        editSelectUserFormData: (obj)=>{
            setVisibility(true);
            setViewVisible(true);
            setEditVisible(false);
            setFormData({ FirstName: obj.name.first, LastName: obj.name.last, City: obj.location.city, Id: obj.id, Picture: obj.picture.medium});
        }
    }));

    // const getName=(obj)=>{
    //     //  alert(obj.name.first) 
    //     return "aaa";      
    // }
    

    
    const handleSubmitAddUser= (event) => {
        event.preventDefault();
        props.submitedUserFormm(formData);
        // console.log(`${formData.FirstName}-- ${formData.LastName}-- ${formData.City}`);
    }

    const handleEditUser= (event) => {
        event.preventDefault();
        props.editedUserFormm(formData);
        // console.log(`${formData.FirstName}-- ${formData.LastName}-- ${formData.City}`);

    }

    return (
        <>
            {visibility && <form onSubmit={handleSubmitAddUser} onSubmit={handleEditUser}>
                <div>{(!viewVisible || !editVisible) && < img src={formData.Picture} width="100" height="100"></img>}</div>
                <div>{(viewVisible && !editVisible) && 
                    <div className="input-group mb-3">
                        <span className="input-group-addon m-1">change image </span>
                        <input type="text" className="form-control" name="changeImage" onChange={e => setFormData({ ...formData, changeImage: e.target.value })} value={formData.changeImage} placeholder="enter random number(1-100)"/>
                    </div>
                    }
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-addon m-1">First Name </span>
                    <input disabled={!viewVisible? true: false } id="msg" type="text" className="form-control" name="FirstName" onChange={e => setFormData({ ...formData, FirstName: e.target.value })} value={formData.FirstName} placeholder=" First Name" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-addon m-1">Last Name</span>
                    <input disabled={!viewVisible? true: false } id="msg" type="text" className="form-control" name="LastName" onChange={e => setFormData({ ...formData, LastName: e.target.value})} value={formData.LastName} placeholder="Last Name" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-addon m-1">City</span>
                    <input disabled={!viewVisible? true: false } id="msg" type="text" className="form-control" name="City" onChange={e => setFormData({ ...formData, City: e.target.value})} value={formData.City} placeholder="City" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-addon m-1">Id</span>
                    <input disabled={!viewVisible? true: false } id="msg" type="text" className="form-control" name="Id" onChange={e => setFormData({ ...formData, Id: e.target.value})} value={formData.Id} placeholder="Id" />
                </div>
                {viewVisible && editVisible && <button className="btn btn-primary m-2" type="submit" >Submit</button>}
                {viewVisible && editVisible && <button className="btn btn-primary m-2" type="reset">Reset</button>}
                {!editVisible && viewVisible   && <button className="btn btn-primary m-2" type="submit" >save</button>}
                {/* {viewVisible   && <button className="btn btn-primary m-2" type="submit" >{ !editVisible? 'ok':'no'}</button>} */}
                <button className="btn btn-danger m-2" onClick={() => {
                    setVisibility(false);
                }}>Cancel</button>
            </form>}
        </>
    )
})

export default UserForm
