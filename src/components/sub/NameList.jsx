import React, { useState, useEffect } from 'react';
import UserList from './UserList';
// import chatList from './ChatList';
import { UserHandler } from '../../UserData/UserData';
import './Name.css'

let userHandler = new UserHandler();

function NameList() {
    
    const [nameList, setNameList] = useState({});

    useEffect(() => {

        let userList = userHandler.getAllUsers();

        let usrListObj = userList.reduce((acc, item) => {
            acc[item.id] = item;
            return acc;
        }, {});

        setNameList(usrListObj);

    }, []);


    const NameListComponent = () => {
        return (
            Object.keys(nameList).map(key => {
                return (
                    <UserList
                        picture={nameList[key].picture.medium}
                        name={`${nameList[key].name.first} ${nameList[key].name.last}`}
                        city={nameList[key].location.city}
                        id={nameList[key].id}
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
                    <ul className="list-group">{NameListComponent()}</ul>

                    {/* <ul className="list-group">{ChatListComponent()}</ul> */}
                </div>
            </ul>
        </>
    );
}

export default NameList

