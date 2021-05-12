import React, { useState, forwardRef, useImperativeHandle } from 'react'

let UserForm = forwardRef((props, ref) => {

    const [visibility, setVisibility] = useState(false);
    const [visibile, setVisibile] = useState(true);

    useImperativeHandle(ref, () => ({
        openAddUserPanel: (val) => {
            setFormData({ FirstName: "", LastName: "",City: "", Id: "", Picture:""});
            setVisibility(val);
            setVisibile(true);
        },
        viewSelectUserFormData: (obj)=>{
        // alert(` success acces view data ${obj.name.first}`);
            setVisibility(true);
            setVisibile(false);
            
            //state set - click karana userta adalawa 
            setFormData({ FirstName: obj.name.first, LastName: obj.name.last, City: obj.location.city, Id: obj.id, Picture: obj.picture.medium});
            // console.log(`==================================`)
            console.log(obj)
            // getName(obj);
        }
    }));

    // const getName=(obj)=>{
    //     //  alert(obj.name.first) 
    //     return "aaa";      
    // }
    

    const [formData, setFormData] = useState({ FirstName: "", LastName: "",City: "", Id: "", Picture:""});
    
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
                <div>{!visibile && < img src={formData.Picture} width="100" height="100"></img>}</div>
                <div className="input-group mb-3">
                    <span className="input-group-addon m-1">First Name </span>
                    <input id="msg" type="text" className="form-control" name="FirstName" onChange={e => setFormData({ ...formData, FirstName: e.target.value })} value={formData.FirstName} placeholder=" First Name" />
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
                {visibile && <button className="btn btn-primary m-2" type="submit" >Submit</button>}
                {visibile && <button className="btn btn-primary m-2" type="reset">Reset</button>}
                <button className="btn btn-danger m-2" onClick={() => {
                    setVisibility(false);
                }}>Cancel</button>
            </form>}
        </>
    )
})

export default UserForm
