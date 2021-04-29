import React, { useState, useEffect } from 'react';
import UserList from './UserList';
// import chatList from './ChatList';

function NameList() {

    const [nameList, setNameList] = useState(
        [
            {
                id: 1,
                name: { title: "mr", first: "brad", last: "gibson" },
                location: { street: "9278 new road", city: "kilcoole", state: "waterford", postcode: "93027" },
                picture: { large: "https://randomuser.me/api/portraits/men/75.jpg", medium: "https://randomuser.me/api/portraits/med/men/75.jpg" },
            },

            {
                id: 2,
                name: { title: "Ms", first: "Gül", last: "Abacı" },
                location: { street: "8416", city: "Kars", state: "Kırşehir" },
                picture: { medium: "https://randomuser.me/api/portraits/med/women/89.jpg" },
            },

            {
                id: 3,
                name: { title: "Mrs", first: "gimhana", last: "dayananda" },
                location: { street: "8416", city: "Kurunegala", state: "Kırşehir" },
                picture: { medium: "https://randomuser.me/api/portraits/med/women/90.jpg" },
            }
        ]
    );


    const NameListComponent = () => {
        return (
            nameList.map(aName => {
                return (
                    <UserList
                        picture={aName.picture.medium}
                        name={`${aName.name.first} ${aName.name.last}`}
                        city={aName.location.city}
                    />
                );
            })
        );
    }

    // const ChatListComponent = () => {
    //     return(
    //         nameList.map(aDetails=>{
    //             return(
    //                 <UserList

    //                 />
    //             );
    //         })
    //     );
    // }



    return (
        <React.Fragment>

            <ul>
                <div className="container mt-4">
                    <h3><span class="badge badge-pill badge-success">User List</span></h3>
                    <ul className="list-group">{NameListComponent()}</ul>
                    {/* <ul className="list-group">{ChatListComponent()}</ul> */}
                </div>
            </ul>
        </React.Fragment>
    );
}

export default NameList

