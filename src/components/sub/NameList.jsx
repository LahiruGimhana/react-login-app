import React, { useState, useEffect } from 'react';
import User from './User';
import chatList from './ChatList';
import { UserHandler } from '../../UserData/UserData';
import './Name.css'

let userHandler = new UserHandler();

function NameList() {

    const [nameList, setNameList] = useState({});

    //==========================================================
    //add all users using API
    useEffect(async () => {

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
            let User = await userHandler.getAllUsers();

            setNameList(User);

        } catch (ex) {

            console.error(ex + 'user add error');

        }

    }, []);

//=========================================
//delete user using hard code json data

    // const onRemoveUser = (id) => {

    //     try {
    //         setNameList(prevVal => {
    //             let tempPrev = { ...prevVal };
    //             delete tempPrev[id];
    //             return tempPrev;
    //         });

    //     } catch (ex) {
    //     }
    // }


    const onRemoveUser = async(id) => {
        try {
            console.log(id);

            await fetch(`https://react-getting-started-ae727-default-rtdb.firebaseio.com/user/${id}.json`,{
            // fetch(`https://react-getting-started-ae727-default-rtdb.firebaseio.com/user/-MZlGGwBOls1WvIdGW3w.json`,{
            method: 'DELETE'
            }).then((result)=>{
                result.json().then((resp)=>{
                    console.log('remove user sucees');
                    setNameList(prevVal => {
                         let tempPrev = { ...prevVal };
                         delete tempPrev[id];
                         return tempPrev;
                     });
                    
                })
            });       
        }
         catch (error) {
            console.error();                       
        }
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
            },)
        );
    }

    //add user using hard code data
    //=======================================================================================
    // const addUserHandeler = () => {
    //     const newUser = {
    //         name: { title: "Mrs", first: "Melike", last: "Abacı" },
    //         location: {
    //             city: "Elazığ",
    //             state: "İzmir",
    //             country: "Turkey",
    //             postcode: 82207,
    //         },

    //         picture: { medium: `https://randomuser.me/api/portraits/med/women/${Math.floor(Math.random() * 100)}.jpg` },
    //     };

    //     let createdUser = userHandler.addNewUser(newUser);

    //     setNameList(prevState => {
    //         return { ...prevState, [createdUser.id]: createdUser };
    //     });

    // }

    //add new user API 
    const addUserHandeler= async()=>{
        useEffect(async () => {
            try {
            
                let newUser =await  userHandler.addNewUser();
                    // // const response = await fetch('https://react-getting-started-ae727-default-rtdb.firebaseio.com/user.json');
                    // const jsonData = await response.json();
                setNameList(prevState => {
                    return { ...prevState, newUser };
                });


            } catch (ex) {

                console.error(ex + 'new user add error');

            }

        }, []);

    }


    return (
        <>

            <ul>
                <div >
                    <button className="btn btn-primary mb-4" onClick={addUserHandeler}>Add User</button>
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
}

export default NameList

