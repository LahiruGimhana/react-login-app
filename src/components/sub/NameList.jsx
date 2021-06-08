import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import User from './User';
import chatList from './ChatList';
import { UserHandler } from '../../UserData/UserData';
import './NameList.css'
import { getUserList, removeUserList } from '../../redux/actions/userActions';
import { editVisible, viewVisible, onViewChatt } from '../../redux/actions/visibileAction';


let userHandler = new UserHandler();


//Userform submited data 
let NameList = forwardRef((props, ref) => {

    let dispatch = useDispatch();

    useImperativeHandle(ref, () => ({
        getUserFormData: (FormData) => {
            // console.log(`aaaaaaaaaaaaaaaaaaaa ${FormData.FirstName}`)
            addUserHandeler(FormData);
        },
       
    }));



    // function NameList(props) {

    const [nameList1, setNameList] = useState({});
    const nameList = useSelector(state => { return state.user_list })
    // console.log(`fuuuuuuu ${nameList}`);
    //==========================================================
    //add all users using API
    useEffect(async () => {

        //********/ me option okkoma hari

        /* let usrListObj = User.reduce((acc, item) => {
                acc[item.id] = item;
                return acc;
            }, {}); */


        /* userHandler.getAllUsers().then(User => {      
            setNameList(User);       
        }).catch(ex => {
            console.error(ex);
        }); */



        try {
            let users = await userHandler.getAllUsers();  //methanata userData eken return wena promis eka anne

            dispatch(getUserList(users));

            /* if (users) {
                let usrList = Object.keys(users).reduce((acc, key) => {
                    users[key].userId = key;
                    acc[key] = users[key];

                    return acc;

                }, {})
                setNameList(usrList);

            } */


        } catch (ex) {
            console.error(ex + 'user add error');
        }

    }, []);

    /* =========================================
    delete user using hard code json data
    
        const onRemoveUser = (id) => {
    
            try {
                setNameList(prevVal => {
                    let tempPrev = { ...prevVal };
                    delete tempPrev[id];
                    return tempPrev;
                });
    
            } catch (ex) {
            }
        } */


    const onRemoveUser = (id) => {
        console.log(id);
        userHandler.removeUser(id).then(() => {

            dispatch(removeUserList(id));
            /* setNameList(prevVal => {
                let tempPrev = { ...prevVal };
                delete tempPrev[id];
                return tempPrev;
            }); */

            // setNameList(prevState => {
            //     return { ...prevState, [createdUser.id]: createdUser };
            // });
        }).catch(ex => {
            console.error(ex);
        });
    }


    const onViewUser = (id) => {
        let x = { ...nameList };
        //read state data
        // console.log(x[id].name.first);
        // props.onViewUser(x[id]);
        dispatch(viewVisible(id, x[id]));
    }

    const onEditUser = (id) => {
        let x = { ...nameList };
        let obj=x[id];
        // props.onEditUser(id, obj);
        dispatch(editVisible(id, obj));
        
        // return id;
    }



    const onViewChat=(id)=>{        
        let x = { ...nameList };
        let obj=x[id];
        dispatch(onViewChatt(obj))
    }

    /*     add user using hard code data
        =======================================================================================
        const addUserHandeler = () => {
            const newUser = {
                name: { title: "Mrs", first: "Melike", last: "Abacı" },
                location: {
                    city: "Elazığ",
                    state: "İzmir",
                    country: "Turkey",
                    postcode: 82207,
                },
    
                picture: { medium: `https://randomuser.me/api/portraits/med/women/${Math.floor(Math.random() * 100)}.jpg` },
            };
    
        api hada gatta new userwa useradata component eke me pette hadagatta object eka haraha ehapette addNewUser ekata ywanwa,
        ethanin return wena value eka methana createdUser ta dagannawa
            let createdUser = userHandler.addNewUser(newUser); 
    
            setNameList(prevState => {
                return { ...prevState, [createdUser.id]: createdUser };
            });
        } */

    //add new user API 
    const addUserHandeler = (data) => {
        setNameList(prevState => {
            return { ...prevState, [data.key]: data.user };
        });
    }


    const getData = () => {
        let data = sessionStorage.getItem('userLoginSessionData');
        // return data ? JSON.parse(data).name :null;
        return JSON.parse(data).name;
        // return data;
    };
    
    // alert(getData())

    const NameListComponent = () => {
        return (
            Object.keys(nameList).map(key => {
                // console.log('user list');
                // console.log(nameList);
                // console.log(nameList[key]);
                let fullName=`${nameList[key].name.first}`;// ${nameList[key].name.last}`;

                if(getData()!=fullName){
                return (
                    <User
                        picture={nameList[key].picture.medium}
                        name={`${nameList[key].name.first} ${nameList[key].name.last}`}
                        city={nameList[key].location.city}
                        id={key}

                        onRemove={onRemoveUser}
                        onView={onViewUser}
                        onEdit={onEditUser}
                        onViewChat={onViewChat}
                    />

                );
                }
            })
        );
    }

    return (
        <>
            <ul>
                <div >
                    <div style={{marginLeft:'15px', marginTop:'1px'}}>
                        <button className="btn btn-primary mb-1" onClick={ props.openAddUserForm}>Add User</button>
                    </div>
                    {/* <h3><span className="badge badge-pill badge-success">User List</span></h3> */}
                    <ul className="list-group">
                        <div>
                            {NameListComponent()}
                        </div>
                    </ul>

                    {/* <ul className="list-group">{ChatListComponent()}</ul> */}
                </div>
            </ul>
        </>
    );
})

export default NameList

