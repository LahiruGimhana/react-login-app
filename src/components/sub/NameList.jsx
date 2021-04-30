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

    const addUserHandeler=()=>{
        const newUser={
            id:4,
            name:{title: "Mrs",first: "Melike",last: "Abacı"},
            location: {  
                city: "Elazığ",
                state: "İzmir",
                country: "Turkey",
                postcode: 82207,
                },
                
            picture: {medium:`https://randomuser.me/api/portraits/med/women/${Math.floor(Math.random() * 100)}.jpg`},
        };
        setNameList((nameList)=>[...nameList, newUser]);
    }


    return (
        <React.Fragment>

            <ul>
                <div >
                    <h3><span class="badge badge-pill badge-success">User List</span></h3>
                    <ul className="list-group">{NameListComponent()}</ul>
                    <button className="btn btn-primary mb-4" onClick={addUserHandeler}>click</button>
                    {/* <ul className="list-group">{ChatListComponent()}</ul> */}
                </div>
            </ul>
        </React.Fragment>
    );
}

export default NameList

