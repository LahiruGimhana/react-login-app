import React, { useState, useEffect } from 'react';
import UserList from './UserList';
// import chatList from './ChatList';
import { UserHandler } from '../../UserData/UserData';
import './Name.css'

let userHandler = new UserHandler();

function NameList() {

    const [nameList, setNameList] = useState({});

    useEffect(async () => {

        /* let usrListObj = userList.reduce((acc, item) => {
                acc[item.id] = item;
                return acc;
            }, {}); */



        /* userHandler.getAllUsers().then(userList => {
        
            setNameList(userList);
        
        }).catch(ex => {
            console.error(ex);
        }); */

        try {
            let userList = await userHandler.getAllUsers();

            setNameList(userList);

        } catch (ex) {

            console.error(ex);

        }







    }, []);

    const onRemoveUser = (id) => {

        try {
            setNameList(prevVal => {
                let tempPrev = { ...prevVal };
                delete tempPrev[id];
                return tempPrev;
            });


        } catch (ex) {

        }


    }


    const NameListComponent = () => {
        return (
            Object.keys(nameList).map(key => {
                return (
                    <UserList
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

        let createdUser = userHandler.addNewUser(newUser);

        setNameList(prevState => {
            return { ...prevState, [createdUser.id]: createdUser };
        });

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

