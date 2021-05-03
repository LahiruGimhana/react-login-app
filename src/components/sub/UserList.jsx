import React , {useState, useCallback} from 'react';
import NameList from './NameList';


function UserList(props) {

    const [nameList, setNameList] = useState();

    const onRemove=(id, callback)=>{
        console.log(props.id);
        const newList = nameList.filter((item) => item.id !== id);
        setNameList(newList);
        
    }


    return (
        <>
            <div className="col"  style={{ width: "100%" }}>
                <li className="list-group-item">
                    <p style={{ color: "red" }}>
                        <a href="">
                            <img src={props.picture} alt={props.name} className="border border-secondary rounded-circle d-inline-flex bd-highlight" />
                        </a>
                    </p>
                    <p><span style={{ color: "red" }}>Name:</span> {props.name}</p>
                    <p><span style={{ color: "red" }}>city: </span>{props.city}</p>
                    <button className="btn btn-danger" onClick={() => onRemove(props.id)}>remove</button>
                    
                </li>
            </div>
        </>
    );
}

export default UserList
