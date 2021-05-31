import {React, useState , useEffect,} from 'react';
import {useDispatch, useSelector } from 'react-redux';


function UserDetails() {

    const [image, setImage] = useState({Picture: ""});
    let visibility =false;
    let dispatch = useDispatch();
    const form_data = useSelector(state => { return state.visible_list })

    useEffect(() => {
        console.log(form_data);
        setImage(form_data.data);
    }, [form_data.data])

    visibility = form_data.visible;

    return (
        <>
        {/* {!visibility && */}
            <div style={{textAlign:"left", paddingLeft:"20px" , backgroundColor:"darkgrey"}}>
                  < img src={image.Picture} width="30" height="30"  className="border border-secondary rounded-circle d-inline-flex bd-highlight"></img>
            </div>
        {/* } */}
        </>
    )
}

export default UserDetails
