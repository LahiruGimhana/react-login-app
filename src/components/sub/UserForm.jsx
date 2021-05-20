import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< remotes/origin/develop
import { editUserList } from '../../redux/actions/userActions';
=======
import { editUserList, addNewUserToList } from '../../redux/actions/userActions';
>>>>>>> local
import { UserHandler } from '../../UserData/UserData';
let userHandler = new UserHandler();

let UserForm = forwardRef((props, ref) => {
    let dispatch = useDispatch();

    const initialState = { FirstName: "", LastName: "", City: "", Id: "", Picture: "" , imageNu:"" ,keyId:""};
    const [formData, setFormData] = useState(initialState);

    const [visibility, setVisibility] = useState(false);
    const [formState, setFormState] = useState("VIEW");

    useImperativeHandle(ref, () => ({
        openAddUserPanel: (val) => {
            setFormData(initialState);
            setVisibility(val);
            setFormState("ADD");
        },
        viewSelectUserFormData: (obj) => {
            // alert(` success acces view data ${obj.name.first}`);
            setVisibility(true);
            setFormState("VIEW");

            //state set - click karana userta adalawa 
            setFormData({ FirstName: obj.name.first, LastName: obj.name.last, City: obj.location.city, Id: obj.id, Picture: obj.picture.medium });
            // console.log(`==================================`)
            console.log(obj)
            // getName(obj);
        },

        editSelectUserFormData: (keyId, obj) => {
            setVisibility(true);
            setFormState("EDIT");
            // console.log(`==================================`)
<<<<<<< remotes/origin/develop
            // console.log(obj)
            setFormData({ FirstName: obj.name.first, LastName: obj.name.last, City: obj.location.city, Id: obj.id, Picture: obj.picture.medium , keyId: keyId});
        }
    }));



=======
            let imageNu = (obj.picture.medium).match(/\d+/g);
            // console.log(obj);
            
            setFormData({ FirstName: obj.name.first, LastName: obj.name.last, City: obj.location.city, Id: obj.id, Picture: obj.picture.medium ,imageNu:imageNu, keyId: keyId});
        }
    }));

>>>>>>> local
    const addNewUser = () => {
        const newUser = {
            id: "1",
            name: { title: "Mrs", first: formData.FirstName, last: formData.LastName },
            location: { city: formData.City },

            picture: { medium: `https://randomuser.me/api/portraits/med/women/${Math.floor(Math.random() * 100)}.jpg` },
        };
 
        userHandler.addNewUser(newUser).then(data => {
            dispatch(addNewUserToList(data));

        }).catch(ex => {
            console.error(ex);
        });
    }

<<<<<<< remotes/origin/develop
    // const editUser = () => {
    //     const newUser = {
    //         id: "1",
    //         name: { first: formData.FirstName, last: formData.LastName },
    //         location: { city: formData.City },
    //         picture: { medium: `https://randomuser.me/api/portraits/med/women/${formData.imageNu}.jpg` },
    //     };

    //     console.log(formData.keyId);
    //     userHandler.editSelectUser(formData.keyId, newUser).then(data => {
    //         props.editedUserFormm(formData);
    //     }).catch(ex => {
    //         console.error(ex);
    //     });
    // }

=======
>>>>>>> local

    const editSelectUser = () => {
        const newUser = {
            id: "1",
            name: { first: formData.FirstName, last: formData.LastName },
            location: { city: formData.City },
            picture: { medium: `https://randomuser.me/api/portraits/med/women/${formData.imageNu}.jpg` },
        };

<<<<<<< remotes/origin/develop
        console.log(formData.keyId);
        userHandler.editSelectUser(formData.keyId, newUser).then(data => {
            setFormData(data)
             dispatch(editUserList(data));
=======
        // console.log(formData.keyId);
        userHandler.editSelectUser(formData.keyId, newUser).then(data => {
            setFormData(data)
            // console.log(data)
            dispatch(editUserList(data));
>>>>>>> local

            // props.editedUserFormm(data);
        }).catch(ex => {
            console.error(ex);
        });
    }




    const formSubmit = (event) => {
        event.preventDefault();

        if (formState === 'EDIT') {
<<<<<<< remotes/origin/develop
            //edit
=======
>>>>>>> local
            editSelectUser()
            // props.editedUserFormm(formData);
        } else {
            addNewUser();
        }

        // console.log(`${formData.FirstName}-- ${formData.LastName}-- ${formData.City}`);
    }

    return (
        <>
            {visibility && <form onSubmit={formSubmit}>
                <div>{formState !== 'ADD' && < img src={formData.Picture} width="100" height="100"></img>}</div>
                <div>{(formState === 'EDIT') &&
                    <div className="input-group mb-3">
                        <span className="input-group-addon m-1">change image </span>
                        <input type="number" className="form-control" name="imageNu" onChange={e => setFormData({ ...formData, imageNu: e.target.value })} value={formData.imageNu} min="1" max="100" placeholder="number(1-100)" />
                    </div>
                }
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-addon m-1">First Name </span>
                    <input disabled={formState === 'VIEW'} id="msg" type="text" className="form-control" name="FirstName" onChange={e => setFormData({ ...formData, FirstName: e.target.value })} value={formData.FirstName} placeholder=" First Name" required/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-addon m-1">Last Name</span>
                    <input disabled={formState === 'VIEW'} id="msg" type="text" className="form-control" name="LastName" onChange={e => setFormData({ ...formData, LastName: e.target.value })} value={formData.LastName} placeholder="Last Name" required />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-addon m-1">City</span>
                    <input disabled={formState === 'VIEW'} id="msg" type="text" className="form-control" name="City" onChange={e => setFormData({ ...formData, City: e.target.value })} value={formData.City} placeholder="City" required />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-addon m-1">Id</span>
                    <input disabled={formState === 'VIEW'} id="msg" type="text" className="form-control" name="Id" onChange={e => setFormData({ ...formData, Id: e.target.value })} value={formData.Id} placeholder="Id" required />
                </div>
                {formState === 'ADD' && <button className="btn btn-primary m-2" type="submit" >Submit</button>}
                {formState !== 'VIEW' && <button className="btn btn-primary m-2">Reset</button>}
                {formState === 'EDIT' && <button className="btn btn-primary m-2" type="submit" >save</button>}
                {/* {viewVisible   && <button className="btn btn-primary m-2" type="submit" >{ !editVisible? 'ok':'no'}</button>} */}
                <button className="btn btn-danger m-2" onClick={() => {
                    setVisibility(false);
                }}>Cancel</button>
            </form>}
        </>
    )
})

export default UserForm
