import React, { useState, forwardRef, useImperativeHandle } from 'react'

let UserForm = forwardRef((props, ref) => {

    const [visibility, setVisibility] = useState(false);

    useImperativeHandle(ref, () => ({
        openAddUserPanel: (val) => {
            setVisibility(val);
        }
    }));


    

    const [formData, setFormData] = useState({ FirstName: "", LastName: "",City: "", Id: "" });
    
    // const submitedUserForm=(props)=>{
    //     console.log("props print");
        
    // }
    const handleSubmitAddUser= (event) => {
        event.preventDefault();
        props.submitedUserFormm(formData);
        // console.log(`${formData.FirstName}-- ${formData.LastName}-- ${formData.City}`);
    }

    return (
        <>
            {visibility && <form onSubmit={handleSubmitAddUser}>
                <div className="input-group mb-3">
                    <span className="input-group-addon m-1">First Name</span>
                    <input id="msg" type="text" className="form-control" name="FirstName"  onChange={e => setFormData({ ...formData, FirstName: e.target.value })} value={formData.FirstName} placeholder=" First Name" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-addon m-1">Last Name</span>
                    <input id="msg" type="text" className="form-control" name="LastName" onChange={e => setFormData({ ...formData, LastName: e.target.value})} value={formData.LastName} placeholder="Last Name" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-addon m-1">City</span>
                    <input id="msg" type="text" className="form-control" name="City" onChange={e => setFormData({ ...formData, City: e.target.value})} value={formData.City} placeholder="City" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-addon m-1">Id</span>
                    <input id="msg" type="text" className="form-control" name="Id" onChange={e => setFormData({ ...formData, Id: e.target.value})} value={formData.Id} placeholder="Id" />
                </div>
                <button className="btn btn-primary m-2" type="submit" >Submit</button>
                <button className="btn btn-primary m-2" type="reset">Reset</button>
                <button className="btn btn-danger m-2" onClick={() => {
                    setVisibility(false);
                }}>Cancel</button>
            </form>}
        </>
    )
})

export default UserForm
