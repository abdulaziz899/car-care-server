import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ManageStaffDetail = (props) => {

    const {title,imageURL,name,_id}=props.manageStaff;
    const deleteService=id=>{
        console.log(id)
        console.log("click me")
        fetch(`http://localhost:4000/deletes/${id}`,{
            method:'DELETE',
        })
        .then(res=>res.json())
        .then(data=>console.log('deletes success ',data))
    
}
    return (
        <tr>
            <tr>{props.index+1}</tr>
            <td className='w-25'>{name}</td>
            <td  className='w-25'>{title}</td>
            <td><img className='w-25' src={imageURL} alt=""/></td>
            <button onClick={()=>deleteService(_id)} className="btn btn-outline-danger"> <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon> </button>
        </tr>
    );
};

export default ManageStaffDetail;