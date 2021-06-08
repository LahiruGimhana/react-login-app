import {React, useState , useEffect,} from 'react';
import {useDispatch, useSelector } from 'react-redux';


function UserDetails(props) {

    // const [image, setImage] = useState({Picture: ""});
    let visibility =false;
    // let dispatch = useDispatch();

    // const form_data = useSelector(state => { return state.visible_list })

    // useEffect(() => {
    //     console.log(form_data);
    //     setImage(form_data.data);
    // }, [form_data.data])

    // visibility = form_data.visible;
    visibility=props.consumerData.visibile;

  
    return (
        <>
        {/* {!visibility && */}
            <div style={{textAlign:"left", paddingLeft:"20px" , backgroundColor:"darkgrey"}}>
                <div className="col-1" style={{}}>
                    <img src={props.consumerData.data.Picture} width="30" height="30"  className="border border-secondary rounded-circle d-inline-flex bd-highlight"></img>
                    <p>{`${props.consumerData.data.FirstName}`}</p>
                </div>
                {/* <div className="col-6">
                    <p>{`${props.consumerData.data.FirstName} ${props.consumerData.data.LastName}`}</p>
                </div> */}
            </div>
        {/* } */}
        </>
    )
}

export default UserDetails
