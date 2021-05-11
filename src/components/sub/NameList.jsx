import React, { useState, useEffect,  forwardRef, useImperativeHandle} from 'react';
import User from './User';
import chatList from './ChatList';
import { UserHandler } from '../../UserData/UserData';
import './Name.css'

let userHandler = new UserHandler();


//Userform submited data 
    let NameList=forwardRef((props, ref)=>{
        
        useImperativeHandle(ref, () => ({
            getUserFormData : (FormData)=>{
                console.log(`aaaaaaaaaaaaaaaaaaaa ${FormData.FirstName}`)
                addUserHandeler(FormData);
            }
        }));


  
// function NameList(props) {

    const [nameList, setNameList] = useState({});

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
            let User = await userHandler.getAllUsers();  //methanata userData eken return wena promis eka anne
            setNameList(User);
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
            setNameList(prevVal => {
                let tempPrev = { ...prevVal };
                delete tempPrev[id];
                return tempPrev;
            });

            // setNameList(prevState => {
            //     return { ...prevState, [createdUser.id]: createdUser };
            // });
        }).catch(ex => {
            console.error(ex);
        });
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
    const addUserHandeler = (FormData) => {
        const newUser = {
            name: { title: "Mrs", first:FormData.FirstName, last: FormData.LastName },
            location: {city: FormData.City, state: "İzmir", country: "Turkey", postcode: 82207},

            picture: { medium: `https://randomuser.me/api/portraits/med/women/${Math.floor(Math.random() * 100)}.jpg` },
        };
        //methanath promis ekak return wenne 
        // let createdUser = userHandler.addNewUser(newUser); me widihata ganna nam awaite use k wenwa

        //api promis ekak widihata hadamu -- use then, catch
        userHandler.addNewUser(newUser).then(data => {

            //methana prevState kiyanne func ekak, me widihata eka tama keti karla use kare
            /* let func1=(prevState)=>{
                return { ...prevState, [createdUser.id]: createdUser };
            } */

            setNameList(prevState => {
                return { ...prevState, [data.key]: data.user };
            });
        }).catch(ex => {
            console.error(ex);
        });
    }


    const NameListComponent = () => {
        return (
            Object.keys(nameList).map(key => {
                return (
                    <User
                        picture={nameList[key].picture.medium}
                        name={`${nameList[key].name.first} ${nameList[key].name.last}`}
                        city={nameList[key].location.city}
                        id={key}
                        onRemove={onRemoveUser}
                    />

                );
            })
        );
    }

    return (
        <>
            <ul>
                <div >
                    <button className="btn btn-primary mb-4" onClick={props.openAddUserForm}>Add User</button>
                    <h3><span className="badge badge-pill badge-success">User List</span></h3>
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

