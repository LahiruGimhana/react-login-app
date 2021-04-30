import React from 'react';
import NameList from './NameList'; 

function UserList(props) {
    return (
        <>
        <div className="col" style={{width:"100%"}}>
            <li className="list-group-item">
                <p style={{color:"red"}}>
                    <a href="">
                    <img src={props.picture} alt={props.name} className="border border-secondary rounded-circle d-inline-flex bd-highlight"/>
                    </a>
                </p>
                <p><span style={{color:"red"}}>Name:</span> {props.name}</p>
                <p><span style={{color:"red"}}>city: </span>{props.city}</p>
                <button className="btn btn-danger ">remove</button>
            </li>    
        </div>       
        {/* <div className="col">
            
        </div> */}
            
    </>
    );
}

export default UserList
