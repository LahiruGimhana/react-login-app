import React from 'react';
import NameList from './NameList';
import './User.css'

import { useDispatch, useSelector } from 'react-redux';


function User(props) {
    let dispatch = useDispatch();

    const onRemove = (id) => {
        props.onRemove(id);
        // console.log(props.id);
    }

    const onView=(id)=>{
        props.onView(id);
        // dispatch(viewVisible(id));
    }

    const onEdit=(id)=>{
        // dispatch(editVisible(id));
        props.onEdit(id);
    }

    const onViewChat=(id)=>{
        props.onViewChat(id);
    }


    return (
        <>
            <div className="col" style={{ width: "100%" }}>
                <li className="list-group-item">
                    <p onClick={()=>{onViewChat(props.id)}} style={{ color: "red" }}>
                        {/* <a href=""> */}
                        <button style={{border:"none"}}>
                            <img src={props.picture} alt={props.name} className="border border-secondary rounded-circle d-inline-flex bd-highlight" />
                        </button>
                        {/* </a> */}
                    </p>
                    <p><span style={{ color: "red" }}>Name:</span> {props.name}</p>
                    <p><span style={{ color: "red" }}>city: </span>{props.city}</p>
                    <button className="btn btn-danger small" onClick={() => { onRemove(props.id) }}>remove</button>
                    <button className="btn btn-primary small" onClick={() => { onView(props.id) }}>view</button>
                    <button className="btn btn-warning small m-1" onClick={() => { onEdit(props.id) }}>edit</button>

                </li>
            </div>
        </>
    );
}

export default User
